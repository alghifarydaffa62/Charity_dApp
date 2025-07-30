
export default function CharityCard({charity}) {
    return(
        <div className="flex flex-col gap-3 p-5 bg-blue-950 rounded-lg max-w-md">
            
            {charity.isFinished ? (
                <p className="p-2 bg-green-500">Completed</p>
            ) : (   
                <p className="font-semibold text-[14px] px-2 bg-blue-700 rounded-lg w-fit">Not Completed</p>
            )}

            <div className="">
                <h1 className="text-lg font-semibold">Charity Address:</h1>
                <h1 className="mt-1 p-2 bg-blue-900 rounded-md">{charity.address}</h1>
            </div>
            {charity.owner}
            <div className="">
                <h1 className="text-lg font-semibold">Recipient:</h1>
                <h1 className="mt-1 p-2 bg-blue-900 rounded-md">{charity.recipient}</h1>
            </div>

            <h1>Charity Deadline: <span className="px-3 py-1 bg-blue-900 rounded-full">{new Date(charity.deadline * 1000).toLocaleDateString()}</span></h1>
            
            <div className="">
                <h1 className="text-lg font-semibold">Target Progress:</h1>
                <h1 className="mt-1 p-1 bg-blue-900 rounded-full text-center">{charity.collected} / {charity.target} ETH</h1>
            </div>

            <button className="mt-4 cursor-pointer hover:bg-blue-600 p-2 bg-blue-500 font-semibold rounded-md">Submit Charity</button>
        </div>
    )
}