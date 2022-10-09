import React from 'react'
import {
        Box,
        HStack,
        VStack,
        Image,
        Center
} from '@chakra-ui/react';
import { Text, Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react';

function CompanyDetail() {
        return (
                <>
                        <Center>
                                <Image borderRadius='full'
                                        boxSize='150px'
                                        src='Polygon.png'
                                        alt='Polygon'
                                        position={'relative'}>

                                </Image>

                                <Text>Polygon</Text>
                        </Center>

                        <HStack style={{ marginTop: '2rem', marginRight: '3rem', marginLeft: '22rem' }}>
                                <VStack>


                                        <HStack>
                                                <Box
                                                        position={'relative'}
                                                        rounded={'2xl'}
                                                        borderWidth='0.2rem'
                                                        borderColor='gray.200'
                                                        overflow={'hidden'}
                                                        _hover={{ boxShadow: 'lg' }}
                                                >
                                                        <Box w="100%">
                                                                <Box borderRadius="lg"
                                                                        overflow="hidden"
                                                                        height="12rem"
                                                                        rounded='90px'
                                                                        width="22rem">
                                                                </Box>
                                                        </Box>
                                                </Box>

                                        </HStack>
                                </VStack>


                        </HStack>



                </>
        )
}

export default CompanyDetail