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
  Image,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useLazyQuery, useMutation } from '@apollo/client';
import { Connector, useAccount, useConnect, useNetwork, useSignMessage } from 'wagmi';
import { AuthenticateDocument, ChallengeDocument, UserProfilesDocument } from '@/graphql/types';
import { useAppPersistStore, useAppStore } from '@/helpers/app';

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

  const setProfiles = useAppStore((state) => state.setProfiles);
  const setCurrentProfile = useAppStore((state) => state.setCurrentProfile);
  const setProfileId = useAppPersistStore((state) => state.setProfileId);

  const { address, connector: activeConnector } = useAccount();
  const { signMessageAsync, isLoading: signLoading } = useSignMessage({});
  const [loadChallenge, { error: errorChallenge, loading: challengeLoading }] = useLazyQuery(
    ChallengeDocument,
    { fetchPolicy: 'no-cache' }
  );
  const [authenticate, { error: errorAuthenticate, loading: authLoading }] =
    useMutation(AuthenticateDocument);
  const [getProfiles, { error: errorProfiles, loading: profilesLoading }] =
    useLazyQuery(UserProfilesDocument);

  const handleSign = async () => {
    try {
      // Get challenge
      const challenge = await loadChallenge({
        variables: { request: { address } }
      });

      if (!challenge?.data?.challenge?.text) {
        return console.error();
        ("Challenge not accepted.");
      }

      // Get signature
      const signature = await signMessageAsync({
        message: challenge?.data?.challenge?.text
      });

      // Auth user and set cookies
      const auth = await authenticate({
        variables: { request: { address, signature } }
      });
      localStorage.setItem('accessToken', auth.data?.authenticate.accessToken);
      localStorage.setItem('refreshToken', auth.data?.authenticate.refreshToken);

      // Get authed profiles
      const { data: profilesData } = await getProfiles({
        variables: { ownedBy: address }
      });


      const profiles: any = profilesData?.profiles?.items
        ?.slice()
        ?.sort((a, b) => Number(a.id) - Number(b.id))
        ?.sort((a, b) => (a.isDefault === b.isDefault ? 0 : a.isDefault ? -1 : 1));
      const currentProfile = profiles[0];
      setProfiles(profiles);
      setCurrentProfile(currentProfile);
      setProfileId(currentProfile.id);

    } catch { }
  }

  return (
    <>
      <Box bg={useColorModeValue('purple.100', 'purple.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Image
            borderRadius="lg"
            src='/static/bloom.png'
            alt="some good alt text"
            objectFit="contain"
            width={'10rem'}
          />
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7} onSubmit={handleSign}>
              {/* <WalletConnect /> */}
              <ConnectButton />

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
