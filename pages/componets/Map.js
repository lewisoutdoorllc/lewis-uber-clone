import { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from '!mapbox-gl'
// my mapbox access token
mapboxgl.accessToken =
    'pk.eyJ1IjoibGV3aXNvdXRkb29yIiwiYSI6ImNrdnprNjl1cTEyeXoyd3BhbGN3M2ZlYzgifQ.Gc42G5eAvQUvUfSKepFipw';

const Map = (props) => {
    // starts mapbox map
    // and sets the map to the center of the united states
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
            center: [-99.29011, 39.39172],
            zoom: 3
        })
        // adds pickup maker
        if (props.pickupCoords) {
            addToMap(map, props.pickupCoords)
        }
        // adds dropoff maker
        if (props.dropoffCoords) {
            addToMap(map, props.dropoffCoords)
        }
        // map auto zoom using fitBounds
        if (props.pickupCoords && props.dropoffCoords) {
            map.fitBounds([
                props.pickupCoords,
                props.dropoffCoords
            ], {
                // styles for map zoom
                padding: 55,
            })
        }

    }, [props.pickupCoords, props.dropoffCoords])
    // adds markers to map for pickup and dropoff locations
    const addToMap = (map, coords) => {
        const marker1 = new mapboxgl.Marker()
            .setLngLat(coords)
            .addTo(map);
    }

    return (
        <Wrapper id='map'>

        </Wrapper>
    )
}

export default Map

const Wrapper = tw.div` 
flex-1
`
