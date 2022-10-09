import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../Dashboard/Sidebar'
import CompanyDetail from './companyDetail'
import { Box } from '@chakra-ui/react'


const Company: NextPage = () => {
  return (
    <>

      <Sidebar children={undefined} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        <CompanyDetail />
      </Box>


    </>
  )
}

export default Company