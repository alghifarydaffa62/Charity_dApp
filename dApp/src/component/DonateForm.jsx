import { useState } from "react"
import { HandCoins } from "lucide-react"
import { ethers } from "ethers"
import Processing from "./popup/Processing"
import DonateSuccess from "./popup/DonateSuccess"
import CharityABI from "../../../artifacts/contracts/Charity.sol/Charity.json"

export default function DonateForm({charity, wallet}) {
    const [amount, setAmount] = useState("")
    const [isProcessing, setIsProcessing] = useState(false)
    const [donateSuccess, setDonateSuccess] = useState(false)

    const handleDonate = async () => {
        try {
            await window.ethereum.request({ method: "eth_requestAccounts" })

            const provider = new ethers.BrowserProvider(window.ethereum)
            const signer = await provider.getSigner()

            const contract = new ethers.Contract(charity, CharityABI.abi, signer)

            const tx = await contract.donate({
                value: ethers.parseEther(amount)
            })
            setIsProcessing(true)
            await tx.wait()

            setIsProcessing(false)
            setDonateSuccess(true)
            setAmount("")
        } catch(error) {
            console.error(error)
        }
    }
    return(
        <>  
            {isProcessing && <Processing type="Charity Donation"/>}
            {donateSuccess && <DonateSuccess isOpen={donateSuccess} onClose={() => setDonateSuccess(false)}/>}
            <div className="flex flex-col gap-5 bg-blue-950 p-5 rounded-lg h-fit">

                <div className="flex gap-3 items-center">
                    <HandCoins size={40}/>
                    <h1 className="text-2xl font-bold">Donate to this charity</h1>
                </div>
                <div className="flex flex-col gap-3">
                    <label className="font-semibold">Donation Amount</label>
                    <input placeholder="Enter donation value..." className="p-2 bg-blue-900 rounded-md w-sm" type="text" value={amount} onChange={e => setAmount(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-3">
                    <label className="font-semibold">Your Wallet</label>
                    <p className="p-2 bg-blue-900 rounded-md">{wallet}</p>
                </div>

                <button onClick={handleDonate} className="p-2 cursor-pointer bg-blue-500 hover:bg-blue-600 text-lg font-bold rounded-md">Donate</button>
        </div>
        </>
        
    )
}