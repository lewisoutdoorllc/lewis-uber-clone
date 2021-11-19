import React, { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import { useRouter } from 'next/router'
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { auth, provider } from '../firebase'


const Login = () => {

    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged( auth, user => {
            if (user) {
                router.push('/')
            }
        })
    } , [])

    return (
        <Wrapper>
            <UberLogo src='https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg' />
            <Title>Login To Access Your Account</Title>
            <LoginImage src='https://i.ibb.co/CsV9RYZ/login-image.png' />
            {/* signIn button with google; when clicked google will have a popup to signIn and authinticate all in one step */}
            <SignInButton onClick={() => signInWithPopup(auth, provider)} >Sign In With Goole</SignInButton>
        </Wrapper>
    )
}

export default Login

const Wrapper = tw.div`
flex flex-col h-full items-center justify-center p-4
`
const UberLogo = tw.img`
h-20 w-auto object-contain self-start
`
const LoginImage = tw.img`
object-contain w-full
`
const Title = tw.div`
text-5xl pt-4 text-gray-500
`

const SignInButton = tw.button`
bg-black text-white text-center py-4 mt-8 self-center shadow-lg w-full
`
