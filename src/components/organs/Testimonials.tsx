import { useCallback, useRef } from "react";
import { Text } from "../atoms/Text"
import { TestimonialTexts } from "../particles/DataLists"
import Slider, { Settings } from "react-slick";  // Asegúrate de importar 'Slider' correctamente
import { Button } from "../atoms/Button";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { Card } from "../molecules/Card";
import ProfileImg1 from "../../assets/profile1.jpeg"
import ProfileImg2 from "../../assets/profile2.jpeg"
import ProfileImg3 from "../../assets/profile3.jpeg"
import ProfileImg4 from "../../assets/profile4.jpeg"

const Testimonials = () => {
    
    const sliderRef = useRef<Slider | null>(null);  // Tipamos como 'Slider' que es el tipo correcto

    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };


    const settings: Settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
    };

 

    const renderProfileImg = useCallback((element: number) => {
        switch (element) {
            case 0:
                return ProfileImg2;
            case 1:
                return ProfileImg1;
            case 2:
                return ProfileImg3;
            case 3:
                return ProfileImg4;
            default:
                return "";
        }
    }, [])

    return (
        <section className="w-full h-auto flex flex-col items-start justify-center relative lg:px-24 md:px-10 px-6 mt-36 gap-5">
            <main className='w-full grid md:grid-cols-2 lg:gap-0 gap-8 md:gap-5'>
                {/* Text and Steps Container  */}
                <div className='w-full flex flex-col gap-6'>
                    <Text as="p" className="font-light text-base text-color3/80 tracking-widest">
                        {TestimonialTexts.firstText}
                    </Text>
                    <Text as="h1" className="lg:text-5xl md:text-3xl text-4xl text-color3 font-medium">
                        {TestimonialTexts.secondText}
                    </Text>
                    <div dangerouslySetInnerHTML={{__html: TestimonialTexts.info.replace('google maps', '<a style="color: #6eb4ff" href="https://www.google.es/maps/place/A+Fonte/@43.111226,-9.0299619,17z/data=!4m8!3m7!1s0xd2ec9000094b525:0x2f60864462546c2a!8m2!3d43.111226!4d-9.0299619!9m1!1b1!16s%2Fg%2F11vz0r5_rc?hl=es&entry=ttu&g_ep=EgoyMDI0MTIwOS4wIKXMDSoASAFQAw%3D%3D">Google Maps</a>')}}></div>

                </div>
                {/* Testimonial Slides Container  */}
                <div className="w-full lg:h-[400px] flex justify-center gap-4 items-center">
                    <div className="lg:h-[250px] w-[90%]">
                        <Slider ref={sliderRef} {...settings}>
                            {
                                TestimonialTexts.feedBacks.map((feedBack, index) => (
                                    <div className="w-full">
                                        <Card
                                         key={index}
                                         cardClass="bg-white shadow border-[1px] border-color3/10 relative rounded-xl p-4 lg:h-[200px] h-[260px] lg:mb-4 w-full flex gap-4 justify-start"
                                         textWrapperClass="flex flex-col justify-center gap-6">
                                            <Text as="q" className="text-[0.84rem] font-light text-color3">
                                                {feedBack.text}
                                            </Text>
                                            <div className="flex flex-col gap-2">
                                                <Text as="h4" className="text-base text-color3 font-medium">
                                                    {feedBack.person}
                                                </Text>
                                            </div>
                                        </Card>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                    {/* Controllers  */}
                    <div className="flex flex-col gap-4 pb-5">
                        <Button onClick={previous} id="prev" className="cursor-pointer outline-none border-none bg-color2/30 text-color3 hover:bg-color2 p-2 rounded-full" type="button">
                            <CaretUp size={18} color="currentColor" weight="fill" />
                        </Button>
                        <Button onClick={next} id="next" className="cursor-pointer outline-none border-none bg-color2/30 text-color3 hover:bg-color2 p-2 rounded-full" type="button">
                            <CaretDown size={18} color="currentColor" weight="fill" />
                        </Button>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Testimonials