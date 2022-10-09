import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../Dashboard/Sidebar'
import { Box } from '@chakra-ui/react'
import ProfileCard from './ProfileCard'
import Featured from './Featured'

const Profile: NextPage = () => {
    return (
    <>
        <Sidebar children={undefined} />
        <Box ml={{ base: 0, md: 60 }} p="4" style={{marginRight: '5rem'}}>
          <ProfileCard />
          <Featured />
        </Box>
    </>
  )
}

export default Profile