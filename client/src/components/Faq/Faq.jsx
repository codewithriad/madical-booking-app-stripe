import faqImg from "../../assets/images/faq-img.png";
import Accordions from "./Accordions";

const Faq = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {/* Faq Image */}

            <figure className="flex justify-center items-center">
              <img src={faqImg} alt="faq image" />
            </figure>

            {/* All Faq importing */}
            <div className="flex flex-col mt-8 lg:mt-0">
              <h2 className="heading mb-8">
                Most question by our beloved patients
              </h2>

              <Accordions />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
