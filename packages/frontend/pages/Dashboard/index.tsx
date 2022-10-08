import React from 'react'
import type { NextPage } from 'next'
import Sidebar from './Sidebar'
import TableSection from './Table'
import Highlights from './Highlights'
import Projects from './Projects'
import { Box } from '@chakra-ui/react'


const Dashboard: NextPage = () => {
    return (
    <>
      
        <Sidebar children={undefined} />
        {/* <TestSidebar children={undefined} /> */}
        <Box ml={{ base: 0, md: 60 }} p="4">
          {/* <TableSection /> */}
          <Highlights />
          <Projects />
        </Box>

    </>
  )
}

export default Dashboard