import React from 'react'
import {
    Flex, 
    Heading,
    Spacer,
    Link,
    Text,
    Divider
} from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'

function Resources() {
  return (
    <div>
    <Flex>
      <Heading as="h2" marginTop="5">
        Resources
      </Heading>
      <Spacer />
      <Link href='https://turja.substack.com'>
      <Text marginTop='2rem' fontWeight={'bold'}>Learn more  
        &nbsp;
        <ArrowRightIcon w={3} h={3} /> 
      </Text>
      </Link>
    </Flex> 
    <Divider marginTop="5" />


    </div>
  )
}

export default Resources