import { Wallet, providers } from 'ethers'

export function getMainnetProvider() {
  const RPC_URL = 'https://rpc.astar.network:8545'
  const CHAINID = '592'
  return new providers.JsonRpcProvider(RPC_URL, Number(CHAINID))
}

export function getWallet() {
  const provider = getMainnetProvider()
  let wallet = new Wallet('0x0123456789012345678901234567890123456789012345678901234567890123')
  wallet = wallet.connect(provider)
  return wallet
}
