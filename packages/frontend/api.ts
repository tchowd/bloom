// urql is a graphql client
import { createClient } from 'urql'

// we are calling the mainnet contract - more on this later
// const API_URL = "https://api.lens.dev"
const API_URL = "https://api-mumbai.lens.dev"

// creating an instance of this new client
export const client = createClient({
    url: API_URL
})

export const getRecommendedProfiles = `
    query RecommendedProfiles {
        recommendedProfiles {
            id
            name
            bio
            attributes {
            displayType
            traitType
            key
            value
            }
            followNftAddress
            metadata
            isDefault
            picture {
            ... on NftImage {
                contractAddress
                tokenId
                uri
                verified
            }
            ... on MediaSet {
                original {
                url
                mimeType
                }
            }
            __typename
            }
            handle
            coverPicture {
            ... on NftImage {
                contractAddress
                tokenId
                uri
                verified
            }
            ... on MediaSet {
                original {
                url
                mimeType
                }
            }
            __typename
            }
            ownedBy
            dispatcher {
            address
            canUseRelay
            }
            stats {
            totalFollowers
            totalFollowing
            totalPosts
            totalComments
            totalMirrors
            totalPublications
            totalCollects
            }
            followModule {
            ... on FeeFollowModuleSettings {
                type
                amount {
                asset {
                    symbol
                    name
                    decimals
                    address
                }
                value
                }
                recipient
            }
            ... on ProfileFollowModuleSettings {
            type
            }
            ... on RevertFollowModuleSettings {
            type
            }
            }
        }
    }
    `

export const getProfile = `
    query Profile ( $id: ProfileId! ) {
        profile(request: { profileId: $id }) {
        id
        name
        bio
        attributes {
            displayType
            traitType
            key
            value
        }
        followNftAddress
        metadata
        isDefault
        picture {
            ... on NftImage {
            contractAddress
            tokenId
            uri
            verified
            }
            ... on MediaSet {
            original {
                url
                mimeType
            }
            }
            __typename
        }
        handle
        coverPicture {
            ... on NftImage {
            contractAddress
            tokenId
            uri
            verified
            }
            ... on MediaSet {
            original {
                url
                mimeType
            }
            }
            __typename
        }
        ownedBy
        dispatcher {
            address
            canUseRelay
        }
        stats {
            totalFollowers
            totalFollowing
            totalPosts
            totalComments
            totalMirrors
            totalPublications
            totalCollects
        }
        followModule {
            ... on FeeFollowModuleSettings {
            type
            amount {
                asset {
                symbol
                name
                decimals
                address
                }
                value
            }
            recipient
            }
            ... on ProfileFollowModuleSettings {
            type
            }
            ... on RevertFollowModuleSettings {
            type
            }
        }
        }
    }`