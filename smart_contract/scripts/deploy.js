
const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const ProfileImageMinterFactory = await hre.ethers.getContractFactory(
    "ProfileImageNfts"
  );
  const ProfileImageContract = await ProfileImageMinterFactory.deploy();

  await ProfileImageContract.deployed();

  console.log("Profile Image Contract deployed to:", ProfileImageContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


//  npx hardhat run scripts\deploy.js --network ropsten