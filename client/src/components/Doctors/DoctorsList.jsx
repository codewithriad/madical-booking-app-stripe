import DoctorsCard from "./DoctorsCard";

const DoctorsList = () => {
  return (
    <>
      <section>
        <div className="container">
          {/* doctor header */}

          <div className="mt-8 mb-12">
            <h2 className="heading text-center">Our Medical Services</h2>
            <p className="text__para text-center w-3/4 mx-auto">
              We have a team of top doctors who specialize in various areas of medicine. We have concern for every patent.</p>
          </div>

          {/* doctor cards imported */}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3">
            <DoctorsCard />
          </div>
            
          
        </div>
      </section>
    </>
  );
};

export default DoctorsList;
