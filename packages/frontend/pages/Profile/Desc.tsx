import { Box } from '@chakra-ui/react'
import React from 'react'

function Desc() {
  return (
    <div>
      <Box
        position={'relative'}
        rounded={'2xl'}
        borderWidth='0.1rem'
        padding={'1.2rem'}
        width='30rem'
        borderColor='gray.200'
        overflow={'hidden'}
        _hover={{ boxShadow: 'lg' }}
        marginRight={'4rem'}    >

        Web3 enthusiast, entrepreneurial spirit, open to work.
      </Box>
    </div>
  )
}

export default Desc