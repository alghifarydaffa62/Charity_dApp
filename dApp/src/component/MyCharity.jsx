import { Link } from "react-router-dom"
import { LoaderCircle } from "lucide-react"

export default function MyCharity({ loading, charities, userWallet }) {
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

            {loading ? (
                <div className="flex justify-center items-center h-[100px]">
                    <LoaderCircle className="animate-spin text-blue-400" size={32} />
                </div>
            ) : myCharities.length === 0 ? (
                <p className="text-gray-300">You haven't created any charities yet.</p>
            ) : (
                myCharities.map((charity, index) => (
                    <div key={index} className="p-3 bg-[#1f3c6a] rounded-lg">
                        {charity.isFinished ? (
                            <p className="p-2 bg-green-500">Completed</p>
                        ) : (
                            <p className="font-semibold text-[12px] px-2 bg-blue-700 rounded-lg w-fit">Not Completed</p>
                        )}
                        <h1 className="mt-3 text-md font-semibold">{charity.title}</h1>
                        <p className="mt-1 text-sm text-gray-300 font-semibold">Address: <Link to={`/charity/${charity.address}?wallet=${userWallet}`} className="cursor-pointer hover:text-blue-400">{charity.address}</Link></p>
                    </div>
                ))
            )}
        </div>
    )
}