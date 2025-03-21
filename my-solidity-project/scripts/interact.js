const hre = require("hardhat");

async function main() {
  const [owner] = await hre.ethers.getSigners();
  const contract = await hre.ethers.getContractAt("SimpleStorage", "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512");

  console.log("Setting number to 42...");
  await contract.setNumber(42);
  
  const storedNumber = await contract.getNumber();
  console.log(`Stored Number: ${storedNumber}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
