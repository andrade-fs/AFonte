import { Text } from "../atoms/Text"
import { MapsText } from "../particles/DataLists"

const Maps = () => {

    return (
        <section className="w-full h-auto flex flex-col items-start justify-center relative lg:px-24 md:px-10 px-6 gap-5">
            <main className='w-full grid md:grid-cols-2 lg:gap-0 gap-8 md:gap-5'>
                {/* Text and Steps Container  */}
                <div className='w-full flex flex-col gap-6'>
                    <Text as="p" className="font-light text-base text-color3/80 tracking-widest">
                        {MapsText.firstText}
                    </Text>
                    <Text as="h1" className="lg:text-5xl md:text-3xl text-4xl text-color3 font-medium">
                        {MapsText.secondText}
                    </Text>
                </div>
           
            </main>
            <div className='w-full flex flex-col gap-6'>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.680639478995!2d-9.032536822504495!3d43.11122597113319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2ec9000094b525%3A0x2f60864462546c2a!2sA%20Fonte!5e0!3m2!1ses!2ses!4v1734029156543!5m2!1ses!2ses" height="450" style={{ border: 0, width: '100%' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
};

export default Maps;