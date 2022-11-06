import React from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import styles from './Map.module.css'

import { useRef, useEffect } from 'react'

function Map ({nodes, edges, selectedNodeId, finalTemperature, handleNodeSelect}) {
  const mapContainer = useRef(null)
  const map = useRef(null)

  const addProducersLayer = () => {
    if (map.current.getLayer('heating-producer')) map.current.removeLayer('heating-producer')

    map.current.addLayer(
      {
        id: 'heating-producer',
        type: 'fill',
        source: 'composite',
        'source-layer': 'building',
        paint: {
          'fill-color': '#f00',
        },
        filter: ['in', '$id', ...nodes
          .filter(({type}) => type === 'producer')
          .map(({mapboxId}) => mapboxId)
          .filter(mapboxId => mapboxId)],
      },
      'settlement-label'
    )

    const finalTemperatureMatch = nodes
      .filter(({type}) => type === 'producer')
      .reduce((acc, node) => {
        // TODO: final temp per producer
        const temperature = `${finalTemperature !== null ? finalTemperature : 9000} \xB0C`
        return [...acc, node.mapboxId, temperature]
      }, [])

    if (map.current.getLayer('heating-producer-final-temperature')) map.current.removeLayer('heating-producer-final-temperature')

    map.current.addLayer({
      id: 'heating-producer-final-temperature',
      source: 'composite',
      'source-layer': 'building',
      type: 'symbol',
      layout: {
        'text-field': ['format', ['string', ['match', ['id'], ...finalTemperatureMatch, '']]],
      },
      filter: ['in', '$id', ...nodes
        .filter(({type}) => type === 'producer')
        .map(({mapboxId}) => mapboxId)
        .filter(mapboxId => mapboxId)],
    })
  }

  const addConsumersLayer = () => {
    const maxDeltaT = Math.max(...nodes.map(({deltaT}) => deltaT))

    const deltaTMatch = nodes
      .filter(({mapboxId}) => mapboxId)
      .reduce((acc, node) => {
        return [...acc, node.mapboxId, Math.max(0, node.deltaT / maxDeltaT - 0.1)];
      }, [])

    if (map.current.getLayer('heating-consumer')) map.current.removeLayer('heating-consumer')

    map.current.addLayer(
      {
        id: 'heating-consumer',
        type: 'fill',
        source: 'composite',
        'source-layer': 'building',
        paint: {
          'fill-color': '#008000',
          'fill-opacity': [
            'case',
            ['boolean', ['feature-state', 'hover'], false],
            1,
            ['boolean', ['feature-state', 'selected'], false],
            1,
            ['match', ['id'], ...deltaTMatch, 0.5],
          ],
        },
        filter: ['in', '$id', ...nodes
          .filter(({type}) => type === 'consumer')
          .map(({mapboxId}) => mapboxId)
          .filter(mapboxId => mapboxId)],
      },
      'heating-producer'
    )
  }

  const addPipesLayer = () => {
    if (map.current.getLayer('heating-pipe')) map.current.removeLayer('heating-pipe')
    if (map.current.getSource('heating-pipe')) map.current.removeSource('heating-pipe')

    map.current.addSource('heating-pipe', {
      'type': 'geojson',
      'data': {
        'type': 'FeatureCollection',
        'features': edges.map(([sourceName, targetName]) => {
          const sourceNode = nodes.find(({name}) => name === sourceName)
          const targetNode = nodes.find(({name}) => name === targetName)

          return {
            'type': 'Feature',
            'properties': {},
            'geometry': {
              'type': 'LineString',
              'coordinates': [
                [sourceNode.longitude, sourceNode.latitude],
                [targetNode.longitude, targetNode.latitude],
              ],
            },
          }
        }),
      },
    });

    map.current.addLayer(
      {
        'id': 'heating-pipe',
        'type': 'line',
        'source': 'heating-pipe',
        'layout': {
          'line-join': 'round',
          'line-cap': 'round',
        },
        'paint': {
          'line-color': '#0f0',
          'line-width': 8,
          'line-opacity': 0.5,
        },
      },
      'heating-consumer'
    );
  }

  useEffect(() => {
    // Initialize map only once
    if (map.current) return;

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [24.8322152, 60.1875592], // Otaniemi
      zoom: 16,
      minZoom: 16,
    })

    map.current.on('load', () => {
      addProducersLayer()
      addConsumersLayer()
      addPipesLayer()
    })

    map.current.on('click', (event) => {
      const features = map.current.queryRenderedFeatures(event.point, {
        layers: ['building'],
      })

      // TODO: remove debug
      console.log(features, event.lngLat.wrap())

      const [building] = features
      const node = building && nodes.find(({mapboxId}) => building.id === mapboxId)

      if (node) {
        handleNodeSelect(node.id)
      } else {
        handleNodeSelect(null)
      }
    })

    let hoveredStateId = null;
    map.current.on('mousemove', 'heating-consumer', (e) => {
      if (e.features.length > 0) {
        if (hoveredStateId !== null) {
          map.current.setFeatureState(
            { source: 'composite', sourceLayer: 'building', id: hoveredStateId },
            { hover: false }
          );
        }

        hoveredStateId = e.features[0].id;
        map.current.setFeatureState(
          { source: 'composite', sourceLayer: 'building', id: hoveredStateId },
          { hover: true }
        );
      }
    });

    map.current.on('mouseleave', 'heating-consumer', () => {
      if (hoveredStateId !== null) {
        map.current.setFeatureState(
          { source: 'composite', sourceLayer: 'building', id: hoveredStateId },
          { hover: false }
        );
      }
      hoveredStateId = null;
    });
  })

  const previousSelectedNodeId = useRef(selectedNodeId)

  useEffect(() => {
    if (map.current && map.current.isStyleLoaded()) {
      if (previousSelectedNodeId.current) {
        const previousNode = nodes.find(({id}) => id === previousSelectedNodeId.current)
        map.current.setFeatureState(
          { source: 'composite', sourceLayer: 'building', id: previousNode.mapboxId },
          { selected: false }
        );
      }

      const node = nodes.find(({id}) => id === selectedNodeId)
      if (node) {
        map.current.setFeatureState(
          { source: 'composite', sourceLayer: 'building', id: node.mapboxId },
          { selected: true }
        );
      }

      previousSelectedNodeId.current = selectedNodeId
    }
  }, [selectedNodeId])

  useEffect(() => {
    if (map.current && map.current.isStyleLoaded()) {
      addProducersLayer()
      addConsumersLayer()
      addPipesLayer()
    }
  }, [nodes, edges, finalTemperature])

  return (
    <div className={styles.map} ref={mapContainer}></div>
  )
}

export default Map
