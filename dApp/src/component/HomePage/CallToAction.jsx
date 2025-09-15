import { Check, ArrowRight } from "lucide-react"

export default function CallToAction() {
    return (
        <section className="py-20 px-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                    Ready to Make a{' '}
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Difference
                    </span>
                    ?
                </h2>
                
                <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Join Kynd today and experience the future of charitable giving. Every donation creates transparent, measurable impact.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                    <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center">
                        Launch App
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <button className="px-8 py-4 rounded-full border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white transition-all duration-300">
                        View Demo
                    </button>
                </div>
                
                <div className="flex justify-center items-center text-slate-400 text-sm">
                    <Check className="w-4 h-4 mr-2 text-green-400" />
                    No setup fees • Secure blockchain technology • Global reach
                </div>
            </div>
        </section>
    )
}
