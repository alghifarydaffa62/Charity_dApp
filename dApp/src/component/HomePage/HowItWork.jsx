
export default function HowItWorks() {
    return (
        <div className="bg-[#203b76] py-20 px-8">
            <h2 className="text-center text-5xl font-bold mb-10">How It Works</h2>
            <div className="flex flex-col md:flex-row justify-center gap-10">
                <Step number="1" title="Create a Charity Campaign" />
                <Step number="2" title="Receive Verified Donations" />
                <Step number="3" title="Withdraw Upon Completion" />
            </div>
        </div>
    )
}

function Step({ number, title }) {
    return (
        <div className="bg-[#071732] rounded-xl p-6 w-[220px] text-center">
            <div className="text-blue-400 text-4xl font-bold">{number}</div>
            <h3 className="text-lg mt-4 font-semibold">{title}</h3>
        </div>
    )
}
