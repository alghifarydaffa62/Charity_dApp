import CharityList from "../component/CharityList"
import DeployForm from "../component/DeployForm"
import ConnectWallet from "../component/ConnectWallet"
import MyCharity from "../component/MyCharity"
import { ethers } from "ethers"
import { useEffect, useState } from "react"
import { fetchCharitiesByUser } from "../utils/fetchCharity"
import { fetchAllCharity } from "../utils/allCharity"

export default function Charity() {
  const [charities, setCharities] = useState([]);
  const [myCharities, setMyCharities] = useState([]);
  const [userWallet, setUserWallet] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleConnect = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const userAddress = await signer.getAddress();
      setUserWallet(userAddress);
      localStorage.setItem('userWallet', userAddress);
      setIsLoading(true);
      
      const all = await fetchAllCharity();
      setCharities(all);

      const myCharities = await fetchCharitiesByUser(userAddress);
      setMyCharities(myCharities);
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to connect: ", error);
    }
  };

  useEffect(() => {
    const savedWallet = localStorage.getItem('userWallet');
    if(savedWallet) {
      setUserWallet(savedWallet);
      fetchAllCharity().then(setCharities);
      setIsLoading(true);
      fetchCharitiesByUser(savedWallet)
        .then(setMyCharities)
        .finally(() => setIsLoading(false));
    }

    const saved = localStorage.getItem('charities');
    if(saved) {
      setCharities(JSON.parse(saved));
    }
  }, []);

  const handleDeploy = async (newCharity) => {
    const updated = [newCharity, ...charities];
    setCharities(updated);
    localStorage.setItem('charities', JSON.stringify(updated));

    if(newCharity.owner === userWallet) {
      setMyCharities([newCharity, ...myCharities]);
    }
  };

  const handleDisconnect = () => {
    setUserWallet(null);
    setMyCharities([]);
    localStorage.removeItem('userWallet');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="text-center">
          <ConnectWallet handler={handleConnect} userWallet={userWallet} disconnect={handleDisconnect} />
        </div>

        {userWallet ? (
          <main className="max-w-7xl mx-auto px-6 pb-12">
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <DeployForm onDeploy={handleDeploy} />
              <MyCharity loading={isLoading} charities={myCharities} userWallet={userWallet} />
            </div>

            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold">
                  Available{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Charities
                  </span>
                </h2>
                <p className="text-slate-300 text-lg">
                  Support meaningful causes and make a transparent impact
                </p>
              </div>
              <CharityList charities={charities} userWallet={userWallet} />
            </div>
          </main>
        ) : (
          <div>
          </div>
        )}
      </div>
    </div>
  );
}