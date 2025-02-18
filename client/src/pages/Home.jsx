import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";

import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import About from "../components/About/About";
import DoctorsList from "../components/Doctors/DoctorsList";
import Faq from "../components/Faq/Faq";
import Features from "../components/Feature/Features";
import ServiceList from "../components/Services/ServiceList";
const Home = () => {
  return (
    <>
      {/* hero section */}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* ================== hero content ============= */}

            <div>
              <div className="lg:w-[578px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-extrabold md:text-[60px] md:leading-[70px]">
                  We help patients live with happy life.
                </h1>
                <p className="text__para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  quis magni, minus quod fugiat quidem, possimus rerum dolorum
                  quia placeat esse autem harum eius labore quaerat perferendis.
                  Fugit, suscipit impedit.
                </p>
                <button className="btn mt-[30px] hover:text-white hover:bg-primaryColor">
                  Request an Appointment
                </button>
              </div>
              {/* ============ hero counter line ============ */}

              <div className="mt-[30px] lg:mt-[70px] flex flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text[44px] lg:leading-[54px] font-bold text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-10px]"></span>
                  <p className="text__para">Years of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text[44px] lg:leading-[54px] font-bold text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-10px]"></span>
                  <p className="text__para">Clinic Location</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text[44px] lg:leading-[54px] font-bold text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-10px]"></span>
                  <p className="text__para">Patients Satisfactions</p>
                </div>
              </div>
            </div>

            {/* ============ hero image ============ */}

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="hero image" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                <img src={heroImg03} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* doctor services section */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="text__para text-center">
              World class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="mt-[30px]">
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon01} alt="" />
                </div>
              </div>
              <h2 className="text-[26px] leading-9 text-headingColor font-bold text-center">
                Find a Doctor
              </h2>
              <p className="text-base leading-7 text-textColor font-normal mt-4 text-center">
                World class care for everyone. Our health system offers
                unmatched, expert health care from the lab and clinic.
              </p>
              <Link
                to="/doctors"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:text-white hover:border-none"
              >
                <BsArrowRight />
              </Link>
            </div>
            <div className="mt-[30px]">
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon02} alt="" />
                </div>
              </div>
              <h2 className="text-[26px] leading-9 text-headingColor font-bold text-center">
                Find a Location
              </h2>
              <p className="text-base leading-7 text-textColor font-normal mt-4 text-center">
                World class care for everyone. Our health system offers
                unmatched, expert health care from the lab and clinic.
              </p>
              <Link
                to="/doctors"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:text-white hover:border-none"
              >
                <BsArrowRight />
              </Link>
            </div>
            <div className="mt-[30px]">
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon03} alt="" />
                </div>
              </div>
              <h2 className="text-[26px] leading-9 text-headingColor font-bold text-center">
                Book Appointment
              </h2>
              <p className="text-base leading-7 text-textColor font-normal mt-4 text-center">
                World class care for everyone. Our health system offers
                unmatched, expert health care from the lab and clinic.
              </p>
              <Link
                to="/doctors"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:text-white hover:border-none"
              >
                <BsArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}

      <About/>

      {/* Services section */}

      <ServiceList />

      {/* Feature Section */} 

      <Features/>

      {/* Our Great doctors */}

      <DoctorsList/>

      {/* Faq section */}

      <Faq/>
    </>
  );
};

export default Home;
