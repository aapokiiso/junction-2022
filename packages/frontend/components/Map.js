import React from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import styles from './Map.module.css'

import { useRef, useEffect } from 'react'

function Map () {
  const mapContainer = useRef(null)
  const map = useRef(null)

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [24.8322152, 60.1875592], // Otaniemi
      zoom: 14,
    })

    map.current.on('load', () => {
      console.log(map.current)

      const nodes = [
        {type: 'producer', name: 'St1', mapboxId: 24408439, latitude: 60.18803446, longitude: 24.82800426},
        {type: 'consumer', name: 'Kandikeskus', mapboxId: 4148, latitude: 60.18653275, longitude: 24.82832467},
        {type: 'consumer', name: 'Nanotalo', mapboxId: 11159678, latitude: 60.18698854, longitude: 24.82484653},
        {type: 'consumer', name: 'Konetalo', mapboxId: 156903276, latitude: 60.18723004, longitude: 24.82669374},
        {type: 'consumer', name: 'Sähkötalo', mapboxId: 24342454, latitude: 60.18901735, longitude: 24.83140802},
        {type: 'consumer', name: 'Kvarkki', mapboxId: 1402504, latitude: 60.18824527, longitude: 24.8301013},
        {type: 'consumer', name: 'Raksatalo', mapboxId: 7579330, latitude: 60.18732835, longitude: 24.8315244},
        {type: 'consumer', name: 'OK20', mapboxId: 24334160, latitude: 60.18679975, longitude: 24.83373056},
        {type: 'consumer', name: 'Täffä', mapboxId: 4252953, latitude: 60.18607292, longitude: 24.83297745},
        {type: 'consumer', name: 'Dipoli', mapboxId: 4252954, latitude: 60.18512581, longitude: 24.83247243},
        {type: 'consumer', name: 'A Blanc', mapboxId: 7589907, latitude: 60.18468969, longitude: 24.83032829},
        {type: 'consumer', name: 'OK18', mapboxId: 4259264, latitude: 60.18809503, longitude: 24.83551164},
        {type: 'consumer', name: 'JMT1', mapboxId: 24334123, latitude: 60.18691892, longitude: 24.83484714},
        {type: 'consumer', name: 'Teekkarimuseo', mapboxId: 24333970, latitude: 60.18732858, longitude: 24.83637993},
        {type: 'consumer', name: 'JMT6', mapboxId: 24334231, latitude: 60.18849146, longitude: 24.8373634},
        {type: 'consumer', name: 'JMT11', mapboxId: 24334286, latitude: 60.18938122, longitude: 24.83902024},
        {type: 'junction', name: '1', mapboxId: null, latitude: 60.18780909, longitude: 24.8285705},
        {type: 'junction', name: '2', mapboxId: null, latitude: 60.1870675, longitude: 24.82765256},
        {type: 'junction', name: '3', mapboxId: null, latitude: 60.18676515, longitude: 24.82717064},
        {type: 'junction', name: '4', mapboxId: null, latitude: 60.1873185, longitude: 24.82508232},
        {type: 'junction', name: '5', mapboxId: null, latitude: 60.18868758, longitude: 24.82953434},
        {type: 'junction', name: '6', mapboxId: null, latitude: 60.18857349, longitude: 24.83054407},
        {type: 'junction', name: '7', mapboxId: null, latitude: 60.18856208, longitude: 24.8316915},
        {type: 'junction', name: '8', mapboxId: null, latitude: 60.18847081, longitude: 24.83296514},
        {type: 'junction', name: '9', mapboxId: null, latitude: 60.18843088, longitude: 24.83372244},
        {type: 'junction', name: '10', mapboxId: null, latitude: 60.18770641, longitude: 24.83319462},
        {type: 'junction', name: '11', mapboxId: null, latitude: 60.18698763, longitude: 24.83287334},
        {type: 'junction', name: '12', mapboxId: null, latitude: 60.18617185, longitude: 24.83229963},
        {type: 'junction', name: '13', mapboxId: null, latitude: 60.18532183, longitude: 24.8311063},
        {type: 'junction', name: '14', mapboxId: null, latitude: 60.1847228, longitude: 24.83080797},
        {type: 'junction', name: '15', mapboxId: null, latitude: 60.18766078, longitude: 24.83527146},
        {type: 'junction', name: '16', mapboxId: null, latitude: 60.18764937, longitude: 24.83566158},
        {type: 'junction', name: '17', mapboxId: null, latitude: 60.18763796, longitude: 24.83643036},
        {type: 'junction', name: '18', mapboxId: null, latitude: 60.18843089, longitude: 24.83794496},
        {type: 'junction', name: '19', mapboxId: null, latitude: 60.18948619, longitude: 24.83871373},
      ]

      const edges = [
        ['St1', '1'],
        ['1', '2'],
        ['1', '5'],
        ['2', 'Konetalo'],
        ['2', '3'],
        ['3', 'Kandikeskus'],
        ['3', '4'],
        ['4', 'Nanotalo'],
        ['5', '6'],
        ['6', 'Kvarkki'],
        ['6', '7'],
        ['7', 'Sähkötalo'],
        ['7', '8'],
        ['8', 'Raksatalo'],
        ['8', '9'],
        ['9', '10'],
        ['10', '11'],
        ['10', '15'],
        ['11', 'OK20'],
        ['11', '12'],
        ['12', 'Täffä'],
        ['12', '13'],
        ['13', 'Dipoli'],
        ['13', '14'],
        ['14', 'A Blanc'],
        ['15', 'JMT1'],
        ['15', '16'],
        ['16', 'OK18'],
        ['16', '17'],
        ['17', 'Teekkarimuseo'],
        ['17', '18'],
        ['18', 'JMT6'],
        ['18', '19'],
        ['19', 'JMT11'],
      ]

      map.current.addLayer(
        {
          id: 'buildings-highlighted',
          type: 'fill',
          source: 'composite',
          'source-layer': 'building',
          paint: {
            'fill-outline-color': '#f00',
            'fill-color': '#f00',
            'fill-opacity': 0.5,
          },
          filter: ['in', '$id', ...nodes
            .filter(({type}) => type === 'producer' || type === 'consumer')
            .map(({mapboxId}) => mapboxId)],
        },
        'settlement-label'
      )

      map.current.addSource('route', {
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

      map.current.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
          'line-join': 'round',
          'line-cap': 'round',
        },
        'paint': {
          'line-color': '#0f0',
          'line-width': 8,
        },
      });
    })

    // TODO: remove debug
    map.current.on('click', (event) => {
      const features = map.current.queryRenderedFeatures(event.point, {
        layers: ['building'],
      })
      console.log(features)
    })
  })

  return (
    <div className={styles.mapContainer} ref={mapContainer}></div>
  )
}

export default Map
