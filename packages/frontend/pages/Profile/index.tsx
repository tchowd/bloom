import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../Dashboard/Sidebar'
import { Box } from '@chakra-ui/react'
import ProfileCard from './ProfileCard'
import Featured from './Featured'
import Follow from './Follow'
import ProfileDetails from './ProfileDetails'

const Profile: NextPage = () => {
    return (
    <>
        <Sidebar children={undefined} />
        <ProfileCard />

        <Box ml={{ base: 0, md: 60 }} p="4" style={{marginRight: '5rem'}}>
          <Featured />
          {/* <Follow></Follow> */}
        </Box>
        </>

  )
}

export default Profile