export default function MyCharity({ charities, userWallet }) {
    if (!userWallet) {
        return (
            <div className="p-6 bg-[#122e51] rounded-md">
                <h1 className="text-2xl font-bold">Your Charity:</h1>
                <p className="text-gray-300">Please connect your wallet.</p>
            </div>
        )
    }

    const myCharities = charities.filter(c => c.deployer === userWallet)
    // console.log(myCharities)
    return (
        <div className="flex flex-col gap-3 p-6 bg-[#122e51] rounded-md min-w-[300px]">
            <h1 className="text-2xl font-bold">Your Charity:</h1>

            {myCharities.length === 0 ? (
                <p className="text-gray-300">You haven't created any charities yet.</p>
            ) : (
                myCharities.map((charity, index) => (
                    <div key={index} className="p-3 bg-[#1f3c6a] rounded-lg">
                        <h1 className="font-semibold">{charity.title}</h1>
                        <p className="text-sm text-gray-300">Address: {charity.address}</p>
                    </div>
                ))
            )}
        </div>
    )
}