import decentralized from "../../assets/decentralized.png"
import secure from "../../assets/secure.png"
import transparant from "../../assets/transparant.png"

export default function About() {
    return(
        <div className="mx-30">
            <div className="text-center">
                <h1 className="text-3xl font-bold">Try <span className="text-blue-400">Kynd</span></h1>
                <h1 className="text-2xl font-semibold">Kynd is a Decentralized Application for Charity</h1>
            </div>
            
            <div className="flex justify-center gap-8 mt-8">
                <div className="p-8 bg-[#071732] rounded-lg">
                    <img src={decentralized} alt="" className="object-contain w-20"/>
                    <div className="mt-5">
                        <h1 className="text-2xl font-semibold">Decentralized</h1>
                        <p>svsvjsvpjodjvsjvdpjvsjpov</p>
                    </div>
                </div>
                <div className="p-8 bg-[#071732] rounded-lg">
                    <img src={transparant} alt="" className="object-contain w-20"/>
                    <div className="mt-5">
                        <h1 className="text-2xl font-semibold">Transparant</h1>
                        <p>sdodvjsdvjsvjsdovjsodjvso</p>
                    </div>
                </div>
                <div className="p-8 bg-[#071732] rounded-lg">
                    <img src={secure} alt="" className="object-contain w-20"/>
                    <div className="mt-5">
                        <h1 className="text-2xl font-semibold">Secure Donation</h1>
                        <p>ahcdjdjojavojadjjajvdojaj</p>
                    </div>
                </div>
            </div>
        </div>
    )
}