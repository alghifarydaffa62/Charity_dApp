import { ethers } from "ethers";
import CharityFactoryAbi from "../../../artifacts/contracts/CharityFactory.sol/CharityFactory.json"
import CharityAbi from "../../../artifacts/contracts/Charity.sol/Charity.json"

const FactoryAddress = "0x8F453fdcd436fC049690adC297ea2c6812110267"

export async function fetchAllCharity() {
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner()

    const factory = new ethers.Contract(FactoryAddress, CharityFactoryAbi.abi, signer)
    const allCharity = await factory.getAllCharities()

    const charities = await Promise.all(
        allCharity.map(async (address) => {
            const charityContract = new ethers.Contract(address, CharityAbi.abi, signer)

            const owner = await charityContract.owner()
            const title = await charityContract.title()
            const desc = await charityContract.desc()
            const recipient = await charityContract.recipient()
            const target = await charityContract.targetAmount()
            const deadline = await charityContract.deadline()
            const balance = await charityContract.balance()
            const isFinished = await charityContract.isCompleted()

            return {
                address,
                owner,
                recipient,
                title,
                desc,
                isFinished,
                targetAmount: ethers.formatEther(target),
                deadline: Number(deadline),
                balance: ethers.formatEther(balance)
            }
        })
    )

    return charities
}