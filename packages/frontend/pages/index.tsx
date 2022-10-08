import Head from 'next/head';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { GetGreeter, SetGreeter } from '../components/contract';
import React from 'react'
import Navbar from '../pages/components/Navbar'
import Footer from '../pages/components/Footer'
import Subscribe from '../pages/Homepage/Subscribe'
import Testimonials from '../pages/Homepage/Testimonials'
import MainIntro from '../pages/Homepage/MainIntro'
import Info from '../pages/Homepage/Info'
import Features from '../pages/Homepage/Features'

export default function Home() {
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
  );
}
