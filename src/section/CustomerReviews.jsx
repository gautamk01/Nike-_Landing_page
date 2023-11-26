import { ReviewCard } from "../Component/ReviewCard"
import { reviews } from "../Constants"


const CustomerReviews = () => {
    return (
        <section className="max-conatiner">
            <h3 className=" font-palanquin text-center text-4xl max-sm:text-2xl font-bold"> What Our
                <span className=" text-coral-red "> Customers </span>
                Says?
            </h3>
            <p className=" mt-4 leading-normal text-center text-xl font-montserrat text-slate-gray">Hear genunine Stories from our satisfied Customer about their Experiance from using our products </p>
            <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
                {reviews.map((review) => (
                    <ReviewCard key={review.customerName} {...review} />
                ))}
            </div>
        </section>
    )
}

export default CustomerReviews