import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, useNavigation } from 'react-router-dom'
import Loading from './Loading'


const Applayout = () => {
  let navigation = useNavigation()
  console.log(navigation)

  if(navigation.state === "loading") return <Loading/>

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/> 
    </>
  )
}

export default Applayout
