import React from 'react'
import tw from 'tailwind-styled-components'
import Link from 'next/link'

const Search = () => {
    return (
        <Wrapper>
            {/* back button */}

            <BackButtonContainer>
                <Link href="/">
                    <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
                </Link>
            </BackButtonContainer>

            {/* pickup location and where to location input fields */}
            <InputContainer>
                <FromHereToThereIcons>
                    <FromHereToThereIconCircle src='https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png' />
                    <FromHereToThereIconLine src='https://img.icons8.com/ios/50/9CA3AF/vertical-line.png' />
                    <FromHereToThereIconSquare src='https://img.icons8.com/windows/50/000000/square-full.png' />
                </FromHereToThereIcons>
                <InputField>
                    <Input placeholder='Pickup Location' />
                    <Input placeholder='Where To?' />
                </InputField>
                <PlusIconButton src='https://img.icons8.com/ios/50/000000/plus-math.png' />
            </InputContainer>
            {/* saved places section */}
            <SavedPlacesContainer>
                <StarIcon src='https://img.icons8.com/ios-filled/50/ffffff/star--v1.png' />
                Saved Places
            </SavedPlacesContainer>
            {/* confrim locations button */}
            <ConfirmLocationsContainer>
                Confirm Locations
            </ConfirmLocationsContainer>
        </Wrapper>
    )
}

export default Search

const Wrapper = tw.div`
bg-gray-200 h-screen
`
const BackButtonContainer = tw.div`
bg-white px-4
`
const BackButton = tw.img`
h-12 cursor-pointer
`
const InputContainer = tw.div`
flex bg-white items-center px-4 mb-2
`
const FromHereToThereIcons = tw.div`
flex flex-col w-10 mr-2 items-center
`
const FromHereToThereIconCircle = tw.img`
h-2.5
`
const FromHereToThereIconLine = tw.img`
h-10
`
const FromHereToThereIconSquare = tw.img`
h-3
`
const InputField = tw.div`
flex flex-col flex-1
`
const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-lg p-2 outline-none border-none
`
const PlusIconButton = tw.img`
w-10 h-10 bg-gray-200 rounded-full ml-3
`
const SavedPlacesContainer = tw.div`
flex items-center px-4 py-4 bg-white
`
const StarIcon = tw.img`
bg-gray-400 h-10 w-10 p-2 mr-2 rounded-full
`
const ConfirmLocationsContainer = tw.div`
text-white text-center text-2xl tracking-wide justify-center py-3 my-4 mx-4 bg-black rounded-xl cursor-pointer
`
