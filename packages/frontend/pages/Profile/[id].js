/* eslint-disable @next/next/no-img-element */
import { Image } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { client, getProfile, getPublications } from '../../api'
// nothing new, just importing styles

export default function SelectedProfile() {
    // this will be the current state of the selected profile details
    const [profile, setProfile] = useState()
    const [publications, setPublications] = useState()

    // router used to query the id from `Profiles`
    const router = useRouter()
    const { id } = router.query

    // anytime the id changes, fetchProfile will re-run
    useEffect(() => {
        if (id) {
            fetchProfile()
        }
    }, [id])


    async function fetchProfile() {
        // throw this in a try/catch block
        try {
            // changed the response name to profileResponse
            const profileRepsonse = await client.query(getProfile, { id }).toPromise()
            const publicationsReponse = await client.query(getPublications, { id }).toPromise()
            // expect to see an array of publication. note: some users may have 0
            console.log('publications', publicationsReponse.data.publications.items)
            const profileData = profileRepsonse.data.profile
            // setting profile data
            setProfile(profileData)
        } catch (e) {
            console.log('error fetching profile...', e)
        }
    }

    // same reason as before, if we don't have a profile loaded, we don't want to run anything
    if (!profile) return null

    return (
        <div>
            <div>
                <div>
                    <div >
                        {
                            profile.picture ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <Image
                                    src={profile.picture?.original?.url || profile.picture.uri}
                                    alt={profile.handle}
                                    className=""
                                />
                            ) : (
                                <div>
                                </div>
                            )
                        }
                        <h4>{profile.name} | @{profile.handle.slice(0, -5)}</h4>
                    </div>
                    <p>{profile.bio}</p>
                    <div>
                        <span>Followers: {profile.stats.totalFollowers} | Following: {profile.stats.totalFollowing}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
