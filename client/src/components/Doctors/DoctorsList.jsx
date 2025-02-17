import DoctorsCard from "./DoctorsCard";

const DoctorsList = () => {
  return (
    <>
      <section>
        <div className="container">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3">
            <DoctorsCard />
          </div>
            
          
        </div>
      </section>
    </>
  );
};

export default DoctorsList;
