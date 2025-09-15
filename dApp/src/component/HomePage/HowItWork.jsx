import { ChevronsRight } from "lucide-react"
import StepCard from "./StepCard";

export default function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Create Campaign",
            description: "Set up your charitable campaign with clear goals and transparent funding requirements"
        },
        {
            number: "02", 
            title: "Receive Donations",
            description: "Accept verified donations from supporters worldwide through secure blockchain transactions"
        },
        {
            number: "03",
            title: "Distribute Funds",
            description: "Smart contracts automatically release funds to recipients when milestones are achieved"
        }
    ];

  return (
        <section className="py-20 px-6 bg-slate-900/20" id="howitworks">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        Start Being{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Kynd
                        </span>
                        {' '}in 3 Steps
                    </h2>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Our streamlined process makes charitable giving simple, secure, and transparent.
                    </p>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            <StepCard {...step} />
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                                    <ChevronsRight className="w-6 h-6 text-slate-600" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
