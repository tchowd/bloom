import React from 'react'
import NavbarNoWallet from '../components/NavbarNone'
import Footer from '../components/Footer'
import Subscribe from '../Homepage/Subscribe'
import Testimonials from '../Homepage/Testimonials'
import MainIntro from '../Homepage/MainIntro'
import Info from './Info'
import Features from './Features'

function Homepage() {
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

export default Homepage