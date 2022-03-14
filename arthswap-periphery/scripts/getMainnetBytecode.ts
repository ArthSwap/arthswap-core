import { getMainnetProvider } from './getWallet'

async function main() {
  const provider = getMainnetProvider()
  const factoryTxHash = '0xaa7e78a7219f60d2333eab03c8869dfd8eb460996264405949d1682ab80d1983'

  const tx = await provider.getTransaction(factoryTxHash)
  console.log(tx.data)
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
