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

        
        <HStack>
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
                            height="40rem"
                            rounded='90px'
                            width="15rem">
                    </Box>
                    </Box>
            </Box>
            </VStack>
      </HStack>

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
                            height="40rem"
                            // rounded='90px'
                            width="50rem">

                        <Tabs children={undefined} variant='enclosed'>
                        <TabList>
                            <Tab>One</Tab>
                            <Tab>Two</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                            One!
                            </TabPanel>
                            <TabPanel>
                            Two!
                            </TabPanel>
                        </TabPanels>
                        </Tabs>
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