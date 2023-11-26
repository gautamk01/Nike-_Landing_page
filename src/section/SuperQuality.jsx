import Button from "../Component/Button"
import { shoe8 } from "../assets/images"


const SuperQuality = () => {
    return (
        <section id="about-us" className="flex justify-center items-center max-container max-lg:flex-col w-full gap-10 ">
            <div className="flex flex-1 flex-col">

                <h2 className="text-4xl uppercase font-montserrat  font-bold lg:max-w-lg max-sm:text-2xl leading-normal">
                    <span className="xl:bg-white relative z-10 pr-10 xl:whitespace-nowrap ">We provide you</span>
                    <br />
                    <span className="text-coral-red inline-block ">Super Quality </span>
                    <span className=" relative z-10 pr-10  "> Shoes</span>
                </h2>
                <p className="mt-4 lg:max-w-lg info-text max-sm:text-[16px]">
                    Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you
                    with unmatched quality, innovation, and a touch of elegance.</p>
                <p className=" mt-6 lg:max-w-lg info-text "> Our dedication to detail and excellence ensures your satistfaction</p>
                <div className="mt-11 ">   <Button label={"View Details"} /></div>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <img src={shoe8} alt="Shoes 8" width={570} height={522} className=" object-contain" />
            </div>
        </section>
    )
}

export default SuperQuality