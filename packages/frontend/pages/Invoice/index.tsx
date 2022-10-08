import React from 'react'
import Sidebar from '../Dashboard/Sidebar'
import Highlights from './Form'
import {Box} from '@chakra-ui/react';
import Form from './Form'

function Overview() {
  return (
    <>
        <Sidebar children={undefined} />
        <Box ml={{ base: 0, md: 60 }} p="4">
          <Form />
        </Box>
    </>
  )
}

export default Overview