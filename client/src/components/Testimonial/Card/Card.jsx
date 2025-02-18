import { MdStar } from "react-icons/md";
import patientAvater from "../../../assets/images/patient-avatar.png";
const Card = () => {
  return (
    <div className="w-[25rem] rounded-xl hover:bg-primaryColor   px-4 py-4 group">
      {/* Card head */}
      <div className="flex items-center justify-start gap-3">
        {/* image */}
        <figure className="w-10 rounded-xl">
          <img src={patientAvater} alt="" />
        </figure>
        {/* name and star */}
        <div className="flex justify-start flex-col">
          <h2 className="text-xl font-normal group-hover:text-white mb-2">Muhibur Rahman</h2>
          <div className="flex gap-2">
            <MdStar fill="#ffbf00" className="w-5 h-5" />
            <MdStar fill="#ffbf00" className="w-5 h-5" />
            <MdStar fill="#ffbf00" className="w-5 h-5" />
            <MdStar fill="#ffbf00" className="w-5 h-5" />
            <MdStar fill="#ffbf00" className="w-5 h-5" />
          </div>
        </div>
      </div>


      {/* Card body */}

      <p className="mt-3 text-slate-600 group-hover:text-white text-lg leading-6">
        &quot;I have taken medical services from then. Now I have reviewed the
        following services. They treat so well to every patient.&quot;
      </p>
    </div>
  );
};

export default Card;
