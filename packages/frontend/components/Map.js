import React from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import styles from './Map.module.css'

import { useRef, useEffect } from 'react'

function Map ({nodes, edges, selectedNodeId, handleNodeSelect}) {
  const mapContainer = useRef(null)
  const map = useRef(null)

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
      // TODO: remove debug
      console.log(map.current)

      map.current.addLayer(
        {
          id: 'heating-building',
          type: 'fill',
          source: 'composite',
          'source-layer': 'building',
          paint: {
            'fill-outline-color': '#f00',
            'fill-color': '#f00',
            'fill-opacity': [
              'case',
              ['boolean', ['feature-state', 'hover'], false],
              1,
              ['boolean', ['feature-state', 'selected'], false],
              1,
              0.5,
            ],
          },
          filter: ['in', '$id', ...nodes
            .filter(({type}) => type === 'producer' || type === 'consumer')
            .map(({mapboxId}) => mapboxId)
            .filter(mapboxId => mapboxId)],
        },
        'settlement-label'
      )

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
          },
        },
        'heating-building'
      );
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
    map.current.on('mousemove', 'heating-building', (e) => {
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

    map.current.on('mouseleave', 'heating-building', () => {
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

  return (
    <div className={styles.mapContainer} ref={mapContainer}></div>
  )
}

export default Map
