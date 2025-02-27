
import DoctorsCard from '../../components/Doctors/DoctorsCard';
import Testimonial from '../../components/Testimonial/Testimonial';


const Doctors = () => {
  // const [items, setItems] = useState({});
  
  // useEffect(() =>{
  //   setItems(doctors);
  //   console.log(items)
  // },[])
  return (
    <>
      <section className="bg-[#fff9ee]">
        <div className="container text-center">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading">Find a Doctor</h2>
          </div>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input 
            type="search" 
            className="py-4 pl-4 pt-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor" 
            placeholder="Search Button"
            />
            <button className="btn mt-0 rounded-[0px] rounded-r-md bg-primaryColor text-white hover:bg-primaryColor">
              Search
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
           
            <DoctorsCard />
          </div>
          <Testimonial/>
        </div>
      </section>
    </>
  );
};

export default Doctors;
