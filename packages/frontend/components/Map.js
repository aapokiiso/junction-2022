import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import styles from './Map.module.css'

import {useRef, useEffect} from 'react'

function Map() {
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

            map.current.addLayer(
                {
                    'id': 'buildings-highlighted',
                    'type': 'fill',
                    'source': 'composite',
                    'source-layer': 'building',
                    'paint': {
                        'fill-outline-color': '#f00',
                        'fill-color': '#f00',
                        'fill-opacity': 0.5
                    },
                },
                'settlement-label'
            );
        })
    })

    return (
        <div className={styles.mapContainer} ref={mapContainer}></div>
    )
}

export default Map
