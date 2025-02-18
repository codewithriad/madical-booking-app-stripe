import Accordions from "./Accordions";

const Faq = () => {
  return (
    <>
    <section>
        <div className="container">
            {/* Faq Image */}
            {/* All Faq importing */}
      <div>
        <h2 className="heading mb-8">Most question by our beloved patients</h2>

        <Accordions />
      </div>
        </div>
    </section>
      
    </>
  );
};

export default Faq;
