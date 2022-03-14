import { Contract } from 'ethers'
import PancakeFactory from '../../arthswap-core/build/PancakeFactory.json'
import { getMainnetProvider, getWallet } from './getWallet'

async function main() {
  const wallet = getWallet()
  const provider = getMainnetProvider()

  const factoryAddress = '0xA9473608514457b4bF083f9045fA63ae5810A03E'
  const factory = new Contract(factoryAddress, JSON.stringify(PancakeFactory.abi), provider).connect(wallet)

  console.log(await factory.INIT_CODE_PAIR_HASH())
}

// To run locally (this code will not be executed in Autotasks)
if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch((error: Error) => {
      console.error(error)
      process.exit(1)
    })
}
