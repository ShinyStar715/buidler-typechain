[![buidler](https://buidler.dev/buidler-plugin-badge.svg?1)](https://buidler.dev)
# buidler-typechain

Add [Typechain](https://www.github.com/ethereum-ts/TypeChain) tasks to your Buidler project!

## What

[TypeChain](https://www.github.com/ethereum-ts/TypeChain) gives you Typescript bindings for your smart contracts. Now, your tests and frontend code can be typesafe and magically autocomplete smart contract function names!

## Installation

```bash
npm i buidler-typechain
```

And add the following statement to your `buidler.config.js`:

```js
usePlugin("buidler-typechain);
```

## Tasks

<_A description of each task added by this plugin. If it just overrides internal 
tasks, this may not be needed_>

This plugin adds the _typechain_ task to Buidler:
```
output of npx buidler help example
``` 

## Environment extensions

<_A description of each extension to the Buidler Runtime Environment_>

This plugin extends the Buidler Runtime Environment by adding an `example` field
whose type is `ExampleBuidlerRuntimeEnvironmentField`.

## Configuration

<_A description of each extension to the BuidlerConfig or to its fields_>

This plugin extends the `BuidlerConfig`'s `ProjectPaths` object with an optional 
`newPath` field.

This is an example of how to set it:

```js
module.exports = {
  paths: {
    newPath: "./new-path"
  }
};
```

## Usage

<_A description of how to use this plugin. How to use the tasks if there are any, etc._>

There are no additional steps you need to take for this plugin to work.

Install it and access ethers through the Buidler Runtime Environment anywhere 
you need it (tasks, scripts, tests, etc).

## TypeScript support

<_This section is needed if you are extending types in your plugin_>

You need to add this to your `tsconfig.json`'s `files` array: 
`"node_modules/<npm package name>/src/type-extensions.d.ts"`
