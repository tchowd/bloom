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
        <Text> 
            Good morning, !
        </Text>

        <HStack>
        <Box
                position={'relative'}
                rounded={'2xl'}
                borderWidth='0.2rem'
                borderColor='gray.200'
                overflow={'hidden'}
                _hover={{boxShadow: 'lg'}}
                height="2rem"
                // rounded='90px'
                width="10rem"
            >
        
            </Box>
            <Box
                position={'relative'}
                rounded={'2xl'}
                borderWidth='0.2rem'
                borderColor='gray.200'
                overflow={'hidden'}
                _hover={{boxShadow: 'lg'}}
                height="2rem"
                // rounded='90px'
                width="10rem"
            >
        
            </Box>
        </HStack>
        <HStack>
        <HStack style={{marginTop: '2rem', marginRight: '3rem', marginLeft: '2rem'}}>
            <VStack>
            <HStack>
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
                    width="15rem">
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
                            width="15rem">
                    </Box>
                    </Box>
            </Box>
            </HStack>
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
                            height="25rem"
                            rounded='90px'
                            width="31rem">
                    </Box>
                    </Box>
            </Box>
            </VStack>
      </HStack>

      <HStack style={{marginTop: '2rem'}}>
        
            <VStack>
            <HStack>
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
                    width="15rem">
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
                            width="15rem">
                    </Box>
                    </Box>
            </Box>
            </HStack>
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
                            height="25rem"
                            rounded='90px'
                            width="31rem">
                    </Box>
                    </Box>
            </Box>
            </VStack>
      </HStack>   
        </HStack>
        

      
    </>
  )
}

export default Highlights