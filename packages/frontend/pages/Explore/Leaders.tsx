import React from 'react'
import {
        Box,
        HStack,
        VStack,
} from '@chakra-ui/react';
import { Text, Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react';
import { client, getRecommendedProfiles } from '../../api'
import { useState, useEffect } from 'react'
import { profile } from 'console';

function Leaders() {
        const [profiles, setProfiles] = useState()
        // we want to called fetchRecommendedProfiles on every load
        useEffect(() => {
                fetchRecommendedProfiles()
        }, [profiles])

        async function fetchRecommendedProfiles() {
                try {
                        const response = await client.query(getRecommendedProfiles).toPromise()
                        // console.log(response.data.recommendedProfiles)
                        setProfiles(response.data.recommendedProfiles);

                } catch (e) {
                        console.log(e)
                }
        }




        return (
                <>
                        <Text> Recommended Profiles</Text>

                        <HStack style={{ marginTop: '2rem', marginRight: '3rem', marginLeft: '2rem' }}>
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

export default Leaders