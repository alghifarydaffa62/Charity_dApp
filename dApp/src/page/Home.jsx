import Navbar from "../component/HomePage/Navbar"
import Jumbotron from "../component/HomePage/Jumbotron"
export default function Home() {
    return(
        <div className="text-white">
            <Navbar/>        
            <Jumbotron/>
        </div>
    )
}