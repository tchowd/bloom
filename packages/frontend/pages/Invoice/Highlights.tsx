import React from 'react'
import {
    Box,
    HStack,
    VStack,
    Image,
    Tab, 
    TableContainer,
    Table,
    Heading,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Tfoot,
    TableCaption
  } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
  
function Highlights() {
  return (
    <>
        <Heading fontSize={'4xl'} marginLeft={'2rem'}>
              Financial Overview
        </Heading>
        <Text marginLeft={'2rem'}> Here is the overview of the contributions you've made.</Text>

        
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
                        <VStack marginTop='1rem'>
                            <Text>Total Earned</Text>
                            <Text as='b' fontSize='5xl'>$1256</Text>
                        </VStack>
                        
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
                        <VStack marginTop='1rem'>
                            <Text>Total # of Contributions</Text>
                            <Text as='b' fontSize='5xl'>32</Text>
                        </VStack>
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
                width={'32rem'}
                height={'27rem'}
            > 
                <TableContainer>
                <Table variant='striped' colorScheme='purple'>
                    <TableCaption>Imperial to metric conversion factors</TableCaption>
                    <Thead>
                    <Tr>
                        <Th>Contribution</Th>
                        <Th>Date</Th>
                        <Th isNumeric>Amount ($USDC)</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td>Polygon Docs</Td>
                        <Td>06/10/22</Td>
                        <Td isNumeric>$225.4</Td>
                    </Tr>
                    <Tr>
                        <Td>Push Frontend</Td>
                        <Td>01/10/22</Td>
                        <Td isNumeric>$55.6</Td>
                    </Tr>
                    <Tr>
                        <Td>IPFS Docs</Td>
                        <Td>05/09/22</Td>
                        <Td isNumeric>$185.4</Td>
                    </Tr>
                    <Tr>
                        <Td>Wallet Connect Support</Td>
                        <Td>15/08/22</Td>
                        <Td isNumeric>$34.4</Td>
                    </Tr>
                    <Tr>
                        <Td>Polygon ID</Td>
                        <Td>13/08/22</Td>
                        <Td isNumeric>$515.4</Td>
                    </Tr>
                    <Tr>
                        <Td>Optimism Questions</Td>
                        <Td>04/08/22</Td>
                        <Td isNumeric>$65.4</Td>
                    </Tr>
                    <Tr>
                        <Td>Polygon ID Support</Td>
                        <Td>02/08/22</Td>
                        <Td isNumeric>$95.4</Td>
                    </Tr>
                    </Tbody>
                    
                </Table>
                </TableContainer>
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
                <Image 
                    borderRadius="lg"
                    src='/static/graph.jpg'
                    alt="some good alt text"
                    objectFit="contain"
                    width={'30rem'}
                    height={'35rem'}
                    overflow="hidden"
                    style={{ borderRadius: '0.8rem' }}/>

                
                    <Box w="100%">
                    {/* <Box  borderRadius="lg" 
                            overflow="hidden"
                            height="25rem"
                            rounded='90px'
                            width="31rem">
                    </Box> */}
                    </Box>
            </Box>
            </VStack>
      </HStack>   
        </HStack>
        

      
    </>
  )
}

export default Highlights