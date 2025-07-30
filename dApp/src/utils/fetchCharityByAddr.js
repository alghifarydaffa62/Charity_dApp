import { ethers } from "ethers";
import CharityABI from "../../../artifacts/contracts/Charity.sol/Charity.json"

export async function fetchCharityByAddr(address) {
    const provider = new ethers.BrowserProvider(window.ethereum)
    const contract = new ethers.Contract(address, CharityABI.abi, provider)
    const title = await contract.title()
    const owner = await contract.owner()
    const desc = await contract.desc()
    const recipient = await contract.recipient()
    const target = await contract.targetAmount()
    const deadline = await contract.deadline()
    const collected = await contract.balance()

    return {
        address,
        owner,
        recipient,
        title,
        desc,
        target: ethers.formatEther(target),
        deadline: Number(deadline),
        collected: ethers.formatEther(collected)
    }
}