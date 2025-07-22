import CharityList from "../component/CharityList"
import DeployForm from "../component/DeployForm"
import ButtonConnect from "../component/ButtonConnect"
import MyCharity from "../component/MyCharity"
import { ethers } from "ethers"
import { useEffect, useState } from "react"
import { fetchCharitiesByUser } from "../utils/fetchCharity"
import { fetchAllCharity } from "../utils/allCharity"

export default function Home() {
    const [charities, setCharities] = useState([])
    const [myCharities, setMyCharities] = useState([])
    const [userWallet, setUserWallet] = useState()

    const handleConnect = async () => {
        try {
            const provider = new ethers.BrowserProvider(window.ethereum)
            const signer = await provider.getSigner()
            const userAddress = await signer.getAddress()
            setUserWallet(userAddress)
            localStorage.setItem('userWallet', userAddress)
            
            const all = await fetchAllCharity()
            setCharities(all)

            const myCharities = await fetchCharitiesByUser(userAddress)
            setMyCharities(myCharities)
        } catch (error) {
            console.error("Failed to connect: ", error)
        }
    }

    useEffect(()=> {
        const savedWallet = localStorage.getItem('userWallet')
        if(savedWallet) {
            setUserWallet(savedWallet)
            fetchAllCharity().then(setCharities)
            fetchCharitiesByUser(savedWallet).then(setMyCharities)
        }

        const saved = localStorage.getItem('charities')
        if(saved) {
            setCharities(JSON.parse(saved))
        }
    }, [])

    const handleDeploy = async (newCharity) => {
        const updated = [newCharity, ...charities]
        setCharities(updated)
        localStorage.setItem('charities', JSON.stringify(updated))

        if(newCharity.owner === userWallet) {
            setMyCharities([newCharity, ...myCharities])
        }
    }

    const handleDisconnect = () => {
        setUserWallet(null)
        setMyCharities([])
        localStorage.removeItem('userWallet')
    }

    return (
        <div className="text-white">
            <div className="text-center my-6">
                <h1 className='font-bold text-3xl'>Charity dApp</h1>
                <ButtonConnect handler={handleConnect} userWallet={userWallet} disconnect={handleDisconnect}/>
            </div>

            {userWallet ? (
                <div>
                    <div className="flex justify-center gap-8">
                        <DeployForm onDeploy={handleDeploy} />
                        <MyCharity charities={myCharities} userWallet={userWallet} />
                    </div>  
                    <div className="my-6">
                        <h1 className="text-center text-3xl font-bold">Available charity:</h1>
                        <CharityList charities={charities} userWallet={userWallet}/>
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    )
}