import { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import Map from './componets/Map'


const Confirm = () => {
    // useState for pickupCoords and dropoffCoords
    const [pickupCoords, setPickupCoords] = useState(null)
    const [dropoffCoords, setDropoffCoords] = useState(null)

    // set up mapbox to get coordinates for trip
    const getPickupCoords = () => {
        const pickup = 'Orlando, FL'
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
            new URLSearchParams({
                access_token: 'pk.eyJ1IjoibGV3aXNvdXRkb29yIiwiYSI6ImNrdnprNjl1cTEyeXoyd3BhbGN3M2ZlYzgifQ.Gc42G5eAvQUvUfSKepFipw',
                limit: 1
            })
        )
            .then(res => res.json())
            .then(data => {
                setPickupCoords(data.features[0].center)
            })
    }

    const getDropoffCoords = () => {
        const dropoff = 'Oviedo, FL'
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
            new URLSearchParams({
                access_token: 'pk.eyJ1IjoibGV3aXNvdXRkb29yIiwiYSI6ImNrdnprNjl1cTEyeXoyd3BhbGN3M2ZlYzgifQ.Gc42G5eAvQUvUfSKepFipw',
                limit: 1
            })
        )
            .then(res => res.json())
            .then(data => {
                setDropoffCoords(data.features[0].center)
            })
    }

    useEffect(() => {
        getPickupCoords()
        getDropoffCoords()
    }, [])



    return (
        <Wrapper>
            <Map
                pickupCoords={pickupCoords}
                dropoffCoords={dropoffCoords}
            />
            <ConfirmRideTypeContainer>
                {/* select the type of ride section */}

                {/* confirm uber button */}

            </ConfirmRideTypeContainer>
        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
flex flex-col h-screen 
`
const ConfirmRideTypeContainer = tw.div`
flex flex-1 
`
