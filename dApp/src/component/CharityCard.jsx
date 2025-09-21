import { ethers } from "ethers"
import CharityABI from "../../../artifacts/contracts/Charity.sol/Charity.json"
import { 
  CheckCircle,
  Clock,
  User,
  Wallet,
  Target,
  Calendar,
  Zap,
} from 'lucide-react';

export default function CharityCard({ charity, wallet }) {
  const handleSubmit = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(charity.address, CharityABI.abi, signer);
      
      const tx = await contract.SendCharity();
      await tx.wait();
    } catch(error) {
      console.error(error);
    }
  };

  const progressPercentage = Math.min((charity.collected / charity.target) * 100, 100);

  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 space-y-6">
      <div className="flex justify-between items-start">
        {charity.isFinished ? (
          <span className="flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold">
            <CheckCircle className="w-4 h-4" />
            <span>Completed</span>
          </span>
        ) : (
          <span className="flex items-center space-x-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>Active</span>
          </span>
        )}
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <Zap className="w-5 h-5 text-blue-400" />
            <h3 className="font-semibold text-white">Contract Address</h3>
          </div>
          <div className="bg-slate-700/50 rounded-xl p-4 border border-slate-600/30">
            <p className="font-mono text-sm text-slate-300 break-all">
              {charity.address}
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-2 mb-3">
            <User className="w-5 h-5 text-purple-400" />
            <h3 className="font-semibold text-white">Charity Creator</h3>
          </div>
          <div className="bg-slate-700/50 rounded-xl p-4 border border-slate-600/30">
            <p className="font-mono text-sm text-slate-300 break-all">
              {charity.owner}
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-2 mb-3">
            <Wallet className="w-5 h-5 text-green-400" />
            <h3 className="font-semibold text-white">Recipient Address</h3>
          </div>
          <div className="bg-slate-700/50 rounded-xl p-4 border border-slate-600/30">
            <p className="font-mono text-sm text-slate-300 break-all">
              {charity.recipient}
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-2 mb-3">
            <Calendar className="w-5 h-5 text-orange-400" />
            <h3 className="font-semibold text-white">Campaign Deadline</h3>
          </div>
          <div className="bg-slate-700/50 rounded-xl p-4 border border-slate-600/30">
            <p className="text-slate-300 font-semibold">
              {new Date(charity.deadline * 1000).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-2 mb-3">
            <Target className="w-5 h-5 text-pink-400" />
            <h3 className="font-semibold text-white">Funding Progress</h3>
          </div>
          <div className="bg-slate-700/50 rounded-xl p-4 border border-slate-600/30 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Current / Target</span>
              <span className="text-white font-bold text-lg">
                {charity.collected} ETH / {charity.target} ETH
              </span>
            </div>
            <div className="w-full bg-slate-600 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="text-center">
              <span className="text-slate-400 text-sm">
                {progressPercentage.toFixed(1)}% funded
              </span>
            </div>
          </div>
        </div>
      </div>

      {wallet === charity.owner && (
        <div className="pt-4 border-t border-slate-700/50">
            {charity.collected == charity.target ? (
              <button 
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                Release Funds to Recipient
              </button>
            ) : (
              <button 
                disabled
                className="w-full bg-slate-600 text-slate-400 py-3 rounded-xl font-semibold cursor-not-allowed"
              >
                Campaign Still Active
              </button>
            )}
        </div>
      )}
    </div>
  );
}