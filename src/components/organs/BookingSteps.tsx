import { useCallback } from 'react'
import { List } from '../atoms/List'
import { Text } from '../atoms/Text'
import { BookingStepsTexts } from '../particles/DataLists'
import { AirplaneInFlight, AirplaneTilt, Buildings, MapTrifold, Receipt, Wallet } from '@phosphor-icons/react'
import { Card } from '../molecules/Card'
import CardImage2 from "../../assets/clock.png"
import cafeteria from "../../assets/cafeteria.jpg"
import { Image } from '../atoms/Image'

const BookingSteps = () => {

    const renderIcons = useCallback((element: number) => {
        switch (element) {
            case 0:
                return <MapTrifold size={15} color="currentColor" weight="fill" />;
            case 1:
                return <Wallet size={15} color="currentColor" weight="fill" />;
            case 2:
                return <AirplaneInFlight size={15} color="currentColor" weight="fill" />;
            default:
                return "";
        }
    }, [])

    return (
        <section className="w-full h-auto flex flex-col items-start justify-center relative lg:px-24 md:px-10 px-6 my-28 gap-5">
            <Text as="p" className="font-light text-base text-color3/80 tracking-widest">
                {BookingStepsTexts.firstText}
            </Text>
            <main className='w-full grid md:grid-cols-2 lg:gap-6 gap-12 md:gap-5'>
                {/* Text and Steps Container  */}
                <div className='w-full flex flex-col gap-6 order-2 md:order-1'>
                    <Text as="h1" className="lg:text-5xl md:text-3xl text-4xl text-color3 font-medium">
                        {BookingStepsTexts.secondText}
                    </Text>
                    <ul className='flex flex-col gap-8 lg:mt-5 mt-3'>
                        {
                            BookingStepsTexts.listOfSteps.map((step, index) => (
                                <List className='flex gap-5 items-center justify-start' key={index}>
                                    <Text as='p' className={`text-white ${index === 0 ? "bg-color2" : index === 1 ? "bg-color1" : "bg-color3"} p-2 rounded-md`}>
                                        {renderIcons(index)}
                                    </Text>
                                    <Text as='p' className='text-sm text-color3 font-light'>
                                        {step.text}
                                    </Text>
                                </List>

                            ))
                        }
                    </ul>
                </div>
                {/* Card Container  */}
                <div className='w-full flex flex-col justify-center lg:items-center items-start relative order-1 md:order-2'>
                    {/* First Card  */}
                    <Image image={cafeteria} alt="Vector" className="absolute bottom-0 right-4 lg:h-80 h-24" />

                    {/* Second Absolute Card  */}
                    <Card cardClass='flex gap-3 justify-start items-start absolute lg:right-0 -right-4 bottom-3 bg-white py-3 px-4 border-2 border-color3/5 shadow-md rounded-xl' imageAlt={BookingStepsTexts.cardTwo.destination} imageSrc={CardImage2} cover='object-cover object-top' imageWrapperClass='h-16 w-16 rounded-full overflow-hidden' textWrapperClass='flex flex-col gap-2'>
                        <Text as='p' className='text-xs font-light text-color3'>
                            {BookingStepsTexts.cardTwo.status}
                        </Text>
                        <Text as='h4' className='text-base font-medium text-color3'>
                            {BookingStepsTexts.cardTwo.destination}
                        </Text>
                        <Text as='p' className='text-xs font-light text-color3 pb-2 relative before:w-[40%] before:h-1 before:absolute before:bottom-0 before:left-0 before:bg-color1'>
                            {BookingStepsTexts.cardTwo.completion}
                        </Text>
                    </Card>
                </div>
            </main>
        </section>
    )
}

export default BookingSteps