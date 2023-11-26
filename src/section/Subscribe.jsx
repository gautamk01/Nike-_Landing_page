import Button from "../Component/Button"


const Subscribe = () => {
    return (
        <section className=" max-container flex justify-between items-center max-lg:flex-col gap-10" id="contact-us">
            <h3 className=" text-4xl leading-[68px] lg:max-w-md  font-palanquin font-bold max-sm:text-2xl">Sign up for
                <span className=" text-coral-red"> update </span>
                & newsLatter
            </h3>
            <div className=" flex max-sm:justify-end items-center max-sm:flex-col max-sm:w-full lg:max-w[40%] w-full gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
                <input type="text" placeholder="subscrube@nike.com" className="input" />
                <div className=" flex items-center max-sm:w-full   ">
                    <Button label="Sign up" fullWidth />
                </div>
            </div>
        </section>
    )
}

export default Subscribe