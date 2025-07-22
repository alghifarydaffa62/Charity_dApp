
export default function CharityList({charities, userWallet}) {
    return(
        <div className="flex justify-center flex-wrap gap-3 rounded-md">
            {charities.map((charity, index) => (
                <div key={index} className="flex flex-col gap-3 p-5 mt-4 bg-[#122e51] rounded-md w-[30rem]">
                    <h1 className="text-xl font-semibold">{charity.title}</h1>
                    <p className="text-gray-300">{charity.desc}</p>
                    {charity.isFinished ? (
                        <p>Status: <span className="p-2 bg-green-500">Completed</span></p>
                    ) : (
                        <p>Status: <span className="p-2 bg-blue-700 rounded-lg">Not Completed</span></p>
                    )}
                    <div>
                        <p className="font-bold text-md">Contract Address:</p>
                        <p className="p-2 mt-1 bg-[#1e3769] rounded-md">{charity.address}</p>
                    </div>

                    <div>
                        <p className="font-bold text-md">Recipient Address:</p>
                        <p className="p-2 mt-1 bg-[#1e3769] rounded-md">{charity.recipient}</p>
                    </div>
                    <p>Target Amount: {charity.targetAmount} ETH</p>
                    <p>Charity deadline: {charity.deadline}</p>
                    {userWallet ? (
                        <button className="bg-blue-600 p-2 rounded-md font-semibold text-lg cursor-pointer">Donate</button>
                    ) : (
                        <button className="disabled:bg-gray-600 p-2 rounded-md font-semibold text-lg cursor-pointer">Donate</button>
                    )}
                    
                </div>
            ))}
        </div>
    )
}