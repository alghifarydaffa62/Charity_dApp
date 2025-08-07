export default function Feedback() {
    const feedbacks = [
        {
            text: "Decentralized, Transparant, and Secure. Amazing dApp.",
            initials: "RB",
            name: "Ryan Bagus Atmojo",
            role: "Donator",
            color: "bg-blue-500"
        },
        {
            text: "A perfect blend of technology and charity. I trust every transaction I make here.",
            initials: "PH",
            name: "Peter Holland",
            role: "Donator",
            color: "bg-fuchsia-500"
        },
        {
            text: "Being part of a decentralized charity makes me feel empowered and connected.",
            initials: "RB",
            name: "Ryan Bagus Atmojo",
            role: "Donator",
            color: "bg-blue-500"
        },
        {
            text: "This solve our problem of having a trust issue of an intermidieries. Overall amazing dApp",
            initials: "RB",
            name: "Ryan Bagus Atmojo",
            role: "Donator",
            color: "bg-blue-500"
        },
        {
            text: "Kynd has transformed how I give. The transparency and community involvement are unmatched.",
            initials: "AS",
            name: "Adam Sevin",
            role: "Donator",
            color: "bg-purple-500"
        },
    ];

    return (
        <div className="bg-[#0b1e38] py-16 px-6 text-white">
            <h1 className="text-center text-4xl font-bold mb-12">What Our User Say ?</h1>

            <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
                {feedbacks.map((item, idx) => (
                    <div key={idx} className="bg-[#315887] rounded-xl p-6 w-full sm:w-[300px] md:w-[400px] h-fit">
                        <p className="italic font-medium text-lg mb-4">“{item.text}”</p>
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 flex items-center justify-center rounded-full text-white font-semibold ${item.color}`}>
                                {item.initials}
                            </div>
                            <div>
                                <h1 className="text-md font-bold">{item.name}</h1>
                                <p className="text-sm">{item.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
