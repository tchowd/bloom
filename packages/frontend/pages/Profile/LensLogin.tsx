import { useLazyQuery, useMutation } from '@apollo/client';
import { Connector, useAccount, useConnect, useNetwork, useSignMessage } from 'wagmi';
import { AuthenticateDocument, ChallengeDocument, UserProfilesDocument } from '@/graphql/types';
import { useAppPersistStore, useAppStore } from '@/helpers/app';


function LensLogin() {
    const setProfiles = useAppStore((state) => state.setProfiles);
    const setCurrentProfile = useAppStore((state) => state.setCurrentProfile);
    const setProfileId = useAppPersistStore((state) => state.setProfileId);

    const { address, connector: activeConnector } = useAccount();
    const { signMessageAsync, isLoading: signLoading } = useSignMessage({ "onError" });
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
    };
    return (
        <></>
    )
}

export default LensLogin;