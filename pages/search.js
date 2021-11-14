import React from 'react'
import tw from 'tailwind-styled-components'

const Search = () => {
    return (
        <Wrapper>
            {/* back button */}
            <BackButtonContainer>
                <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
            </BackButtonContainer>
            {/* pickup location and where to location input fields */}
            <InputContainer>
                <FromHereToThereIcons>
                    <FromHereToThereIconCircle src='https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png' />
                    <FromHereToThereIconLine src='https://img.icons8.com/ios/50/9CA3AF/vertical-line.png' />
                    <FromHereToThereIconSquare src='https://img.icons8.com/windows/50/000000/square-full.png' />
                </FromHereToThereIcons>
                <InputField>
                    <Input placeholder='Pickup Location'/>
                    <Input  placeholder='Where To?'/>
                </InputField>
            </InputContainer>
            {/* saved places section */}

            {/* confrim locations button */}

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
h-12
`
const InputContainer = tw.div`
flex bg-white
`
const FromHereToThereIcons = tw.div`
flex flex-col w-10 
`
const FromHereToThereIconCircle = tw.img`

`
const FromHereToThereIconLine = tw.img`

`
const FromHereToThereIconSquare = tw.img`

`
const InputField = tw.div`
flex flex-col flex-1
`
const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-lg p-2 outline-none border-none
`

