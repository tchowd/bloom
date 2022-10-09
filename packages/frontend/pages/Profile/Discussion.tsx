import React from 'react'
import {
    Flex, 
    Heading,
    Spacer,
    Link,
    Text,
    Divider, 
    Wrap, 
    WrapItem,
    Box,
    Button,
    Tag,
    HStack,
    Image
} from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'

function Discussion() {
    interface IBlogTags {
        tags: Array<string>;
        marginTop?: SpaceProps['marginTop'];
      }
      
      const BlogTags: React.FC<IBlogTags> = (props) => {
        return (
          <HStack spacing={2} marginTop={props.marginTop}>
            {props.tags.map((tag) => {
              return (
                <Tag size={'md'} variant="solid" colorScheme="purple" key={tag}>
                  {tag}
                </Tag>
              );
            })}
          </HStack>
        );
      };
  return (
    <div>
    <Flex>
      <Heading as="h2" marginTop="5">
        Proof of Developer
      </Heading>
      <Spacer />
      <Link href='https://turja.substack.com'>
      <Text marginTop='2rem' fontWeight={'bold'}>Learn more  
        &nbsp;
        <ArrowRightIcon w={3} h={3} /> 
      </Text>
      </Link>
    </Flex> 
    <Divider marginTop="5" marginBottom='2rem'/>

    <Box 
          // padding={'1.2rem'}
          position={'relative'}
          rounded={'2xl'}
          // borderWidth='0.2rem'
          // borderColor='gray.200'
          // _hover={{boxShadow: 'lg'}}
        >
      <Wrap spacing="30px" >
      <WrapItem width={{ base: '100%', sm: '90%' }}>
          
            <Image 
              src='/static/github.png'
              borderRadius="lg"
              // src='/static/11.png'
              alt="some good alt text"
              objectFit="contain"
              // width={'30rem'}
              // height={'25rem'}
              overflow="hidden"
              style={{borderRadius: '0.8rem'}}/>


         
        </WrapItem>
      </Wrap>
      </Box>


    </div>
  )
}

export default Discussion