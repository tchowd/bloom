import { useState, useEffect } from 'react'
import {
    client, recommendProfiles
} from '../../api'
import Link from 'next/link'
import { Image } from '@chakra-ui/react'

function ProfileDetails() {
    const [profiles, setProfiles] = useState([])
    const CONSTANT_BIO = 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    useEffect(() => {
        fetchProfiles()
    }, [])

    async function fetchProfiles() {
        try {
            const res = await client.query(recommendProfiles).toPromise()
            console.log('res in profiles', res)
            setProfiles(res.data.recommendedProfiles)
        } catch (e) {
            console.log(e)
        }
    }

    if (!profiles) return null

    return (
        <div>
            {/* <Navigation /> */}
            <div>
                <div>
                    {
                        profiles.map((profile, i) => (
                            <Link key={i} href={`/profile/${profile.id}`}>
                                <a>
                                    <div>
                                        {
                                            profile.picture ? (
                                                // eslint-disable-next-line @next/next/no-img-element
                                                <Image
                                                    src={profile.picture?.original?.url || profile.picture.uri}
                                                    alt={profile.handle}
                                                    className='h-20 w-20 rounded-full mb-3'
                                                />
                                            ) : (
                                                <div className='h-20 w-20 rounded-full bg-gray-500'>
                                                </div>
                                            )
                                        }
                                        <h4>{profile.handle}</h4>
                                        <p>{profile.bio ? profile.bio : CONSTANT_BIO}</p>
                                    </div>
                                </a>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ProfileDetails