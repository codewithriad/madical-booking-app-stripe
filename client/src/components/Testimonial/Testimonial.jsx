import TestimonialCards from "./TestimonialCards"

const Testimonial = () => {
  return (
    <>
        <section>
            <div className="container">
                {/* Testimonial heading */}
                <div className="flex justify-center items-center flex-col mb-8">
                    <h2 className="heading text-center">What Our Patients Say</h2>
                    <p className="text__para text-center w-1/2 mx-auto">
                        World class care system in our clinic for Everyone. We are offering for everyone to get treatment from our doctors and services.
                    </p>
                </div>
                <TestimonialCards/>
            </div>
        </section>
    </>
  )
}

export default Testimonial