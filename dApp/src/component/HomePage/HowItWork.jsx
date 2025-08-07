import { ChevronsRight } from "lucide-react"

export default function HowItWorks() {
    return (
        <div className="py-30 min-h-[80vh]">
            <h2 className="text-center text-5xl font-bold mb-15">Start being Kynd with 3 easy steps</h2>
            <div className="flex flex-col md:flex-row justify-center gap-10 items-center">
                <Step number="1" title="Create a Charity Campaign" />
                <ChevronsRight size={48}/>
                <Step number="2" title="Receive Verified Donations" />
                <ChevronsRight size={48}/>
                <Step number="3" title="Send total donations to the recipient" />
            </div>
        </div>
    )
}

function Step({ number, title }) {
    return (
        <div className="bg-[#071732] rounded-xl p-6 w-[260px] text-center">
            <div className="text-blue-400 text-4xl font-bold">{number}</div>
            <h3 className="text-lg mt-4 font-semibold">{title}</h3>
        </div>
    )
}
