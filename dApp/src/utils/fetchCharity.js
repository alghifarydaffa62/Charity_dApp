import { ethers } from "ethers"
import CharityFactoryABI from "../../../artifacts/contracts/CharityFactory.sol/CharityFactory.json"
import CharityABI from "../../../artifacts/contracts/Charity.sol/Charity.json"

const FactoryAddress = "0x8F453fdcd436fC049690adC297ea2c6812110267"

export async function fetchCharitiesByUser(walletAddress) {
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner()

    const factory = new ethers.Contract(FactoryAddress, CharityFactoryABI.abi, signer)
    const addresses = await factory.getCharitiesByUser(walletAddress)

    const charityList = await Promise.all(addresses.map(async (addr) => {
        const charity = new ethers.Contract(addr, CharityABI.abi, provider)
        const [title, desc, recipient, targetAmount, deadline] = await Promise.all([
            charity.title(),
            charity.desc(),
            charity.recipient(),
            charity.targetAmount(),
            charity.deadline()
        ])

        return {
            address: addr,
            deployer: walletAddress,
            title,
            desc,
            recipient,
            targetAmount: ethers.formatEther(targetAmount),
            deadline: Number(deadline)
        }
    }))

    return charityList
}