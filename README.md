[![buidler](https://buidler.dev/buidler-plugin-badge.svg?1)](https://buidler.dev)

# buidler-typechain

_Updated for TypeChain v2!_

Add [Typechain](https://www.github.com/ethereum-ts/TypeChain) tasks to your Buidler project!

## What

[TypeChain](https://www.github.com/ethereum-ts/TypeChain) gives you Typescript bindings for your smart contracts. Now, your tests and frontend code can be typesafe and magically autocomplete smart contract function names!

## Installation

```bash
npm i buidler-typechain typechain ts-generator @typechain/ethers-v4 @typechain/truffle-v5 @typechain/web3-v1
```

And add the following statement to your `buidler.config.js`:

```js
usePlugin("buidler-typechain");
```

## Tasks

This plugin adds the _typechain_ task to Buidler:

```
Generate Typechain typings for compiled contracts
```

## Configuration

This plugin extends the `BuidlerConfig` optional `typechain` object. The object contains two fields, `outDir` and `target`. `outDir` is the output directory of the artifacts that TypeChain creates (defaults to `typechain`). `target` is one of the targets specified by the TypeChain [docs](https://github.com/ethereum-ts/TypeChain#cli) (defaults to `ethers`).

This is an example of how to set it:

```js
module.exports = {
  typechain: {
    outDir: "src/types",
    target: "ethers-v4",
  },
};
```

## Usage

`npx buidler typechain` - Compiles and generates Typescript typings for your contracts.

Example Waffle + Ethers test that uses typedefs for contracts:

```ts
import { ethers } from "@nomiclabs/buidler";
import chai from "chai";
import { Wallet } from "ethers";
import { deployContract, solidity } from "ethereum-waffle";

import CounterArtifact from "../artifacts/Counter.json";
import { Counter } from "../typechain/Counter";

chai.use(solidity);
const { expect } = chai;

describe("Counter", () => {
  let counter: Counter;

  beforeEach(async () => {
    // 1
    const signers = await ethers.signers();

    // 2
    counter = (await deployContract(
      <Wallet>signers[0],
      CounterArtifact
    )) as Counter;
    const initialCount = await counter.getCount();

    // 3
    expect(initialCount).to.eq(0);
    expect(counter.address).to.properAddress;
  });

  // 4
  describe("count up", async () => {
    it("should count up", async () => {
      await counter.countUp();
      let count = await counter.getCount();
      expect(count).to.eq(1);
    });
  });

  describe("count down", async () => {
    // 5
    it("should fail", async () => {
      await counter.countDown();
    });

    it("should count down", async () => {
      await counter.countUp();

      await counter.countDown();
      const count = await counter.getCount();
      expect(count).to.eq(0);
    });
  });
});
```

See this [starter kit](https://github.com/rhlsthrm/typescript-solidity-dev-starter-kit) for a full example!

## TypeScript support

You need to add this to your `tsconfig.json`'s `files` array:
`"node_modules/buidler-typechain/src/type-extensions.d.ts"`
