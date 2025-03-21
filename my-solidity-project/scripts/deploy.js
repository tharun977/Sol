const { ethers } = require("hardhat");

async function main() {
  // Use fully qualified contract name
  const SimpleStorage = await ethers.getContractFactory("contracts/SimpleStorage.sol:SimpleStorage");
  console.log("Deploying SimpleStorage...");

  const simpleStorage = await SimpleStorage.deploy();
  await simpleStorage.deployed();

  console.log("SimpleStorage deployed to:", simpleStorage.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
