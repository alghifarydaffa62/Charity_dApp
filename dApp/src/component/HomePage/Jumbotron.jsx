import charityIMG from "../../assets/charity.jpg"
import TryItNowButton from "./TryNowButton"

export default function Jumbotron() {
    return(
        <div className="flex justify-evenly items-center min-h-[90vh]">
            <div>
                <h1 className="text-6xl font-bold">Empowering Charity<br/>with Decentralization</h1>
                <p className="text-2xl text-gray-300 mt-4 font-bold">Join us in revolutionizing charity by 
                    leveraging blockchain<br/>technology for transparency, trust, and impact.</p>
                <div className="mt-4">
                    <TryItNowButton/>
                </div>
            </div>
            
            <img src={charityIMG} alt="" className="w-100 rounded-xl"/>
        </div>
    )
}