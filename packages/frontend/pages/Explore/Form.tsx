import React from 'react'
import {
    Box,
    HStack,
    VStack,
  } from '@chakra-ui/react';
import { Text, Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react';
  
function Highlights() {
  return (
    <>
        <Text> Overview</Text>

        
        <HStack style={{marginTop: '2rem', marginRight: '3rem', marginLeft: '2rem'}}>
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
                            height="15rem"
                            rounded='90px'
                            width="66rem">
                    </Box>
                    </Box>
            </Box>
            </VStack>
      </HStack>
    </>
  )
}

export default Highlights