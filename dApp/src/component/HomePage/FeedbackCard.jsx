import { Star } from "lucide-react";

export default function FeedbackCard({ text, name, role, avatar, rating }) {
    return (
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
            <div className="flex mb-4">
                {[...Array(rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
            </div>
        
            <p className="text-slate-300 leading-relaxed mb-6 italic">
                "{text}"
            </p>
            
            <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {avatar}
                </div>
                <div>
                    <h4 className="font-semibold text-white">{name}</h4>
                    <p className="text-slate-400 text-sm">{role}</p>
                </div>
            </div>
        </div>
    );
}