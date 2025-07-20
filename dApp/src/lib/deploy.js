import {BrowserProvider, ContractFactory} from "ethers"
import CharityFactory from "../../../artifacts/contracts/CharityFactory.sol/CharityFactory.json"

export default async function deployCharityFactory(_title, _desc, _recipient, _target, _deadline) {
    const provider = new BrowserProvider(window.ethereum)
    const signer = provider.getSigner()

    const factory = new ContractFactory(
        CharityFactory.abi,
        CharityFactory.bytecode,
        signer
    )

    const contract = await factory.deploy(_title, _desc, _recipient, _target, _deadline)

    await contract.waitForDeployment()
    
    return contract
}