import React from 'react'
import Sidebar from '../Dashboard/Sidebar'
import Highlights from './Highlights'
import {Box} from '@chakra-ui/react';


function Overview() {
  return (
    <>
        <Sidebar children={undefined} />
        <Box ml={{ base: 0, md: 60 }} p="4">
          {/* <TableSection /> */}
          <Highlights />
          {/* <Projects /> */}
        </Box>
    </>
  )
}

export default Overview