export default function ButtonConnect({ handler, userWallet, disconnect }) {
    return (
        <div className="mt-3">
            {userWallet ? (
                <div className="flex flex-col items-center gap-4">
                    <div className="flex justify-center items-center gap-2">
                        <p className="font-semibold text-xl">Connected Wallet:</p>
                        <p className="p-2 bg-[#1e305a] rounded-xl">{userWallet}</p>
                    </div>
                    <button onClick={disconnect} className="bg-red-600 font-semibold px-4 py-2 rounded cursor-pointer">Disconnect wallet</button>
                </div>
            ) : (
                <div>
                    <h1 className="text-lg font-semibold">
                        Please connect your wallet to use our features for donate and create charity
                    </h1>
                    <button
                        onClick={handler}
                        className="mt-6 p-3 bg-blue-900 font-semibold text-lg rounded-md cursor-pointer"
                    >
                        Connect your wallet
                    </button>
                </div>
            )}
        </div>
    )
}