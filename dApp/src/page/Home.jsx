import Navbar from "../component/HomePage/Navbar"
import Jumbotron from "../component/HomePage/Jumbotron"
import Service from "../component/HomePage/Service"
import About from "../component/HomePage/About"

export default function Home() {
    return(
        <div className="text-white">
            <Navbar/>        
            <Jumbotron/>
            <About/>
            <div className="mt-15">
                <Service/>
            </div>
        </div>
    )
}