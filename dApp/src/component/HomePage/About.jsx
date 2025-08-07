import decentralized from "../../assets/decentralized.png"
import transparant from "../../assets/transparant.png"
import secure from "../../assets/secure.png"
import low from "../../assets/lowFees.png"
import global from "../../assets/global.png"
import community from "../../assets/people.png"

export default function About() {
    return (
        <div className="py-16 px-6 bg-[#142956] text-center">
            <div className="max-w-screen-lg mx-auto">
                <h2 className="text-5xl font-bold mb-6">
                    Why choose <span className="text-blue-400">Kynd</span>?
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto text-xl">
                    Kynd is a decentralized application that allows donors to contribute directly and transparently to charitable causes using blockchain technology.
                </p>

                <div className="flex flex-wrap justify-center gap-8 mt-12">
                    <FeatureCard
                        icon={decentralized}
                        title="Decentralized"
                        desc="No middlemen. Donations go straight to the intended recipients via smart contracts."
                    />
                    <FeatureCard
                        icon={transparant}
                        title="Transparent"
                        desc="Track every transaction on-chain. Trust through visibility."
                    />
                    <FeatureCard
                        icon={secure}
                        title="Secure"
                        desc="Smart contracts ensure funds are only released when predefined conditions are met."
                    />
                    <FeatureCard
                        icon={low}
                        title="Low Fees"
                        desc="Low fees with a high impact on society."
                    />
                    <FeatureCard
                        icon={global}
                        title="Global Reach"
                        desc="Connect with donors and recipients worldwide without intermediaries."
                    />
                    <FeatureCard
                        icon={community}
                        title="Community Driven"
                        desc="Empower communities to manage and distribute funds transparently."
                    />
                </div>
            </div>
        </div>
    );
}

function FeatureCard({ icon, title, desc }) {
    return (
        <div className="bg-[#071732] p-6 rounded-xl w-[260px] sm:w-[280px] text-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src={icon} alt={title} className="w-16 h-16 mx-auto" />
            <h3 className="text-xl font-semibold mt-4 text-white">{title}</h3>
            <p className="text-sm text-gray-400 mt-2">{desc}</p>
        </div>
    );
}