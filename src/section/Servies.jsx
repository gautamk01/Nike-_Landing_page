import ServiceCard from "../Component/ServiceCard"
import { services } from "../Constants"

const Servies = () => {
    return (
        <section className=" max-container flex justify-center flex-wrap gap-9">
            {services.map((services) => (
                <ServiceCard key={services.label} {...services} />
            ))}
        </section>
    )
}

export default Servies