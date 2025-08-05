import charityIMG from "../../assets/charity.jpg"
import TryItNowButton from "./TryNowButton"

export default function Jumbotron() {
    return(
        <div className="flex justify-evenly items-center min-h-[90vh]">
            <div>
                <h1 className="text-5xl font-bold">Transparent Giving.<br/>Powered by Blockchain.</h1>
                <p className="text-2xl text-gray-300 mt-4 font-bold">No intermediaries.<br/>Just pure, traceable generosity.</p>
                <div className="mt-4">
                    <TryItNowButton/>
                </div>
            </div>
            
            <img src={charityIMG} alt="" className="w-120 rounded-xl"/>
        </div>
    )
}