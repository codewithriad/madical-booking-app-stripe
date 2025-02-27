import DoctorsCard from "./DoctorsCard";

const DoctorsList = () => {
  return (
    <>
      <section>
        <div className="container">
          {/* doctor header */}

          <div className="mt-8 mb-12">
            <h2 className="heading text-center">Our Great Doctors</h2>
            <p className="text__para text-center w-3/4 mx-auto">
              World class care for everyone. Our health system offers exclusive
              medical system with expert health care.
            </p>
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
