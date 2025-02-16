import { Link } from 'react-router-dom';
import aboutCard from '../../assets/images/about-card.png';
import aboutImage from '../../assets/images/about.png';
const About = () => {
  return (
    <>
      <section>
        <div className="container">
            <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                {/* ========= about image ======== */}
                <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                    <img src={aboutImage} alt="" />
                    <div className='absolute z-10 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
                        <img src={aboutCard} alt="" />
                    </div>
                </div>
                {/* ======== about content ========= */}
                <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                    <h2 className='heading'>Proud to be ome of the nations best</h2>
                    <p className='text__para'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam vitae felis consectetur feugiat. Sed viverra dolor sed nulla sagittis, vel condimentum neque ullamcorper.
                    </p>
                    <p className='text__para mt-[30px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam vitae felis consectetur feugiat. Sed viverra dolor sed nulla sagittis, vel condimentum neque ullamcorper.
                    </p>
                    <Link to='/doctors'>
                        <button className='btn mt-4 hover:text-white hover:bg-primaryColor'>Learn More</button>
                    </Link>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default About;
