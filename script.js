const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { abi, bytecode } = require("./build/contracts/SimpleStorage.json"); // Adjust the path if necessary

const mnemonic =
  "essay fog bottom naive focus push liar relax trial spare model scene"; // Replace with your mnemonic phrase

const provider = new HDWalletProvider(
  mnemonic,
  `https://sepolia.infura.io/v3/e6aa43f8119d4dfa944bd0e167d5fedd`
);
const web3 = new Web3(provider);

const deploy = async () => {
  try {
    const accounts = await web3.eth.getAccounts();
    console.log("Attempting to deploy from account", accounts[0]);

    const result = await new web3.eth.Contract(abi)
      .deploy({ data: bytecode }) // Ensure bytecode is prefixed with '0x'
      .send({ gas: "5500000", from: accounts[0] });

    console.log("Contract deployed to", result.options.address);
  } catch (error) {
    console.error("Error deploying contract:", error);
  } finally {
    provider.engine.stop();
  }
};

deploy();
