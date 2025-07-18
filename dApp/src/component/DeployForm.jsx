import { useState } from "react"
export default function DeployForm() {
    const [recipientAddress, setRecipientAddress] = useState()
    const [targetAmount, setTargetAmount] = useState()

    return(
        <div className="flex flex-col gap-6 p-6 bg-[#122e51] rounded-lg">
            <h1 className="text-2xl font-bold">Create new Charity</h1>
            
            <div className="flex flex-col gap-2">
                <label htmlFor="" className="font-semibold text-lg">Recipient Address</label>
                <input type="text" className="bg-[#164470] w-sm p-2 rounded-md" value={recipientAddress} onChange={e => setRecipientAddress(e.target.value)}/>
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="" className="font-semibold text-lg">Target Amount</label>
                <input type="text" className="bg-[#164470] w-sm p-2 rounded-md" value={targetAmount} onChange={e => setTargetAmount(e.target.value)}/>
            </div>

            <button className="bg-blue-600 p-2 font-semibold rounded-md cursor-pointer">Deploy charity</button>
        </div>
    )
}