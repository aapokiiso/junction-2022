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

      const ids = [
        24408439,
        4148,
        11159678,
        156903276,
        24342454,
        1402504,
        7579330,
        24334160,
        4252953,
        4252954,
        7589907,
        4259264,
        24334123,
        24333970,
        24334231,
        24334286,
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
          filter: ['in', '$id', ...ids],
        },
        'settlement-label'
      )
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
