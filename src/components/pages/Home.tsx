import BookingSteps from "../organs/BookingSteps"
import HeroSection from "../organs/HeroSection"
import Maps from "../organs/Maps"
import Services from "../organs/Services"
import Testimonials from "../organs/Testimonials"
import TopDestination from "../organs/TopDestination"


const Home = () => {
    return (
        <>
            <HeroSection />
            <Services />
            <TopDestination />
            <BookingSteps />
            <Testimonials />
            <Maps />
        </>
    )
}

export default Home