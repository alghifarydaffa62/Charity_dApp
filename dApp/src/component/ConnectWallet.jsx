import connect from "../assets/connect.jpg"
import Footer from "./Footer"
import metamask from "../assets/MetaMask.svg"

export default function ConnectWallet({ handler, userWallet, disconnect }) {
    return (
        <div className="">
            {userWallet ? (
                <div className="flex flex-col items-center gap-4 my-10">
                    <div className="flex justify-center items-center gap-2">
                        <p className="font-semibold text-xl">Connected Wallet:</p>
                        <p className="p-2 bg-[#1e305a] rounded-xl">{userWallet}</p>
                    </div>
                    <button onClick={disconnect} className="bg-red-600 font-semibold px-4 py-2 rounded cursor-pointer">Disconnect wallet</button>
                </div>
            ) : (
                <div>
                    <div className="flex gap-30 items-center">
                        <img src={connect} alt="" className="w-[50vw] h-screen"/>
                        <div className="flex flex-col gap-4">
                            <a href="/" className="w-fit px-4 py-2 text-xl bg-blue-800 font-semibold rounded-lg">Back</a>
                            <div className="p-7 flex flex-col gap-3 bg-[#183c60] rounded-lg">
                                <h1 className="text-2xl font-semibold">
                                    Connect your wallet
                                </h1>
                                <p className="font-semibold">Welcome! Please connect you web3 wallet<br/>before continue to use our feature</p>
                                <img src={connect} alt="" className="w-[25vw] rounded-lg"/>
                                <button
                                    onClick={handler}
                                    className="mt-3 p-3 bg-amber-600 hover:bg-amber-700 font-semibold text-lg rounded-md cursor-pointer"
                                >
                                    <div className="flex justify-center gap-3">
                                        Continue with Metamask
                                        <img src={metamask} alt="" className="w-7"/>
                                    </div>
                                    
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            )}
        </div>
    )
}