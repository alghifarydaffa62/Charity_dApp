import { ethers } from "ethers"
import CharityFactoryABI from "../../../artifacts/contracts/CharityFactory.sol/CharityFactory.json"
import CharityABI from "../../../artifacts/contracts/Charity.sol/Charity.json"

const FactoryAddress = "0x477d9578e2860D5934A22d7Ed78722705C5e13fe"

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