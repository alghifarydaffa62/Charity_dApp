import Navbar from "../component/HomePage/Navbar"
import Jumbotron from "../component/HomePage/Jumbotron"
import About from "../component/HomePage/About"
import HowItWorks from "../component/HomePage/HowItWork"
import CallToAction from "../component/HomePage/CallToAction"
import Footer from "../component/Footer"

export default function Home() {
    return(
        <div className="text-white">
            <Navbar/>        
            <Jumbotron/>
            <About/>
            <HowItWorks/>
            <CallToAction/>
            <Footer/>
        </div>
    )
}