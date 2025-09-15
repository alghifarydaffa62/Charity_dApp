import { Shield, Eye, Zap, Globe, Users, Heart } from "lucide-react";

export default function Features() {
    const features = [
        {
        icon: Shield,
        title: "Decentralized",
        description: "Smart contracts ensure donations reach recipients directly without intermediaries",
        color: "from-blue-500 to-cyan-500"
        },
        {
        icon: Eye,
        title: "Transparent",
        description: "Track every transaction on the blockchain with complete visibility and accountability",
        color: "from-purple-500 to-violet-500"
        },
        {   
        icon: Zap,
        title: "Secure",
        description: "Advanced cryptography and smart contracts protect your donations and data",
        color: "from-pink-500 to-rose-500"
        },
        {
        icon: Globe,
        title: "Global Reach",
        description: "Connect with causes worldwide, breaking down geographical barriers",
        color: "from-green-500 to-emerald-500"
        },
        {
        icon: Users,
        title: "Community Driven",
        description: "Empower communities to manage funds transparently and democratically",
        color: "from-orange-500 to-yellow-500"
        },
        {
        icon: Heart,
        title: "Low Fees",
        description: "Minimize overhead costs so more of your donation reaches those in need",
        color: "from-indigo-500 to-purple-500"
        }
    ];

  return (
        <section className="py-20 px-6" id="about">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        Why Choose{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Kynd
                        </span>
                        ?
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Experience the future of charitable giving with blockchain technology that ensures transparency, security, and direct impact.
                    </p>
                </div>
                    
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}