import { Link } from "react-router-dom"
import { 
  Wallet, 
  Calendar, 
  Target, 
  CheckCircle,
  Clock,
  DollarSign,
  Zap,
  Heart
} from 'lucide-react';

export default function CharityList({ charities, userWallet }) {
  if (charities.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
          <Heart className="w-10 h-10 text-slate-400" />
        </div>
        <h3 className="text-xl font-semibold text-slate-300 mb-2">No Charities Available</h3>
        <p className="text-slate-400">Be the first to create a charity campaign!</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {charities.map((charity, index) => (
        <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-[1.02]">
          <div className="flex justify-between items-start mb-4">
            {charity.isFinished ? (
              <span className="flex items-center space-x-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                <CheckCircle className="w-4 h-4" />
                <span>Completed</span>
              </span>
            ) : (
              <span className="flex items-center space-x-2 bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-semibold">
                <Clock className="w-4 h-4" />
                <span>Active</span>
              </span>
            )}
          </div>

          <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{charity.title}</h3>
          <p className="text-slate-300 mb-6 line-clamp-3 leading-relaxed">{charity.desc}</p>

          <div className="space-y-4 mb-6">
            <div>
              <p className="text-slate-400 text-sm font-semibold mb-2 flex items-center">
                <Zap className="w-4 h-4 mr-1" />
                Contract Address
              </p>
              <div className="bg-slate-700/50 rounded-lg p-2">
                <p className="font-mono text-sm text-slate-300 break-all">
                  {charity.address}
                </p>
              </div>
            </div>

            <div>
              <p className="text-slate-400 text-sm font-semibold mb-2 flex items-center">
                <Wallet className="w-4 h-4 mr-1" />
                Recipient
              </p>
              <div className="bg-slate-700/50 rounded-lg p-2">
                <p className="font-mono text-sm text-slate-300 break-all">
                  {charity.recipient}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between">
              <span className="text-slate-400 text-sm flex items-center">
                <Target className="w-4 h-4 mr-1" />
                Progress
              </span>
              <span className="text-white font-bold">
                {charity.balance} / {charity.targetAmount} ETH
              </span>
            </div>
            
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${Math.min((charity.balance / charity.targetAmount) * 100, 100)}%` }}
              ></div>
            </div>

            <div className="flex items-center text-slate-400 text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              <span>Deadline: {new Date(charity.deadline * 1000).toLocaleDateString()}</span>
            </div>
          </div>

          {userWallet ? (
            <Link 
              to={`/charity/${charity.address}?wallet=${userWallet}`} 
              className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-center py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center justify-center space-x-2">
                <DollarSign className="w-5 h-5" />
                <span>Donate Now</span>
              </div>
            </Link>
          ) : (
            <button 
              disabled
              className="w-full bg-slate-600 text-slate-400 py-3 rounded-xl font-semibold cursor-not-allowed"
            >
              Connect Wallet to Donate
            </button>
          )}
        </div>
      ))}
    </div>
  );
}