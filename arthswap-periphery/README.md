# Local Development

The following assumes the use of `node@12.x`.

## Install Dependencies

`yarn`

## Compile Contracts

`yarn compile`

## Run Scripts

`yarn ts-node [path-to-ts-script]`

## Run Tests

`yarn test`

### Testing Assumption

PancakeLibrary assume the deployed PancakeFactory contract because of INIT_CODE_HASH hardcoding implementation, so the test import the PancakeFactory ABI with deployed onchain bytecode (build-core/PancakeFactory.json) using scripts/getMainnetBytecode.ts.
