import { Link } from "react-router-dom";
import featureImg from "../../assets/images/feature-img.png";
import videoIcon from "../../assets/images/video-icon.png";

const Features = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* ======= feature content ===== */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get Our Virtual Treatment <br /> Anytime.
              </h2>
              <ol className="pt-4 mb-4">
                <li className="text__para">
                  1. Schedule the appointment directly.
                </li>
                <li className="text__para">
                  2. Search for your physician here, and contact their office.
                </li>
                <li className="text__para">
                  3. Receive a virtual appointment link and video call.
                </li>
              </ol>
              <Link to="/">
                <button className="button mt-4">Learn More</button>
              </Link>
            </div>

            {/* ======= feature image ===== */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />

              <div className="absolute w-[150px] lg:w-[248px] bg-white bottom-[58px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] font-semibold lg:leading-5 text-headingColor">
                      Tue, 25
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] font-normal lg:leading-5 text-headingColor">
                      10:00AM
                    </p>
                  </div>

                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-9">
                    <img src={videoIcon} alt="" className="max-w-[18px]" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
