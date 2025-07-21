import CharityList from "../component/CharityList"
import DeployForm from "../component/DeployForm"
import ButtonConnect from "../component/ButtonConnect"
import MyCharity from "../component/MyCharity"
import { useEffect, useState } from "react"

export default function Home() {
    const [charities, setCharities] = useState([])

    useEffect(()=> {
        const saved = localStorage.getItem('charities')
        if(saved) {
            setCharities(JSON.parse(saved))
        }
    }, [])

    const handleDeploy = (charity) => {
        const updated = [charity, ...charities]
        setCharities(updated)
        localStorage.setItem('charities', JSON.stringify(updated))
    }

    return(
        <div className="text-white">
            <div className="text-center my-6">
                <h1 className='font-bold text-3xl'>Charity dApp</h1>
                <ButtonConnect/>
            </div>

            <div className="flex justify-center gap-8">
                <DeployForm onDeploy={handleDeploy}/>
                <MyCharity/>
            </div>

            <div className="my-6">
                <h1 className="text-center text-3xl font-bold">Available Charity:</h1>
                <CharityList charities={charities}/>
            </div>
            
        </div>
    )
}