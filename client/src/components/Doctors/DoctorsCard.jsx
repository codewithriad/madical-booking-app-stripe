import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { doctors } from "../../assets/data/doctors";

const DoctorsCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(doctors);
  }, []);
  return (
    <>
      {data.map((doctor, index) => (
        <div
          className="card bg-base-100 w-[25rem] sm:w-[20rem] shadow-xl mb-6"
          key={index}
        >
          <figure>
            <img src={doctor.photo} className="w-full" alt="Shoes" />
          </figure>
          <div className="card-body px-6">
            <h2 className="card-title" style={{ color: doctor.bgColor }}>
              {doctor.name}
            </h2>

            <div className="flex justify-between items-center w-full">
              <div className="flex justify-center items-center ">
                <p
                  className="px-3 py-2 rounded-md text-lg font-medium"
                  style={{
                    color: doctor.batchColor,
                    backgroundColor: doctor.bgColor,
                  }}
                >
                  {doctor.specialization}
                </p>
              </div>
              <div className="flex justify-between items-center gap-2">
                <FaStar fill="#f0d805" />
                <p>{doctor.avgRating}</p>
                <p>({doctor.totalRating})</p>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <p className="font-medium text-base leading-7">
                  <span style={{color: doctor.bgColor}}>{doctor.totalPatients} </span> of Patients
                </p>

                <p className="text-base leading-7 text-textColor font-normal">
                  {doctor.hospital}
                </p>
              </div>

              <Link
                to={`/doctors/${doctor.id}`}
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:text-white hover:border-none"
              >
                <BsArrowRight />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DoctorsCard;

// id: "03",
// batchColor: "#ff0",
// bgColor: "#1fe7d7",
// name: "Dr. Farid Uddin",
// specialization: "Dermatologist",
// avgRating: 4.9,
// totalRating: 483,
// photo: doctorImg03,
// totalPatients: 4000,
// hospital: "Medical Collage, Khulna",
