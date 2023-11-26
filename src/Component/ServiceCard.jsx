

const ServiceCard = (Props) => {
    return (
        <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
            <div className="flex justify-center items-center bg-coral-red rounded-full w-11 h-11">
                <img src={Props.imgURL} alt={Props.label} width={24} height={24} />
            </div>
            <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{Props.label}</h3>
            <p className="mt-3 break-words font-montserrat text-lg leading-normal">{Props.subtext}</p>
        </div>
    )
}

export default ServiceCard