import { useState } from "react"
import { ethers } from "ethers"
import Processing from "./popup/Processing"
import DonateSuccess from "./popup/DonateSuccess"
import CharityABI from "../../../artifacts/contracts/Charity.sol/Charity.json"
import { 
  LoaderCircle,
  CheckCircle,
  Wallet,
  HandCoins,
  Heart,
  DollarSign
} from 'lucide-react';

export default function DonateForm({ charity, wallet }) {
  const [amount, setAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [donateSuccess, setDonateSuccess] = useState(false);

  const handleDonate = async () => {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const contract = new ethers.Contract(charity, CharityABI.abi, signer);

      const tx = await contract.donate({
        value: ethers.parseEther(amount)
      });
      setIsProcessing(true);
      await tx.wait();

      setIsProcessing(false);
      setDonateSuccess(true);
      setAmount("");
    } catch(error) {
      console.error(error);
      setIsProcessing(false);
    }
  };

  return (
    <>
      {isProcessing && <Processing type="Charity Donation" />}
      {donateSuccess && <DonateSuccess isOpen={donateSuccess} onClose={() => setDonateSuccess(false)} />}
      
      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 h-fit">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
            <HandCoins className="w-7 h-7 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Make a Donation</h2>
            <p className="text-slate-400">Support this meaningful cause</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block font-semibold text-slate-200 mb-3">
              <DollarSign className="w-4 h-4 inline mr-2" />
              Donation Amount (ETH)
            </label>
            <div className="">
              <input 
                placeholder="0.0 ETH" 
                className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-3 py-3 text-white placeholder-slate-400 focus:border-blue-500/50 focus:outline-none transition-colors text-lg"
                type="text" 
                value={amount} 
                onChange={e => setAmount(e.target.value)}
              />
            </div>
            <p className="text-slate-400 text-sm mt-2">
              Enter the amount you wish to donate in ETH
            </p>
          </div>

          <div>
            <label className="block font-semibold text-slate-200 mb-3">
              <Wallet className="w-4 h-4 inline mr-2" />
              Your Wallet Address
            </label>
            <div className="bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-4">
              <p className="font-mono text-sm text-slate-300 break-all">
                {wallet}
              </p>
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-200 mb-3">Quick Select</label>
            <div className="grid grid-cols-4 gap-2">
              {['0.01', '0.05', '0.1', '0.5'].map((quickAmount) => (
                <button
                  key={quickAmount}
                  onClick={() => setAmount(quickAmount)}
                  className="bg-slate-700/30 hover:bg-slate-600/50 border border-slate-600/30 hover:border-slate-500/50 py-2 rounded-lg text-sm font-semibold transition-colors"
                >
                  {quickAmount} ETH
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={handleDonate}
            disabled={!amount || isProcessing}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-slate-600 disabled:to-slate-600 px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isProcessing ? (
              <div className="flex items-center justify-center space-x-2">
                <LoaderCircle className="w-5 h-5 animate-spin" />
                <span>Processing...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <Heart className="w-5 h-5" />
                <span>Donate {amount ? `${amount} ETH` : 'Now'}</span>
              </div>
            )}
          </button>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="space-y-1">
                <h4 className="font-semibold text-blue-400 text-sm">Secure Transaction</h4>
                <p className="text-blue-300/80 text-sm leading-relaxed">
                  Your donation is processed securely through smart contracts. All transactions are transparent and recorded on the blockchain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}