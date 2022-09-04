// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  // const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  // const lockedAmount = hre.ethers.utils.parseEther("1");

  const NonForget = await hre.ethers.getContractFactory("ZaubarXPRO");
  // const nonforget = await NonForget.deploy("ZAUBAR's NonForgettables", "NFTT", "0x207Fa8Df3a17D96Ca7EA4f2893fcdCb78a304101");
  const nonforget = await NonForget.deploy();


  await nonforget.deployed();

  console.log(
    `NonForget deployed to ${nonforget.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
