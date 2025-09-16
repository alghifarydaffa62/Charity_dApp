import metamask from "../assets/MetaMask.svg"
import { 
  ArrowLeft, 
  Wallet, 
  Shield, 
  Zap, 
  Check,
  ChevronRight,
  Lock,
  Globe,
} from 'lucide-react';

export default function ConnectWallet({ handler, userWallet, disconnect }) {
  const handleBack = () => {
    window.location.href = '/';
  };

  return (
    <div>
      <div className="relative z-10">
        {userWallet ? (
          <main className="flex items-center justify-center my-10 px-6">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="flex items-center justify-center space-x-4 text-xl">
                <span className="font-semibold text-white">Connected Wallet:</span>
                <div className="bg-slate-800/50 px-4 py-2 rounded-xl border border-slate-700/50">
                  <span className="text-slate-300 font-mono">{userWallet}</span>
                </div>
              </div>

              <button 
                onClick={disconnect}
                className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer"
              >
                Disconnect wallet
              </button>
              
            </div>
          </main>
        ) : (
            <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white">
                <header className="p-6">
                    <button 
                        onClick={handleBack}
                        className="cursor-pointer group flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Home</span>
                    </button>
                </header>
                <main className="flex items-center justify-center min-h-[calc(100vh-100px)] px-6">
                    <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">

                        <div className="space-y-8">
                            <div className="space-y-6">
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm">
                                    <Zap className="w-4 h-4 mr-2" />
                                    Secure Connection
                                </div>
                                
                                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                                    Connect Your{' '}
                                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                        Web3 Wallet
                                    </span>
                                </h1>
                                
                                <p className="text-xl text-slate-300 leading-relaxed">
                                    Welcome! Please connect your web3 wallet before continuing to use our donation features. Your wallet, your control.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <Check className="w-4 h-4 text-green-400" />
                                    </div>
                                    <span className="text-slate-300">100% secure and encrypted</span>
                                </div>
                                
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                                        <Shield className="w-4 h-4 text-blue-400" />
                                    </div>
                                    <span className="text-slate-300">Your keys, your crypto</span>
                                </div>
                                
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                                        <Globe className="w-4 h-4 text-purple-400" />
                                    </div>
                                    <span className="text-slate-300">Global blockchain network</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
                                <div className="space-y-6">
                                    <div className="text-center space-y-4">
                                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto">
                                            <Wallet className="w-8 h-8 text-white" />
                                        </div>
                                        <h2 className="text-2xl font-bold">Connect Your Wallet</h2>
                                        <p className="text-slate-300">
                                            Choose your preferred wallet to connect and start donating
                                        </p>
                                    </div>

                                    <button
                                        onClick={handler}
                                        className="cursor-pointer group w-full p-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl"
                                    >
                                    <div className="flex items-center justify-center space-x-3">
                                        <img src={metamask} alt="" className="w-7"/>
                                        <span className="text-lg font-semibold text-white">Continue with MetaMask</span>
                                        <ChevronRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                    </button>

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )}
      </div>
    </div>
  );
}