import { Heart } from "lucide-react"

export default function Navbar() {
    return(
        <nav className="fixed w-full top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Heart className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Kynd
                    </span>
                </div>
                
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-slate-300 hover:text-white transition-colors">Home</a>
                    <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
                    <a href="#benefits" className="text-slate-300 hover:text-white transition-colors">Benefits</a>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                    Start Donating
                    </button>
                </div>
                </div>
            </div>
        </nav>
    )
}