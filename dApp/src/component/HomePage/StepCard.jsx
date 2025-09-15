
export default function StepCard({ number, title, description }) {
    return (
        <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 text-center">
            <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-2xl font-bold text-white shadow-lg">
                {number}
                </div>
            </div>
        
            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                {title}
            </h3>
            
            <p className="text-slate-400 leading-relaxed">
                {description}
            </p>
        </div>
    );
}