# SimpleStorage Solidity Project

This is a Solidity-based project for deploying and interacting with a `SimpleStorage` smart contract on the Ethereum Sepolia testnet using Hardhat.

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Hardhat](https://hardhat.org/)
- [MetaMask](https://metamask.io/) (for interacting with the deployed contract)
- [Alchemy](https://www.alchemy.com/) or [Infura](https://www.infura.io/) (for an RPC URL)

## Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/tharun977/my-solidity-project.git
   cd my-solidity-project
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the project root and add:
   ```sh
   SEPOLIA_RPC_URL=your-alchemy-or-infura-url
   PRIVATE_KEY=your-wallet-private-key
   ```

## Compilation

Compile the Solidity contracts:
```sh
npx hardhat compile
```

## Deployment

Deploy the contract to Sepolia testnet:
```sh
npx hardhat run scripts/deploy.js --network sepolia
```

If you see an error about insufficient funds, get test ETH from a [Sepolia Faucet](https://www.alchemy.com/faucets/ethereum-sepolia).

## Interacting with the Contract

In the Hardhat console:
```sh
npx hardhat console --network sepolia
```
Then, run the following commands:
```javascript
const contract = await ethers.getContractAt("SimpleStorage", "DEPLOYED_CONTRACT_ADDRESS");
await contract.setNumber(42); // Set a value
console.log(await contract.getNumber()); // Read stored value
```

## Troubleshooting

- **Invalid private key error**: Ensure `PRIVATE_KEY` in `.env` is correct and 64 characters long.
- **Compiler version mismatch**: Update `solidity` version in `hardhat.config.js` to match your contract pragma.
- **Hardhat HH701 Error**: Use the fully qualified contract name, e.g., `contracts/SimpleStorage.sol:SimpleStorage`.
- **Insufficient funds**: Check balance using:
  ```sh
  npx hardhat console --network sepolia
  ```
  ```javascript
  const [deployer] = await ethers.getSigners();
  console.log(await deployer.getBalance());
  ```
