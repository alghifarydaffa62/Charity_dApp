import { Heart } from "lucide-react"

export default function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-slate-800">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                                <Heart className="w-5 h-5" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Kynd
                            </span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                        Revolutionizing charity through blockchain transparency and decentralized giving.
                        </p>
                    </div>
                    
                    <div>
                        <h4 className="font-semibold text-white mb-4">Product</h4>
                        <div className="space-y-2 text-sm">
                            <a href="#about" className="block text-slate-400 hover:text-white transition-colors">Features</a>
                            <a href="#howitworks" className="block text-slate-400 hover:text-white transition-colors">How it Works</a>
                            <a href="/charity" className="block text-slate-400 hover:text-white transition-colors">Launch App</a>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="font-semibold text-white mb-4">Creator - alghifarydaffa62</h4>
                        <div className="space-y-2 text-sm">
                            <a href="https://dfpro20.vercel.app" target="_blank" className="block text-slate-400 hover:text-white transition-colors">Portfolio</a>
                            <a href="https://github.com/alghifarydaffa62" target="_blank" className="block text-slate-400 hover:text-white transition-colors">Github</a>
                            <a href="https://www.instagram.com/df_webdev?igsh=MWNyYWZ4cnNoeTZjdg==" target="_blank" className="block text-slate-400 hover:text-white transition-colors">Instagram</a>
                            <a href="https://www.linkedin.com/in/mdaffaalghifary/" target="_blank" className="block text-slate-400 hover:text-white transition-colors">LinkedIn</a>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="font-semibold text-white mb-4">Support</h4>
                        <div className="space-y-2 text-sm">
                            <a href="#" className="block text-slate-400 hover:text-white transition-colors">Help Center</a>
                            <a href="#" className="block text-slate-400 hover:text-white transition-colors">Contact</a>
                            <a href="#" className="block text-slate-400 hover:text-white transition-colors">Status</a>
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-slate-400 text-sm">
                        © {new Date().getFullYear()} Kynd. Built with 💙 on Ethereum.
                    </p>
                    <div className="flex items-center space-x-6 mt-4 md:mt-0 text-sm text-slate-400">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Security</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}