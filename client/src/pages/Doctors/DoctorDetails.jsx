/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { doctors } from "../../assets/data/doctors";

const DoctorDetails = () => {
  const [doctor, setDoctor] = useState(null);
  const [tab, setTab] = useState("about");

  const { id } = useParams();

  useEffect(() => {
    const fetchDoctorData = () => {
      const doctorData = doctors.find((doc) => doc.id === id);
      setDoctor(doctorData);
    };

    fetchDoctorData();
  }, [id]);

  if (!doctor) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="container">
        <div className="card max-w-xl lg:max-w-3xl bg-base-100 shadow-xl my-12">
          <figure>
            <img src={doctor.photo} alt="doctors photo" />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <h2 className="card-title">{doctor.name}</h2>
                <p className="font-medium" style={{color:doctor.bgColor}}>{doctor.specialization}</p>
                <p >{doctor.hospital}</p>
              </div>
              <div>
                <p className="font-medium" style={{color:doctor.bgColor}}>{doctor.totalPatients} Patients</p>
                <p className="flex items-center">
                  <FaStar fill="#f0d805" style={{marginRight:5}} />{" "}
                  {doctor.avgRating} {"("}<span>{doctor.totalRating}{")"}</span>
                </p>
              </div>
             
            </div>
            
            <div className="card-actions justify-end mb-0">
              <button className="btn btn-primary">Book An Appointment</button>
            </div>
          </div>

            {/* tab display */}
        <div className="flex justify-start space-x-4 mx-4 mt-0 mb-4">
          <button onClick={() => setTab("about")}>
        {
          tab === 'about' ? (
            <h2 className="border-b-2 border-b-textColor text-lg font-medium">About</h2>
          ) : (
            <h2 className="border-b-2 border-b-transparent text-lg font-medium">About</h2>
          )
        }
          </button>
          <button onClick={() => setTab("feedback")}>
          {
          tab === 'feedback' ? (
            <h2 className="border-b-2 border-b-textColor text-lg font-medium">Feedback</h2>
          ) : (
            <h2 className="border-b-2 border-b-transparent text-lg font-medium">Feedback</h2>
          )
        }
          </button>
        </div>

        </div>

      
      </div>
    </>
  );
};

export default DoctorDetails;

//  id: "03",
//   batchColor: "#ff0",
//   bgColor: "#1fe7d7",
//   name: "Dr. Farid Uddin",
//   specialization: "Dermatologist",
//   avgRating: 4.9,
//   totalRating: 483,
//   photo: doctorImg03,
//   totalPatients: 4000,
//   hospital: "Medical Collage, Khulna",
