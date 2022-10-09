import React from 'react'
import {
    Box,
    HStack,
    Text,
    VStack,
  } from '@chakra-ui/react';
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import InfiniteScroll from 'react-infinite-scroll-component';

function Projects() {

const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <>
        <Text> sdf</Text>
         <HStack style={{marginTop: '2rem'}}>
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
                    height="16rem"
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
                    height="16rem"
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
                    height="16rem"
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
                            height="16rem"
                            rounded='90px'
                            width="30rem">
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
                    height="16rem"
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
                            height="16rem"
                            rounded='90px'
                            width="30rem">
                    </Box>
                    </Box>
            </Box>
            </HStack>
            

            
        
      </HStack>
    </>
  )
}

export default Projects