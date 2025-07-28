import { useParams } from "react-router-dom"

export default function DonatePage() {
    const { address } = useParams()

    return(
        <div className="text-white">
            <div className="text-center my-5">
                <h1 className="text-2xl font-semibold">Donate page</h1>
                <h1>Title</h1>
                <h1>Address: {address}</h1>
            </div>
        </div>
    )
}