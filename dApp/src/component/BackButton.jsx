import { ArrowLeft } from "lucide-react";

export default function BackButton() {
    return (
        <button 
            onClick={() => window.location.href = '/charity'}
            className="cursor-pointer group flex items-center space-x-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50 hover:border-slate-500/50 px-4 py-3 rounded-xl transition-all duration-300 text-slate-300 hover:text-white"
            >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Back to Charities</span>
        </button>
    );
}