const { artifacts } = require("truffle");

const SimpleStorage = artifacts.require("SimpleStorage.sol");

contract("SimpleStorage", () => {
  it("Should update the value", async () => {
    const storage = await SimpleStorage.new();
    await storage.updateData(10);
    const data = await simpleStorage.readData();
    assert(data.toString() === "10");
  });
});
