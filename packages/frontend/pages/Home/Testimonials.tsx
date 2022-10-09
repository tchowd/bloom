import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'white.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Developers Have Spoken</Heading>
          <Text>Come see what the hype is about:</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial children={undefined}>
            <TestimonialContent children={undefined}>
              <TestimonialHeading children={undefined}>Efficient Collaborating</TestimonialHeading>
              <TestimonialText children={undefined}>
                Very easy to use, very instinctive. And I saved lots of research around Discord servers. Great tool for devs. Thanks!
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={'Bernardo.jpg'
              }
              name={'Bernardo'}
              title={'Developer'}
            />
          </Testimonial>
          <Testimonial children={undefined}>
            <TestimonialContent children={undefined}>
              <TestimonialHeading children={undefined}>Intuitive Design</TestimonialHeading>
              <TestimonialText children={undefined}>
                This was so easy to use, I'm so glad I found Bloom, I've been growing more than ever.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                ''
              }
              name={'Jane'}
              title={'Developer'}
            />
          </Testimonial>
          <Testimonial children={undefined}>
            <TestimonialContent children={undefined}>
              <TestimonialHeading children={undefined}>Mindblowing Service</TestimonialHeading>
              <TestimonialText children={undefined}>
                I can't believe how fast I got a response on my question!
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                ''
              }
              name={'German'}
              title={'Developer'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}