import services from "../../assets/data/services";
import ServicesCard from "./ServicesCard";
const ServiceList = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our medical services</h2>
            <p className="text__para text-center">
              World class care system in our clinic for Everyone. We are
              offering for everyone to get treatment from our doctors and
              services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[38px] lg:mt-[55px]">
            {services.map((item, index) => (
              <ServicesCard key={index} item={item} index={index}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceList;
