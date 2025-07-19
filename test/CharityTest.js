const {loadFixture} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");

describe("Charity", function () {
  async function deployOneYearLockFixture() {
    const Charity = await ethers.getContractFactory("Charity");
    const charity = await Charity.deploy();

    return { charity };
  }
});
