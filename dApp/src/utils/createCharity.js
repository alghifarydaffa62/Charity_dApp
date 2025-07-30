import {BrowserProvider, Contract, ContractFactory} from "ethers"
import CharityFactory from "../../../artifacts/contracts/CharityFactory.sol/CharityFactory.json"

const FactoryAddress = "0x8F453fdcd436fC049690adC297ea2c6812110267"

export default async function CreateNewCharity(_title, _desc, _recipient, _target, _deadline) {
    const provider = new BrowserProvider(window.ethereum)
    const signer = await provider.getSigner()

    const factory = new Contract(
        FactoryAddress,
        CharityFactory.abi,
        signer
    )

    const tx = await factory.createCharity(_title, _desc, _recipient, _target, _deadline)
    await tx.wait()

    const userAddress = await signer.getAddress()
    const userCharities = await factory.getCharitiesByUser(userAddress)

    const lastCharityAddress = userCharities[userCharities.length - 1];

    return {
        address: lastCharityAddress,
        owner: userAddress,
        title: _title,
        desc: _desc,
        recipient: _recipient,
        targetAmount: _target,
        deadline: Number(_deadline) 
    }
}