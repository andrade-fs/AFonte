import { useCallback } from "react"
import { Image } from "../atoms/Image"
import bgImage from "../../assets/HeroVector.png"
import { Text } from "../atoms/Text"
import { desayunosText } from "../particles/DataLists"
import { Button } from "../atoms/Button"
import { Fade } from "react-awesome-reveal"
import { Card } from "../molecules/Card"
import Icon1 from "../../assets/Riquiño.jpeg"
import Icon2 from "../../assets/Larpeiro.jpeg"
import Icon3 from "../../assets/xeitosiño.jpeg"
import Icon4 from "../../assets/AFonte.jpeg"
import Icon5 from "../../assets/Enxebre.jpeg"
import Icon6 from "../../assets/Aloumiño.jpeg"
import Icon7 from "../../assets/Irmandiño.jpeg"


const Carta = () => {
    
    const renderDesayunosIcon = useCallback((element: number) => {
        switch (element) {
            case 0:
                return Icon1;
            case 1:
                return Icon2;
            case 2:
                return Icon3;
            case 3:
                return Icon4;
                return Icon2;
            case 4:
                return Icon5;
            case 5:
                return Icon6;
            case 6:
                return Icon7;
            default:
                return "";
        }
    }, []);
    return (
        <section className="w-full lg:h-screen md:h-[550px] h-[830px] relative overflow-x-hidden flex justify-end">
        <Image className="h-[60%] w-[80%] lg:h-[90vh] md:h-[50vh] lg:w-1/2 md:w-[55%]" image={bgImage} alt="Hero Background Vector" />
        <main className="w-full lg:h-full h-auto grid md:grid-cols-1 absolute top-0 left-0 lg:px-24 md:px-8 px-5 pt-24 md:pt-32 lg:pt-0">
            <div className="flex flex-col mt-36 items-center md:gap-6 gap-3 md:order-1 order-2">
                <Text as="p" className="text-color1 uppercase tracking-widest lg:text-base  text-sm font-normal">
                    <Fade>{desayunosText.firstText}</Fade>
                </Text>
                <Text as="p" className="text-color1 uppercase tracking-widest lg:text-base  text-sm font-normal">
                    <Fade>{desayunosText.secondText}</Fade>
                </Text>
                <Text as="h1" className=" text-color3 lg:text-7xl md:text-5xl text-3xl font-medium mt-10">
                    <Fade>{desayunosText.text}</Fade>
                </Text>
            
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
                    {desayunosText.cards.map((feedBack, index) => (
                        <div key={index} className="w-full">
                            <Card
                                cardClass="bg-white shadow border-[1px] border-color3/10 w-full h-full relative rounded-xl p-4 flex gap-4 justify-start"
                                textWrapperClass="flex flex-col justify-center gap-6 w-full h-full"
                                imageWrapperClass="w-28 h-28 relative z-10 before:content-[''] before:absolute before:top-3 before:right-3 before:w-16 before:h-16 before:bg-color2/30 before:-z-10 before:rounded-tl-3xl before:rounded-br-3xl"
                                imageSrc={renderDesayunosIcon(index)} >
                                <Text as="q" className="text-[0.84rem] font-light text-color3">
                                    {feedBack.title}
                                </Text>
                                <div className="flex flex-col gap-2">
                                    <Text as="h4" className="text-base text-color3 font-medium">
                                        {feedBack.description}
                                    </Text>
                                </div>
                                <div className="w-full flex justify-end">
                                    <Text as="q" className="text-[0.84rem] font-light text-color3">
                                        {feedBack.price}
                                    </Text>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
                <Text as="h1" className=" text-color3 lg:text-7xl md:text-5xl text-3xl font-medium mt-20">
                    <Fade>{desayunosText.text2}</Fade>
                </Text>
            
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
                    {desayunosText.cards2.map((feedBack, index) => (
                        <div key={index} className="w-full">
                            <Card
                                cardClass="bg-white shadow border-[1px] border-color3/10 w-full h-full relative rounded-xl p-4 flex gap-4 justify-start"
                                textWrapperClass="flex flex-col justify-center gap-6 w-full h-full">
                                <div className="flex flex-col gap-2">
                                    <Text as="h4" className="text-base text-color3 font-medium">
                                        {feedBack.description}
                                    </Text>
                                </div>
                                    <div className="w-full flex justify-end">
                                    <Text as="q" className="text-[0.84rem] font-light text-color3">
                                        {feedBack.price}
                                    </Text>

                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
                <Text as="h1" className=" text-color3 lg:text-7xl md:text-5xl text-3xl font-medium mt-20">
                    <Fade>{desayunosText.text3}</Fade>
                </Text>
            
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
                    {desayunosText.cards3.map((feedBack, index) => (
                        <div key={index} className="w-full">
                            <Card
                                cardClass="bg-white shadow border-[1px] border-color3/10 w-full h-full relative rounded-xl p-4 flex gap-4 justify-start"
                                textWrapperClass="flex flex-col justify-center gap-6 w-full h-full">
                                <div className="flex flex-col gap-2">
                                    <Text as="h4" className="text-base text-color3 font-medium">
                                        {feedBack.description}
                                    </Text>
                                </div>
                                    <div className="w-full flex justify-end">
                                    <Text as="q" className="text-[0.84rem] font-light text-color3">
                                        {feedBack.price}
                                    </Text>

                                </div>
                            </Card>
                        </div>
                    ))}
                </div>

    
                <Button type="button" className="outline-none border-none lg:px-7 px-5 py-3 bg-color2 text-white font-bold rounded-lg mt-10 mb-20">
                    Descargar Carta
                </Button>
            </div>
        </main>
    </section>
    )
};


export default Carta;


