const SimpleStorage = artifacts.require("SimpleStorage");

module.exports = async function (deployer) {
  try {
    await deployer.deploy(SimpleStorage);
    console.log("SimpleStorage deployed successfully!");
  } catch (error) {
    console.error("Error deploying SimpleStorage:", error);
  }
};
