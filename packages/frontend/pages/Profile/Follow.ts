import { challenge, client } from '../../api'
import { useRouter } from 'next/router'
import { useState, useEffect, useCallback } from 'react'
import { useAccount } from '@web3modal/react'
import gql from 'graphql-tag';
import { useMutation } from 'urql';

const FOLLOW_MUTATION = gql`
mutation CreateFollowTypedData($address: String!) {
    createFollowTypedData(request:{
      follow: [
        {
          profile: $address,
          followModule: null
        }
      ]
    }) {
      id
      expiresAt
      typedData {
        domain {
          name
          chainId
          version
          verifyingContract
        }
        types {
          FollowWithSig {
            name
            type
          }
        }
        value {
          nonce
          deadline
          profileIds
          datas
        }
      }
    }
  }`

const Follow = props => {
    const [description, setDescription] = useState();
    const [url, setUrl] = useState();

    const [state, executeMutation] = useMutation(FOLLOW_MUTATION);

    const followMutation = useCallback(() => {
        executeMutation({ url, description }).then(() => {
            props.history.push(props.address);
        });
    }, [url, description, executeMutation, props.history]);
    return (
        
    )
}

export default Follow