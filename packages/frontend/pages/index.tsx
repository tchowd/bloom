import Head from 'next/head';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { GetGreeter, SetGreeter } from '../components/contract';
import React from 'react'
import Navbar from '../pages/components/Navbar'
import Footer from '../pages/components/Footer'
import Subscribe from './Home/Subscribe'
import Testimonials from './Home/Testimonials'
import MainIntro from './Home/MainIntro'
import Info from './Home/Info'
import Features from './Home/Features'
import NavbarNone from './components/NavbarNoWallet copy';
import NavbarNoWallet from './components/NavbarNone';

export default function Home() {
  return (
    <>
      <NavbarNoWallet />
      <MainIntro />
      <Testimonials />
      <Info />
      <Features />
      <Subscribe />
      <Footer />
    </>
  );
}
