import { Link } from "react-router-dom"
import { 
  Plus, 
  Users, 
  LoaderCircle,
  CheckCircle,
  Clock,
  MapPin,
} from 'lucide-react';

export default function MyCharity({ loading, charities, userWallet }) {
    if (!userWallet) {
        return (
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Your Charities</h2>
            </div>
            <p className="text-slate-300">Please connect your wallet to view your charities.</p>
        </div>
        );
    }

    const myCharities = charities.filter(c => c.deployer === userWallet);

    return (
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
        <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Your Charities</h2>
        </div>

        {loading ? (
            <div className="flex justify-center items-center h-32">
            <LoaderCircle className="animate-spin text-blue-400" size={32} />
            </div>
        ) : myCharities.length === 0 ? (
            <div className="text-center py-8">
                <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Plus className="w-8 h-8 text-slate-400" />
                </div>
                <p className="text-slate-300">You haven't created any charities yet.</p>
                <p className="text-slate-400 text-sm mt-1">Create your first charity campaign to get started!</p>
            </div>
        ) : (
            <div className="space-y-4">
            {myCharities.map((charity, index) => (
                <div key={index} className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                        {charity.isFinished ? (
                            <span className="flex items-center space-x-1 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">
                            <CheckCircle className="w-3 h-3" />
                            <span>Completed</span>
                            </span>
                        ) : (
                            <span className="flex items-center space-x-1 bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold">
                            <Clock className="w-3 h-3" />
                            <span>Active</span>
                            </span>
                        )}
                        </div>
                    </div>
                
                    <h3 className="font-semibold text-white mb-2">{charity.title}</h3>
                    
                    <div className="flex items-center space-x-2 text-slate-300">
                        <MapPin className="w-4 h-4" />
                        <Link 
                        to={`/charity/${charity.address}?wallet=${userWallet}`} 
                        className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-mono hover:underline"
                        >
                        {`${charity.address.slice(0, 8)}...${charity.address.slice(-6)}`}
                        </Link>
                    </div>
                </div>
            ))}
            </div>
        )}
        </div>
    );
}