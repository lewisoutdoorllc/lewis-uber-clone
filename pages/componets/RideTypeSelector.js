import React from 'react'
import tw from 'tailwind-styled-components'

const RideTypeSelector = () => {
    return (
        <Wrapper>
            <Title>How would you like to ride?</Title>
            {/* choose the ride type list */}
            <RideTypeList>
                {/* uber X */}
                <Car>
                    {/* image */}
                    <CarImage src='https://i.ibb.co/cyvcpfF/uberx.png' />
                    {/* description */}
                    <CarRideDetails>
                        <Service>UberX</Service>
                        <Time>10 min away</Time>
                    </CarRideDetails>
                    {/* cost */}
                    <Cost>$25.00</Cost>
                </Car>
                {/* uber XL */}
            </RideTypeList>
        </Wrapper>
    )
}

export default RideTypeSelector

const Wrapper = tw.div`
flex-1 
`
const Title = tw.div`
text-gray-600 text-center text-sm py-2 border-b
`
const RideTypeList = tw.div`

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
