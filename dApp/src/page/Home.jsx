import Navbar from "../component/HomePage/Navbar"
import Hero from "../component/HomePage/Hero"
import Features from "../component/HomePage/Features"
import HowItWorks from "../component/HomePage/HowItWork"
import CallToAction from "../component/HomePage/CallToAction"
import Feedback from "../component/HomePage/Feedback"
import Footer from "../component/Footer"

export default function Home() {
    return(
        <div className="text-white">
            <Navbar/>        
            <Hero/>
            <Features/>
            <HowItWorks/>
            <Feedback/>
            <CallToAction/>
            <Footer/>
        </div>
    )
}