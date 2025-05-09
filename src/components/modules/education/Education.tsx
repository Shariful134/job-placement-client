import { BoxReveal } from "@/components/magicui/box-reveal";
import style from "./Education.module.css";
import { MdEmail } from "react-icons/md";

const Education = () => {
  return (
    <div className="bg-[#020817] ">
      <div className={`${style.iamgeSetup2} h-[90vh]`}>
        <h2 className="text-5xl text-purple-500 text-center pt-80 font-bold">
          Md.Shariful islam
        </h2>
        <h2 className="text-3xl text-white pt-3 text-center  font-bold">
          Mern Stack Developer
        </h2>

        <div>
          <div className="text-lg text-white pt-3 text-center  font-bold">
            <span className="text-purple-400">Email:</span>{" "}
            shariful32213@gmail.com
          </div>
          <div className="text-lg text-white pt-3 text-center  font-bold">
            <span className="text-purple-400">Mobile:</span> +8801797579562
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
