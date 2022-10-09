import { Box, HStack, VStack, Text } from '@chakra-ui/react'
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
            width='20rem'
            borderColor='gray.200'
            overflow={'hidden'}
            _hover={{boxShadow: 'lg'}}
            marginRight={'4rem'}    >
            
            <VStack marginTop='1rem'>
                <Text>Life Time Earned ($USDC)</Text>
                <Text as='b' fontSize='5xl'>$8956</Text>
            </VStack>
        </Box>
        <Box
            position={'relative'}
            rounded={'2xl'}
            borderWidth='0.1rem'
            padding={'1.2rem'}
            width='20rem'
            borderColor='gray.200'
            overflow={'hidden'}
            _hover={{boxShadow: 'lg'}}
            marginRight={'4rem'}    >
            
            <VStack marginTop='1rem'>
                <Text>Earned in last 6 Months ($USDC)</Text>
                <Text as='b' fontSize='5xl'>$1256</Text>
            </VStack>
        </Box>
        </HStack>

    </div>
  )
}

export default Desc