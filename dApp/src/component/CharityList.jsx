
export default function CharityList({charities}) {
    return(
        <div className="flex justify-center gap-3 rounded-md">
            {charities.map((charity, index) => (
                <div key={index} className="flex flex-col gap-3 p-5 mt-4 bg-[#122e51] rounded-md">
                    <h1 className="text-xl font-semibold">{charity.title}</h1>
                    <p className="text-gray-300">{charity.desc}</p>

                    <div>
                        <p className="font-bold text-lg">Contract Address:</p>
                        <p className="p-2 mt-1 bg-[#1e3769] rounded-md">{charity.address}</p>
                    </div>
                    <div>
                        <p className="font-bold text-lg">Recipient Address:</p>
                        <p className="p-2 mt-1 bg-[#1e3769] rounded-md">{charity.recipient}</p>
                    </div>
                    <p>Target Amount: {charity.targetAmount} ETH</p>
                    <p>Charity deadline: {charity.deadline}</p>
                    <button className="bg-blue-600 p-2 rounded-md font-semibold text-lg cursor-pointer">Donate</button>
                </div>
            ))}
        </div>
    )
}