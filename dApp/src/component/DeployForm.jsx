import { useState } from "react"
import { ethers } from "ethers"
import CreateNewCharity from "../utils/createCharity"

export default function DeployForm({onDeploy}) {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [recipientAddress, setRecipientAddress] = useState("")
    const [targetAmount, setTargetAmount] = useState("")
    const [deadline, setDeadline] = useState("")
    const [errors, setErrors] = useState({})

    const handleDeploy = async () => {
        const newErrors = {}

        if(!title.trim()) newErrors.title = "Input your charity title"
        if(!desc.trim()) newErrors.desc = "Input your charity description"
        if(!ethers.isAddress(recipientAddress)) newErrors.recipient = "Invalid address!"

        const parsedTarget = parseFloat(targetAmount)
        if(isNaN(parsedTarget) || parsedTarget <= 0) newErrors.targetAmount = "Target must be greater than zero!"

        if(!deadline) newErrors.deadline = "Input you charity deadline"
        else {
            const deadlineTime = Math.floor(new Date(deadline).getTime() / 1000)
            const now = Math.floor(Date.now() / 1000)
            if(deadlineTime <= now) newErrors.deadline = "deadline must be in the future"
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        try {
            const dl = Math.floor(new Date(deadline).getTime() / 1000)
            const charity = await CreateNewCharity(title, desc, recipientAddress, targetAmount, dl)
            onDeploy(charity)

            setTitle("")
            setDesc("")
            setRecipientAddress("") 
            setTargetAmount("")
            setDeadline("")
        } catch(err) {
            console.error("Deployment error: ", err)
        }
    }
    return(
        <div className="flex flex-col gap-6 p-6 bg-[#122e51] rounded-lg">
            <h1 className="text-2xl font-bold">Create new Charity</h1>
            
            <div className="flex flex-col gap-2">
                {errors.title && <p className="text-red-500 text-md">{errors.title}</p>}
                <label htmlFor="" className="font-semibold text-lg">Charity Title:</label>
                <input type="text" className="bg-[#164470] w-sm p-2 rounded-md" value={title} onChange={e => setTitle(e.target.value)}/>
            </div>

            <div className="flex flex-col gap-2">
                {errors.desc && <p className="text-red-500 text-md">{errors.desc}</p>}
                <label htmlFor="" className="font-semibold text-lg">Charity Description:</label>
                <input type="text" className="bg-[#164470] w-sm p-2 rounded-md" value={desc} onChange={e => setDesc(e.target.value)}/>
            </div>

            <div className="flex flex-col gap-2">
                {errors.recipient && <p className="text-red-500 text-md">{errors.recipient}</p>}
                <label htmlFor="" className="font-semibold text-lg">Recipient Address:</label>
                <input type="text" className="bg-[#164470] w-sm p-2 rounded-md" value={recipientAddress} onChange={e => setRecipientAddress(e.target.value)}/>
            </div>
            
            <div className="flex flex-col gap-2">
                {errors.targetAmount && <p className="text-red-500 text-md">{errors.targetAmount}</p>}
                <label htmlFor="" className="font-semibold text-lg">Set Target Amount:</label>
                <input type="text" className="bg-[#164470] w-sm p-2 rounded-md" value={targetAmount} onChange={e => setTargetAmount(e.target.value)}/>
            </div>
            
            <div className="flex flex-col gap-2">
                {errors.deadline && <p className="text-red-500 text-md">{errors.deadline}</p>}
                <label htmlFor="" className="font-semibold text-lg">Charity Deadline:</label>
                <input type="date" className="bg-[#164470] w-sm p-2 rounded-md" value={deadline} onChange={e => setDeadline(e.target.value)}/>
            </div>

            <button onClick={handleDeploy} className="bg-blue-600 p-2 font-semibold rounded-md cursor-pointer">Deploy charity</button>
        </div>
    )
}