import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from 'tailwind-styled-components'
// import mapboxgl from '!mapbox-gl'
import Map from './componets/Map'
import Link from 'next/link'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'



export default function Home() {

  const [user, setUser] = useState(null)

  const router = useRouter()

  useEffect(() => {
    return onAuthStateChanged(auth, user => {
      if (user) {
        setUser({
          displayName: user.displayName,
          // email: user.email,
          photoURL: user.photoURL,
        })
      } else {
        setUser(null)
        router.push('/login')
      }
    })
  }, [])

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/* header */}
        <Header>
          {/* uber logo left side */}
          <UberLogo src='https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg' alt="" />
          {/* profile name and picture right side */}
          <Profile>
            <ProfileName>{user && user.displayName}</ProfileName>
            <ProfilePicture 
            onClick={() => signOut(auth)} 
            src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_258083.png&f=1&nofb=1' alt="" />
            {/* <ProfilePicture src={user && user.photoURL} alt="" /> */}
          </Profile>
        </Header>
        {/* action buttons  */}
        <ActionButtons>
          {/* ride button */}
          <Link href='/search'>
            <ActionButton>
              <ActionButtonImg src='https://i.ibb.co/cyvcpfF/uberx.png' alt="" />
              Ride</ActionButton>
          </Link>
          {/* how many wheels button */}
          <ActionButton>
            <ActionButtonImg src='https://i.ibb.co/n776JLm/bike.png' alt="" />
            How Many Wheels</ActionButton>
          {/* reserve a ride button */}
          <ActionButton>
            <ActionButtonImg src='https://i.ibb.co/5RjchBg/uberschedule.png' alt="" />
            Reserve</ActionButton>
        </ActionButtons>
        {/* input field */}
        <InputField>Where To?</InputField>
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div` 
flex flex-col h-screen
`
// const Map = tw.div`
// flex-1
// bg-gray-500
// `
const ActionItems = tw.div`
flex-1 p-4
`
const Header = tw.div`
flex justify-between items-center
`
const UberLogo = tw.img`
h-28
`
const Profile = tw.div`
flex items-center
`
const ProfileName = tw.div`
mr-4 w-20 text-sm
`
const ProfilePicture = tw.img`
h-16 w-16 rounded-full border-1 border-gray-200 p-px cursor-pointer
`
const ActionButtons = tw.div`
flex
`
const ActionButton = tw.div`
flex flex-col justify-center items-center bg-gray-200 flex-1 m-1 h-32 rounded-xl text-xl transform hover:scale-105 transition ease-in-out duration-300
`
const ActionButtonImg = tw.img`
h-3/5
`
const InputField = tw.div`
flex items-center h-20 bg-gray-200 rounded-xl text-2xl p-4 mt-8
`
