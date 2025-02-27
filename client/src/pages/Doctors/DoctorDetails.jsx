/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doctors } from "../../assets/data/doctors";

const DoctorDetails = () => {
  const [doctor, setDoctor] = useState(null);

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
        <div className="card lg:card-side max-w-lg bg-base-100 shadow-xl my-12">
          <figure>
            <img src={doctor.photo} alt="doctors photo" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{doctor.name}</h2>
            <p>{doctor.hospital}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDetails;
