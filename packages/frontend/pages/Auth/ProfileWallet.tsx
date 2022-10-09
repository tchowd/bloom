import { Box } from '@chakra-ui/react'
// import { ConnectButton } from '@rainbow-me/rainbowkit'
import React from 'react'
import WalletConnect from './WalletConnect/pages/WalletConnect'
import UseAccount from './WalletConnect/sections/UseDisconnect'
import UseDisconnect from './WalletConnect/sections/UseDisconnect'
import UseEnsAddress from './WalletConnect/sections/UseEnsAddress'
import UseEnsAvatar from './WalletConnect/sections/UseEnsAvatar'
import UseEnsName from './WalletConnect/sections/UseEnsName'
import { ConnectButton, useAccount } from '@web3modal/react'


function ProfileWallet() {
    const { isConnected } = useAccount()

    return isConnected ? (
    <>
    
        {/* <WalletConnect /> */}
        <UseAccount />

        <UseEnsAddress />
        <UseEnsAvatar />
        <UseEnsName />
      <UseDisconnect />

    
    </>
  ) : (
    <ConnectButton />
  )
}

export default ProfileWallet