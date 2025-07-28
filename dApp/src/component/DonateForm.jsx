import { useState } from "react"

export default function DonateForm() {
    const [amount, setAmount] = useState()

    return(
        <div className="flex flex-col gap-5 bg-blue-950 p-5 rounded-lg">
            <h1 className="text-xl font-bold">Donate to this charity</h1>
            <div className="flex flex-col gap-3">
                <label className="font-semibold">Donation Amount</label>
                <input className="p-2 bg-blue-900 rounded-md w-sm" type="text" value={amount} onChange={e => setAmount(e.target.value)}/>
            </div>
            <button className="p-2 cursor-pointer bg-blue-500 text-lg font-bold rounded-md">Donate</button>
        </div>
    )
}