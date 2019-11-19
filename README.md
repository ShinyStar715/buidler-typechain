[![buidler](https://buidler.dev/buidler-plugin-badge.svg?1)](https://buidler.dev)
# buidler-typechain

Add [Typechain](https://www.github.com/ethereum-ts/TypeChain) tasks to your Buidler project!

## What

[TypeChain](https://www.github.com/ethereum-ts/TypeChain) gives you Typescript bindings for your smart contracts. Now, your tests and frontend code can be typesafe and magically autocomplete smart contract function names!

## Installation

```bash
npm i buidler-typechain typechain ts-generator
```

And add the following statement to your `buidler.config.js`:

```js
usePlugin("buidler-typechain);
```

## Tasks

This plugin adds the _typechain_ task to Buidler:
```
Generate Typechain typings for compiled contracts
``` 

## Configuration

<_A description of each extension to the BuidlerConfig or to its fields_>

This plugin extends the `BuidlerConfig` optional `typechain` object. The object contains two fields, `outDir` and `target`. `outDir` is the output directory of the artifacts that TypeChain creates (defaults to `typechain`). `target` is one of the targets specified by the TypeChain [docs](https://github.com/ethereum-ts/TypeChain#cli) (defaults to `ethers`).

This is an example of how to set it:

```js
module.exports = {
  typechain: {
    outDir: "src/types",
    target: "web3-v1"
  }
};
```

## Usage

`npx buidler typechain` - Compiles and generates Typescript typings for your contracts.

## TypeScript support

<_This section is needed if you are extending types in your plugin_>

You need to add this to your `tsconfig.json`'s `files` array: 
`"node_modules/<npm package name>/src/type-extensions.d.ts"`
