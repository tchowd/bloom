import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  MenuButton,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useSignMessage } from 'wagmi';
import { authenticate, generateChallenge } from '../../../frontend/utils';

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data } = useAccount();
  const address = data?.address;
  // const connected = !!data?.address;
  const connected = true;
  console.log("Connected: ", connected);

  const { signMessageAsync } = useSignMessage();

  const signIn = async () => {
    try {
      if (!connected) {
        return alert('Please connect your wallet first');
      }
      const challenge = await generateChallenge(address);
      const signature = await signMessageAsync({ message: challenge });
      const accessToken = await authenticate(address, signature);
      console.log({ accessToken });
      window.sessionStorage.setItem('accessToken', accessToken);
    } catch (error) {
      console.error(error);
      alert('Error signing in');
    }
  };

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>Logo</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              {/* <WalletConnect /> */}
              <ConnectButton />

              <Button onClick={signIn} marginTop='2'>
                Login with Lens
              </Button>

              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>


            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}