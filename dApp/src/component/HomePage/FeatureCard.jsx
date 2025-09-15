
export default function FeatureCard({ icon: Icon, title, description, color }) {
    return (
        <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl" 
                style={{backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`}} 
                ></div>
        
            <div className="relative">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${color} p-3 mb-6 shadow-lg`}>
                    <Icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}