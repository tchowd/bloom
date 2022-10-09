import { Box, Heading, Text } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';

export default function Info() {
  return (
    <Box textAlign="center" py={10} px={6} style={{ marginTop: '6rem', marginBottom: '6rem' }}>
      <InfoIcon boxSize={'50px'} color={'blue.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        What is Bloom?
      </Heading>
      <Text color={'gray.500'}>
        Bloom is a solution based platform for builders, where they can find the answers in one place, validated by the community and verified by the project's core team.
        No more scrolling through multiple forums or channels.
      </Text>
    </Box>
  );
}