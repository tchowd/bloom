import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Subscribe from '../Homepage/Subscribe'
import Testimonials from '../Homepage/Testimonials'
import MainIntro from '../Homepage/MainIntro'
import Info from './Info'
import Features from './Features'

function Homepage() {
  return (
    <>
        <Navbar />
        <MainIntro />
        <Testimonials />
        <Info />
        <Features />
        <Subscribe />
        <Footer />
    </>
  )
}

export default Homepage