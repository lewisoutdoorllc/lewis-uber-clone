import React from 'react'
import tw from 'tailwind-styled-components'
import Map from './componets/Map'


const Confirm = () => {
    return (
        <Wrapper>
            <Map />
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
