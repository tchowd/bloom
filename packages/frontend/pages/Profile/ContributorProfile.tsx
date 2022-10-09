import React from 'react'
import {Box, Center, Image, Text, VStack } from '@chakra-ui/react'
import { ConnectButton, useAccount } from '@web3modal/react'
import UseAccount from '../Auth/WalletConnect/sections/UseAccount'
import UseEnsName from '../Auth/WalletConnect/sections/UseEnsName'

function CompanyProfile() {
  const { isConnected } = useAccount()

  return isConnected ? (
    <>
        <Box
                position={'relative'}
                // rounded={'2xl'}
                // borderWidth='0.2rem'
                width={'75rem'}
                height={'12rem'}
                // borderColor='none'
                // overflow={'hidden'}
                backgroundColor={'purple.100'}
                overflow={'hidden'}
                marginLeft={'15rem'}
                marginTop={'-5rem'}
                _hover={{boxShadow: 'lg'}}
            >     
            </Box>

            <Center>
                <Image
                    borderRadius='full'
                    boxSize='200px'
                    src={'/static/xian2.png'}
                    alt='Dan Abramov'
                    width='12rem'
                    marginTop={'-4rem'}
                    marginRight={'2rem'}
                    overflow={'none'}
                    zIndex={'1'}
                    />
                    <VStack>
                    <Text marginTop={'2rem'} marginRight={'28rem'} fontSize='5xl' as='b'> 
                    Xian
                    </Text>
                    <Text  marginLeft={'0rem'}> 
                    <UseAccount />
                    </Text>
                    
                    
                    </VStack>
                    
                </Center>

    </>
  ) : (
    <ConnectButton />
  )
}

export default CompanyProfile