import { PopularProductsCard } from "../Component/PopularProductCard"
import { products } from "../Constants"


const PopularProducts = () => {
    return (
        <section id="products" className=" max-container max-sm:mt-12">
            <div className="flex flex-col justify-start gap-5">
                <h2 className="text-4xl font-palanquin font-bold max-sm:text-3xl">Our<span className=" text-coral-red"> Popular</span>  Product </h2>
                <p className=" lg:max-w-lg mt-2 font-montserrat text-slate-gray max-sm:text-md ">Experience  top-notch quality and stule with our sought-after selection.Discorver a world of comfort , design and value</p>
            </div>
            <div className="mt-16 grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">{
                products.map((p, i) => (<PopularProductsCard key={i} {...p} />))
            }</div>
        </section>
    )
}

export default PopularProducts