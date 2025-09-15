import { Zap, ArrowRight } from "lucide-react"

export default function Hero() {
    return(
        <section className="pt-24 pb-12 px-6 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                            <br />
                            with Transparency
                        </h1>
                        
                        <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                            Join the revolution in charitable giving. Use blockchain technology to ensure every donation reaches its intended cause with complete transparency and trust.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center">
                                Launch App
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 rounded-full border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white transition-all duration-300">
                                Learn More
                            </button>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-8 pt-8">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-400">$2.5M+</div>
                                <div className="text-sm text-slate-400">Donated</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-purple-400">15K+</div>
                                <div className="text-sm text-slate-400">Donors</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-pink-400">500+</div>
                                <div className="text-sm text-slate-400">Campaigns</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
                        <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold">Live Donation</h3>
                                <div className="flex items-center text-green-400 text-sm">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                                    Active
                                </div>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="bg-slate-800/50 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-slate-400">Education for All</span>
                                        <span className="text-blue-400 font-semibold">$1,250</span>
                                    </div>
                                    <div className="w-full bg-slate-700 rounded-full h-2">
                                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-3/4"></div>
                                    </div>
                                </div>
                            
                                <div className="bg-slate-800/50 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-slate-400">Clean Water Initiative</span>
                                        <span className="text-purple-400 font-semibold">$890</span>
                                    </div>
                                    <div className="w-full bg-slate-700 rounded-full h-2">
                                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-1/2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
    </section>
    )
}