import { Image } from "../atoms/Image"
import bgImage from "../../assets/HeroVector.png"
import Logo from "../../assets/afonte_logo.png"
import heroImage from "../../assets/coffe_character.png"
import { Text } from "../atoms/Text"
import { HeroTexts } from "../particles/DataLists"
import { Button } from "../atoms/Button"
import { Play } from "@phosphor-icons/react"
import { Fade, Slide } from "react-awesome-reveal"


const HeroSection = () => {
    return (
        <section className="w-full lg:h-screen md:h-[550px] h-[830px] relative overflow-x-hidden flex justify-end">
            <Image className="h-[60%] w-[80%] lg:h-[90vh] md:h-[50vh] lg:w-1/2 md:w-[55%]" image={bgImage} alt="Hero Background Vector" />
            <main className="w-full lg:h-full h-auto grid md:grid-cols-2 absolute top-0 left-0 lg:px-24 md:px-8 px-5 pt-24 md:pt-32 lg:pt-0">
                <div className="flex flex-col justify-center md:gap-6 gap-3 md:order-1 order-2">
                    <Image as="a" href="/" style={{ height: '90px', width: '90px'}} className="" image={Logo} alt="Logo" />
                    <Text as="p" className="text-color1 uppercase tracking-widest lg:text-base  text-sm font-normal">
                        <Fade>{HeroTexts.firstText}</Fade>
                    </Text>
                    <Text as="h1" className=" text-color3 lg:text-7xl md:text-5xl text-3xl font-medium">
                        <Fade>{HeroTexts.secondText}</Fade>
                    </Text>
                    <Text as="p" className="text-color3 md:text-base text-sm text-justify font-light">
                        <Fade>{HeroTexts.thirdText}</Fade>
                    </Text>
                    <div className="w-full flex md:justify-start justify-between items-center lg:gap-12 md:gap-6 gap-0">
                        <Button onClick={() => window.location.href = '/carta'} type="button" className="outline-none border-none lg:px-7 px-5 py-3 bg-color2 text-white font-bold rounded-lg">
                            {HeroTexts.firstButton}
                        </Button>

                    </div>
                </div>
                <div className="flex flex-col items-center justify-end md:order-2 order-1">
                    <Slide direction="right">
                        <Image image={heroImage} alt="Hero Image" className=" lg:h-[70vh] lg:w-[70vh] md:h-[100%] md:w-full w-[90%] h-[40vh]" />
                    </Slide>

                </div>
            </main>
        </section>
    )
}

export default HeroSection