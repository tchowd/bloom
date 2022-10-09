import React from 'react'
import NavbarNoWallet from '../components/NavbarNone'
import Footer from '../components/Footer'
import Subscribe from './Subscribe'
import Testimonials from './Testimonials'
import MainIntro from './MainIntro'
import Info from './Info'
import Features from './Features'

function Home() {
  return (
    <>
        <NavbarNoWallet />
        <MainIntro />
        <Testimonials />
        <Features />
        <Info />
        {/* <Features /> */}
        <Subscribe />
        <Footer />
    </>
  )
}

export default Home