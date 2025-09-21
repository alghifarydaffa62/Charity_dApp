import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { fetchCharityByAddr } from "../utils/fetchCharityByAddr"
import DonateForm from "../component/DonateForm"
import CharityCard from "../component/CharityCard"
import BackButton from "../component/BackButton"
import Footer from "../component/Footer"
import { LoaderCircle } from "lucide-react"

export default function DonatePage() {
  const { address } = useParams();
  const [searchParams] = useSearchParams();
  const [charity, setCharity] = useState(null);

  const walletAddr = searchParams.get('wallet');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharityByAddr(address);
      setCharity(data);
    };
    fetchData();
  }, [address]);

  if (!charity) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <LoaderCircle className="animate-spin text-blue-400 mx-auto" size={48} />
          <p className="text-slate-300">Loading charity details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <header className="p-6">
          <div className="max-w-7xl mx-auto">
            <BackButton />
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-6 pb-12">
          <div className="text-center mb-12 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                {charity.title}
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                {charity.desc}
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <CharityCard charity={charity} wallet={walletAddr} />
            <DonateForm charity={address} wallet={walletAddr} />
          </div>
        </main>
      </div>
    </div>
  );
}