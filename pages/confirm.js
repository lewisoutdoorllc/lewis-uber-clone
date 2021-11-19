import { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import Map from './componets/Map'
import { useRouter } from 'next/router'
import RideTypeSelector from './componets/RideTypeSelector'
import Link from 'next/link'


const Confirm = () => {
    const router = useRouter()
    const { pickup, dropoff } = router.query

    // console.log("pickup", pickup);
    // console.log("dropoff", dropoff);
    // useState for pickupCoords and dropoffCoords
    const [pickupCoords, setPickupCoords] = useState(0,0)
    const [dropoffCoords, setDropoffCoords] = useState(0,0)

    // set up mapbox to get coordinates for trip
    const getPickupCoords = (pickup) => {

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

    const getDropoffCoords = (dropoff) => {

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
        getPickupCoords(pickup)
        getDropoffCoords(dropoff)
    }, [pickup, dropoff])



    return (
        <Wrapper>
            {/* back button to search */}
            <BackButtonContainer>
                <Link href="/search">
                    <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
                </Link>
            </BackButtonContainer>
            {/* map section */}
            <Map
                pickupCoords={pickupCoords}
                dropoffCoords={dropoffCoords}
            />
            <ConfirmRideTypeContainer>
                {/* select the type of ride section */}
                <RideTypeSelector
                    pickupCoords={pickupCoords}
                    dropoffCoords={dropoffCoords}
                />
                {/* confirm uber button */}
                <ConfirmRideButtonContainer>
                    <ConfirmRideButton>Confirm Uber</ConfirmRideButton>
                </ConfirmRideButtonContainer>
            </ConfirmRideTypeContainer>
        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
flex flex-col h-screen
`
const BackButtonContainer = tw.div`
rounded-full absolute top-4 left-4 bg-white z-10 shadow-lg cursor-pointer
`
const BackButton = tw.img`
h-full object-contain
`
const ConfirmRideTypeContainer = tw.div`
flex flex-1 flex-col h-1/2
`
const ConfirmRideButtonContainer = tw.div`
border-t-2
`
const ConfirmRideButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl 
`




