import { useState } from "react"
import { ethers } from "ethers"
import Processing from "./popup/Processing"
import DeploySuccess from "./popup/DeploySuccess"
import CreateNewCharity from "../utils/createCharity"
import { Plus } from 'lucide-react';

export default function DeployForm({ onDeploy }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [recipientAddress, setRecipientAddress] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [deadline, setDeadline] = useState("");
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [deploySuccess, setDeploySuccess] = useState(false);

  const handleDeploy = async () => {
    const newErrors = {};

    if(!title.trim()) newErrors.title = "Input your charity title";
    if(!desc.trim()) newErrors.desc = "Input your charity description";
    if(!ethers.isAddress(recipientAddress)) newErrors.recipient = "Invalid address!";

    const parsedTarget = parseFloat(targetAmount);
    if(isNaN(parsedTarget) || parsedTarget <= 0) newErrors.targetAmount = "Target must be greater than zero!";

    if(!deadline) newErrors.deadline = "Input you charity deadline";
    else {
      const deadlineTime = Math.floor(new Date(deadline).getTime() / 1000);
      const now = Math.floor(Date.now() / 1000);
      if(deadlineTime <= now) newErrors.deadline = "deadline must be in the future";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    try {
      const dl = Math.floor(new Date(deadline).getTime() / 1000);
      const charity = await CreateNewCharity(title, desc, recipientAddress, targetAmount, dl);
      setIsProcessing(true);
      onDeploy(charity);

      setIsProcessing(false);
      setDeploySuccess(true);
      setTitle("");
      setDesc("");
      setRecipientAddress(""); 
      setTargetAmount("");
      setDeadline("");
    } catch(err) {
      console.error("Deployment error: ", err);
    }
  };

  return (
    <>
      {isProcessing && <Processing type="Charity Deployment" />}
      {deploySuccess && <DeploySuccess isOpen={deploySuccess} onClose={() => setDeploySuccess(false)} />}
      
      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
            <Plus className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white">Create New Charity</h2>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-2">
            {errors.title && <p className="text-red-400 text-sm">{errors.title}</p>}
            <label className="block font-semibold text-slate-200">Charity Title</label>
            <input 
              type="text" 
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:border-blue-500/50 focus:outline-none transition-colors"
              placeholder="Enter charity title..."
              value={title} 
              onChange={e => setTitle(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            {errors.desc && <p className="text-red-400 text-sm">{errors.desc}</p>}
            <label className="block font-semibold text-slate-200">Description</label>
            <textarea 
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:border-blue-500/50 focus:outline-none transition-colors resize-none h-24"
              placeholder="Describe your charity purpose..."
              value={desc} 
              onChange={e => setDesc(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            {errors.recipient && <p className="text-red-400 text-sm">{errors.recipient}</p>}
            <label className="block font-semibold text-slate-200">Recipient Address</label>
            <input 
              type="text" 
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:border-blue-500/50 focus:outline-none transition-colors font-mono text-sm"
              placeholder="0x..."
              value={recipientAddress} 
              onChange={e => setRecipientAddress(e.target.value)}
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              {errors.targetAmount && <p className="text-red-400 text-sm">{errors.targetAmount}</p>}
              <label className="block font-semibold text-slate-200">Target Amount (ETH)</label>
              <input 
                type="text" 
                className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:border-blue-500/50 focus:outline-none transition-colors"
                placeholder="0.0"
                value={targetAmount} 
                onChange={e => setTargetAmount(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              {errors.deadline && <p className="text-red-400 text-sm">{errors.deadline}</p>}
              <label className="block font-semibold text-slate-200">Deadline</label>
              <input 
                type="date" 
                className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:border-blue-500/50 focus:outline-none transition-colors"
                value={deadline} 
                onChange={e => setDeadline(e.target.value)}
              />
            </div>
          </div>

          <button 
            onClick={handleDeploy} 
            disabled={isProcessing}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-slate-600 disabled:to-slate-600 px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isProcessing ? 'Deploying...' : 'Deploy Charity'}
          </button>
        </div>
      </div>
    </>
  );
}