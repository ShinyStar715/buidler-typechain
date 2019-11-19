import {
  TASK_CLEAN,
  TASK_COMPILE
} from "@nomiclabs/buidler/builtin-tasks/task-names";
import { task } from "@nomiclabs/buidler/config";
import { BuidlerPluginError } from "@nomiclabs/buidler/plugins";
import fsExtra from "fs-extra";
import { tsGenerator } from "ts-generator";
import { TypeChain } from "typechain/dist/TypeChain";

task(
  "typechain",
  "Generate Typechain typings for compiled contracts"
).setAction(async ({}, { config, run }) => {
  const typechainTargets = ["ethers", "truffle", "web3-v1"];
  if (!typechainTargets.includes(config.typechain!.target as string)) {
    throw new BuidlerPluginError(
      "Invalid Typechain target, please provide via buidler.config.js (typechain.target)"
    );
  }

  await run(TASK_COMPILE);

  console.log(
    `Creating Typechain artifacts in directory ${
      config.typechain!.outDir
    } for target ${config.typechain!.target}`
  );

  const cwd = process.cwd();
  await tsGenerator(
    { cwd },
    new TypeChain({
      cwd,
      rawConfig: {
        files: `${config.paths.artifacts}/*.json`,
        outDir: config.typechain!.outDir,
        target: config.typechain!.target as string
      }
    })
  );

  console.log(`Successfully generated Typechain artifacts!`);
});

task(
  TASK_CLEAN,
  "Clears the cache and deletes all artifacts",
  async (_, { config }) => {
    await fsExtra.remove(config.paths.cache);
    await fsExtra.remove(config.paths.artifacts);
    if (config.typechain && config.typechain.outDir) {
      await fsExtra.remove(config.typechain.outDir);
    }
  }
);
