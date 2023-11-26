import Button from "../Component/Button"
import { arrowRight } from "../assets/icons"
import { statistics, shoes } from "../Constants"
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../Component/ShoeCard"
import { useState } from "react"

const Hero = () => {
    const [bigshoes, setbigshoes] = useState(bigShoe1)
    console.log(bigshoes);
    return (
        <section className="w-full flex flex-col justify-center min-h-screen xl:flex-row gp-10 max-container  ">
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
                <p className="text-xl text-coral-red font-montserrat">Our summer collection</p>
                <h1 className=" mt-10 text-8xl font-montserrat max-sm:text-[44px] max-sm:leading-none  font-bold">
                    <span className="xl:bg-white relative z-10 pr-10 xl:whitespace-nowrap">The New Arrival</span>
                    <br />
                    <span className="text-coral-red inline-block mt-3">Nike</span>
                    <span className=" relative z-10 pr-10  "> Shoes</span>
                </h1>
                <p className=" font-montserrat text-slate-gray text-lg mt-6 mb-14  sm:max-w-sm">Discover stylish Nike arrival, quality comfort and innovation for your active life</p>
                <Button label={"Shop Now"} iconurl={arrowRight} />
                <div className="flex justify-start items-start flex-wrap mt-16 gap-16">
                    {statistics.map(x => (
                        <div key={x.label}>
                            <p className="sm:text-4xl leading-7 font-palanquin font-bold">{x.value}</p>
                            <p className=" leading-7 font-montserrat text-slate-gray">{x.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative  flex-1   flex justify-center items-center xl:min-h-screen bg-hero max-xl:py-40 bg-primary bg-cover bg-center ">
                <img src={bigshoes} alt="Big shoe 1 " width={610} height={500} className=" object-contain relative z-10" />
                <div className=" flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
                    {shoes.map((shoes, index) => (<div key={index}>
                        <ShoeCard imgURL={shoes} changeBigShoes={(shoes) => (setbigshoes(shoes))} bigShoeImage={bigshoes} />
                    </div>))}</div>
            </div>
        </section>
    )
}

export default Hero