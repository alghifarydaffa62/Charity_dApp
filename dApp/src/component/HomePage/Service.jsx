export default function Service() {
    return (
        <div className="py-20 px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">The Service We Offer</h2>
            <div className="flex flex-col md:flex-row justify-center gap-10">
                <ServiceItem title="Transparent Tracking" />
                <ServiceItem title="Smart Contract Safety" />
                <ServiceItem title="Low Fees, High Impact" />
            </div>
        </div>
    )
}

function ServiceItem({ title }) {
    return (
        <div className="bg-[#2c4d87] p-6 rounded-xl w-[300px]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="text-sm text-gray-300 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet.
            </p>
        </div>
    )
}
