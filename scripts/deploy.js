
const hre = require("hardhat")

async function main() {
    const CharityFactory = await hre.ethers.getContractFactory("CharityFactory")
    const factory = await CharityFactory.deploy()

    await factory.waitForDeployment();

    console.log("CharityFactory deployed to: ", await factory.getAddress())
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})