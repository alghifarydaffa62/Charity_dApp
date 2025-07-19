import CharityList from "../component/CharityList"
import DeployForm from "../component/DeployForm"
import ButtonConnect from "../component/ButtonConnect"
import MyCharity from "../component/MyCharity"

export default function Home() {
    return(
        <div className="text-white">

            <div className="text-center my-6">
                <h1 className='font-bold text-3xl'>Charity dApp</h1>
                <p className="font-semibold text-xl mt-2">
                    Connected Wallet: 
                    <span className=""></span>
                </p>
                <ButtonConnect/>
            </div>

            <div className="flex justify-center gap-8">
                <DeployForm/>
                <MyCharity/>
                <CharityList/>
            </div>
        </div>
    )
}