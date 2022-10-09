import { Box, HStack } from '@chakra-ui/react'
import React from 'react'

function Desc() {
  return (
    <div>
        <HStack>
        <Box
            position={'relative'}
            rounded={'2xl'}
            borderWidth='0.1rem'
            padding={'1.2rem'}
            width='5rem'
            borderColor='gray.200'
            overflow={'hidden'}
            _hover={{boxShadow: 'lg'}}
            marginRight={'4rem'}    >
            
            dsfsdf
        </Box>
        <Box
            position={'relative'}
            rounded={'2xl'}
            borderWidth='0.1rem'
            padding={'1.2rem'}
            width='5rem'
            borderColor='gray.200'
            overflow={'hidden'}
            _hover={{boxShadow: 'lg'}}
            marginRight={'4rem'}    >
            
            dsfsdf
        </Box>
        </HStack>

    </div>
  )
}

export default Desc