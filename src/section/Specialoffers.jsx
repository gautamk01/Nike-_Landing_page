import Button from "../Component/Button"
import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"


const Specialoffers = () => {
    return (
        <section className="flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
            <div className="flex-1">
                <img src={offer} width={773} height={687} className=" object-contain w-full" />
            </div>
            <div className="flex flex-1 flex-col">

                <h2 className="text-4xl  font-montserrat  font-bold lg:max-w-lg max-sm:text-2xl leading-normal">

                    <span className="text-coral-red inline-block ">Special</span>
                    <span className=" relative z-10 pr-10  tracking-wide"> Offers</span>
                </h2>
                <p className="mt-4 lg:max-w-lg info-text max-sm:text-[16px]">
                    Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you
                    with unmatched quality, innovation, and a touch of elegance.</p>
                <p className=" mt-6 lg:max-w-lg info-text "> Our dedication to detail and excellence ensures your satistfaction</p>
                <div className="mt-11 flex flex-wrap gap-4 ">
                    <Button label={"Shop now"} iconurl={arrowRight} />
                    <Button label="Learn more" backgroundColor='bg-white' borderColor='border border-slate-gray' textColor='text-slate-gray' />
                </div>
            </div>
        </section>
    )
}

export default Specialoffers