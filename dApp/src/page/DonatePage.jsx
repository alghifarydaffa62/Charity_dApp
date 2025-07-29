import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { fetchCharityByAddr } from "../utils/fetchCharityByAddr"
import DonateForm from "../component/DonateForm"
import CharityCard from "../component/CharityCard"
import BackButton from "../component/BackButton"
import { LoaderCircle } from "lucide-react"

export default function DonatePage() {
    const { address } = useParams()
    const [searchParams] = useSearchParams()
    const [charity, setCharity] = useState(null)

    const walletAddr = searchParams.get('wallet')

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchCharityByAddr(address)
            setCharity(data)
        }
        fetchData()
    }, [address])

    if (!charity) return (
        <div className="flex justify-center items-center h-[100px]">
            <LoaderCircle className="animate-spin text-blue-400" size={32} />
        </div>
    )

    return(
        <div className="text-white">
            <div className="text-center my-5">
                <h1 className="text-3xl font-bold">{charity.title}</h1>
                <h1 className="text-xl font-semibold mt-3">{charity.desc}</h1>
            </div>
            
            <div className="ml-30 mt-10">
                <BackButton/>
            </div>

            <div className="flex justify-center gap-6">
                <CharityCard charity={charity}/>
                <DonateForm wallet={walletAddr}/>
            </div>
            
        </div>
    )
}