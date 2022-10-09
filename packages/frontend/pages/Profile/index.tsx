import React from 'react'
import type { NextPage } from 'next'
import { Box, Center, VStack } from '@chakra-ui/react'
// import Navbar from '../../components/Navbar'
// import Footer from '../../components/Footer'
import CompanyProfile from './ContributorProfile'
import TotalEarned from './TotalEarned'
import Sidebar from '@/pages/Dashboard/Sidebar'
import Discussion from './Discussion'
import Resources from './Resources'
import Featured from './Featured'
import GithubScrapper from './GithubScrapper'
import Desc from './Desc'

const Company: NextPage = () => {
  return (
    <>
        <Sidebar children={undefined} />
        <CompanyProfile />
        <Box ml={{ base: 0, md: 60 }} p="4" style={{marginLeft: '20rem'}} maxW="1060px">
            <Center>
              <VStack>
              <Desc />
              <TotalEarned />
              </VStack>
            </Center>
            <div style={{marginTop: '3rem'}}>
            <Discussion />
            </div>
            <div style={{marginTop: '3rem'}}>
            {/* <Resources /> */}
            {/* <GithubScrapper /> */}
            </div>
            <div style={{marginTop: '3rem'}}>
            <Featured />

            </div>
        </Box>
        </>
  )
}

export default Company