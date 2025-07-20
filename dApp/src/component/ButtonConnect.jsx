import { ethers } from "ethers"
import { useState } from "react"

export default function ButtonConnect() {
    const [userWallet, setUserWallet] = useState()

    const handleConnect = async () => {
        try {
            const provider = new ethers.BrowserProvider(window.ethereum)
            const signer = await provider.getSigner()
            const userAddress = await signer.getAddress()
            setUserWallet(userAddress)
        } catch(error) {
            console.error("Failed to connect: ", error)
        }
    }

    return(
        <div className="mt-3">
            {userWallet ? (
                <div className="flex justify-center items-center gap-2">
                    <p className="font-semibold text-xl">
                        Connected Wallet: 
                    </p>
                    <p className="p-2 bg-[#1e305a] rounded-xl">{userWallet}</p>
                </div>
            ) : (
                <div>
                    <h1 className="text-lg font-semibold">Please connect your wallet to use our features for donate and create charity</h1>
                    <button 
                        onClick={handleConnect} 
                        className="mt-6 p-3 bg-blue-900 font-semibold text-lg rounded-md cursor-pointer"
                    >
                        Connect your wallet
                    </button>
                </div>
            )}
        </div>
    )
}