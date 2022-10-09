import React from 'react'
import {Box, Center, Image } from '@chakra-ui/react'
import ProfileDetails from './ProfileDetails'

function ProfileCard() {
  return (
    <div>
        <Box
                position={'relative'}
                // rounded={'2xl'}
                // borderWidth='0.2rem'
                width={'75rem'}
                height={'10rem'}
                // borderColor='none'
                backgroundColor={'green.100'}
                overflow={'hidden'}
                marginLeft={'15rem'}
                marginTop={'-2rem'}
                _hover={{boxShadow: 'lg'}}
            >
               
            
            <ProfileDetails />
                
                    
                   
            </Box>

            <Center>
                <Image
                    borderRadius='full'
                    boxSize='150px'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                    marginTop={'-4rem'}
                    marginRight={'40rem'}
                    overflow={'none'}
                    zIndex={'1'}
                    />
                </Center>

    </div>
  )
}

export default ProfileCard