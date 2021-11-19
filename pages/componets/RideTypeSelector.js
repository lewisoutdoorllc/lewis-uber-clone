import React, { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import { carList } from '../data/carList'

const RideTypeSelector = ({ pickupCoords, dropoffCoords }) => {

    const [rideDuration, setRideDuration] = useState(0)

    useEffect(() => {
        rideDuration = fetch(
            `https://api.mapbox.com/directions/v5/mapbox/driving/
        ${pickupCoords[0]}, ${pickupCoords[1]};
        ${dropoffCoords[0]}, ${dropoffCoords[1]}?access_token=pk.eyJ1IjoibGV3aXNvdXRkb29yIiwiYSI6ImNrdnprNjl1cTEyeXoyd3BhbGN3M2ZlYzgifQ.Gc42G5eAvQUvUfSKepFipw`
        ).then(res => res.json())
            .then(data => {
                setRideDuration(data.routes[0].duration / 60)
            }
            )

    }, [pickupCoords, dropoffCoords])

    return (
        <Wrapper>
            <Title>How would you like to ride?</Title>
            {/* choose the ride type list */}
            <RideTypeList>
                {carList.map((car, index) => (
                    <Car key={index}>
                        {/* image */}
                        <CarImage src={car.imgUrl} />
                        {/* description */}
                        <CarRideDetails>
                            <Service>{car.service}</Service>
                            <Time>10 min away</Time>
                        </CarRideDetails>
                        {/* cost */}
                        <Cost>{'$' + (rideDuration * car.multiplier ).toFixed(2) }</Cost>
                    </Car>
                ))}
            </RideTypeList>
        </Wrapper>
    )
}

export default RideTypeSelector

const Wrapper = tw.div`
flex flex-col flex-1 overflow-y-scroll
`
const Title = tw.div`
text-gray-600 text-center text-sm py-2 border-b
`
const RideTypeList = tw.div`
overflow-y-scroll
`
const Car = tw.div`
flex p-4 items-center
`
const CarImage = tw.img`
h-14 mr-4
`
const CarRideDetails = tw.div`
flex-1
`
const Service = tw.div`
font-medium
`
const Time = tw.div`
text-xs text-blue-500
`
const Cost = tw.div`
text-sm
`
