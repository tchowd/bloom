import React from 'react'
import {
    Box,
    HStack,
    VStack,
  } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
  
function Highlights() {
  return (
    <>
        <Text> Overview</Text>
        <HStack style={{marginTop: '2rem'}}>
            <VStack>
                    <Box
                position={'relative'}
                rounded={'2xl'}
                borderWidth='0.2rem'
                borderColor='gray.200'
                overflow={'hidden'}
                _hover={{boxShadow: 'lg'}}
            >
                    <Box w="100%">
                    <Box  borderRadius="lg" 
                    overflow="hidden"
                    height="8rem"
                    rounded='90px'
                    width="30rem">
                        sdf
                    </Box>
                    </Box>
            </Box>
            <Box
                position={'relative'}
                rounded={'2xl'}
                borderWidth='0.2rem'
                borderColor='gray.200'
                overflow={'hidden'}
                _hover={{boxShadow: 'lg'}}
            >
                    <Box w="100%">
                    <Box  borderRadius="lg" 
                            overflow="hidden"
                            height="8rem"
                            rounded='90px'
                            width="30rem">
                    </Box>
                    </Box>
            </Box>
            </VStack>

            <Box
                position={'relative'}
                rounded={'2xl'}
                borderWidth='0.2rem'
                borderColor='gray.200'
                overflow={'hidden'}
                _hover={{boxShadow: 'lg'}}
            >
                    <Box w="100%">
                    <Box  borderRadius="lg" 
                            overflow="hidden"
                            height="17rem"
                            rounded='90px'
                            width="70rem">
                    
                    </Box>
                    </Box>
            </Box>
      
        
      </HStack>
    </>
  )
}

export default Highlights