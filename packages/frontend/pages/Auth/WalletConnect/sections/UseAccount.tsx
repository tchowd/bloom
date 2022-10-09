import { useAccount } from '@web3modal/react'
import { useEnsName } from '@web3modal/react'

export default function UseAccount() {
  const { address, connector, isConnected } = useAccount()
  const { data, isLoading, error, refetch } = useEnsName({ address })

  return (
    <div>
      {address} | {isLoading ? 'Loading...' : data}
    </div>
  )
}
