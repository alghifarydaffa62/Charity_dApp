import { Zap, ArrowRight } from "lucide-react"

export default function Hero() {
    return(
        <section className="pt-24 pb-12 px-6 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto">
                <div className="text-center gap-12 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm">
                            <Zap className="w-4 h-4 mr-2" />
                            Powered by Blockchain
                        </div>
                        
                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                            Empowering{' '}
                            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Charity
                            </span>
                            {' '}with Transparency
                        </h1>
                        
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            Join the revolution in charitable giving. Use blockchain technology to ensure every donation reaches its intended cause with complete transparency and trust.
                        </p>
                        
                        <div className="flex flex-col justify-center sm:flex-row gap-4">
                            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center">
                                Launch App
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 rounded-full border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white transition-all duration-300">
                                Learn More
                            </button>
                        </div>
                        
                        <div className="flex justify-evenly gap-4">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-blue-400">$2.5M+</div>
                                <div className="text-lg text-slate-400">Donated</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-purple-400">15K+</div>
                                <div className="text-lg text-slate-400">Donors</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-pink-400">500+</div>
                                <div className="text-lg text-slate-400">Campaigns</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    )
}