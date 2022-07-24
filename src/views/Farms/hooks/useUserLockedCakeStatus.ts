import { usePoolsUserData, useVaultPoolByKey } from 'state/pools/hooks'
import { DeserializedLockedCakeVault, VaultKey } from 'state/types'

export const useUserLockedCakeStatus = () => {
  usePoolsUserData()
  const vaultPool = useVaultPoolByKey(VaultKey.CakeVault) as DeserializedLockedCakeVault

  return {
    isLoading: vaultPool?.userData?.isLoading,
    locked: Boolean(vaultPool?.userData?.locked),
    lockedEnd: vaultPool?.userData?.lockEndTime,
  }
}
