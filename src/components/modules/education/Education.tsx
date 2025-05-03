import { BoxReveal } from "@/components/magicui/box-reveal";
import style from "./Education.module.css";

const Education = () => {
  return (
    <div className="bg-[#020817] ">
      <div className={`${style.iamgeSetup2}`}>
        <div className="container mx-auto px-4 flex flex-col xl:flex-row justify-between">
          <div>
            <BoxReveal boxColor="#AD46FF" duration={0.5}>
              <h2 className="text-purple-400 pt-8 md:pt-16 pb-6 text-2xl md:text-5xl font-bold">
                Educational Qualifications
              </h2>
            </BoxReveal>

            {/* Diploma Section */}
            <BoxReveal boxColor="#AD46FF" duration={0.5}>
              <div className="border-l-4 border-purple-500 pl-4 mb-8">
                <h3 className="text-xl md:text-2xl text-purple-300 font-semibold">
                  Diploma in Engineering
                  <span className="text-sm text-gray-400 ml-2">
                    (Textile Technology)
                  </span>
                </h3>
                <p className="text-gray-300 mt-2">
                  <span className="text-purple-400 font-medium">
                    Institution:
                  </span>{" "}
                  Barishal Textile Institute, Gournadi, Barishal
                </p>
                <p className="text-gray-300 mt-1">
                  <span className="text-purple-400 font-medium">CGPA:</span>{" "}
                  3.23 / 4.00
                </p>
                <p className="text-gray-300 mt-1">
                  <span className="text-purple-400 font-medium">
                    Year of Completion:
                  </span>{" "}
                  2025
                </p>
              </div>
            </BoxReveal>

            {/* HSC Section */}
            <BoxReveal boxColor="#AD46FF" duration={0.5}>
              <div className="border-l-4 border-purple-500 pl-4 mb-8">
                <h3 className="text-xl md:text-2xl text-purple-300 font-semibold">
                  Higher Secondary Certificate (HSC)
                  <span className="text-sm text-gray-400 ml-2">
                    (Humanities)
                  </span>
                </h3>
                <p className="text-gray-300 mt-2">
                  <span className="text-purple-400 font-medium">
                    Institution:
                  </span>{" "}
                  Tangail College, Tangail
                </p>
                <p className="text-gray-300 mt-1">
                  <span className="text-purple-400 font-medium">GPA:</span> 4.14
                  / 5.00
                </p>
                <p className="text-gray-300 mt-1">
                  <span className="text-purple-400 font-medium">
                    Year of Completion:
                  </span>{" "}
                  2021
                </p>
              </div>
            </BoxReveal>
          </div>

          <div>
            <BoxReveal boxColor="#AD46FF" duration={0.5}>
              <h2 className="text-purple-400 pt-8 md:pt-16 pb-6 text-2xl md:text-5xl font-bold">
                Courses
              </h2>
            </BoxReveal>
            <BoxReveal boxColor="#AD46FF" duration={0.5}>
              <div className="border-l-4 border-purple-500 pl-4 mb-8">
                <h3 className="text-xl md:text-2xl text-purple-300 font-semibold">
                  Complete Web Development
                  <span className="text-sm text-gray-400 ml-2">(level-1)</span>
                </h3>
                <p className="text-gray-300 mt-2">
                  <span className="text-purple-400 font-medium">
                    Institution:
                  </span>{" "}
                  Programming Hero
                </p>

                <p className="text-gray-300 mt-1">
                  <span className="text-purple-400 font-medium">
                    Year of Completion:
                  </span>{" "}
                  2023
                </p>
              </div>
            </BoxReveal>
            <BoxReveal boxColor="#AD46FF" duration={0.5}>
              <div className="border-l-4 border-purple-500 pl-4 mb-8">
                <h3 className="text-xl md:text-2xl text-purple-300 font-semibold">
                  Next Level Web Development
                  <span className="text-sm text-gray-400 ml-2">(level-2)</span>
                </h3>
                <p className="text-gray-300 mt-2">
                  <span className="text-purple-400 font-medium">
                    Institution:
                  </span>{" "}
                  Programming Hero
                </p>

                <p className="text-gray-300 mt-1">
                  <span className="text-purple-400 font-medium">
                    Year of Completion:
                  </span>{" "}
                  2025
                </p>
              </div>
            </BoxReveal>
            <BoxReveal boxColor="#AD46FF" duration={0.5}>
              <div className="border-l-4 border-purple-500 pl-4 mb-8">
                <h3 className="text-xl md:text-2xl text-purple-300 font-semibold">
                  IELTS
                  <span className="text-sm text-gray-400 ml-2">
                    (Bornil Academy)
                  </span>
                </h3>
                <p className="text-gray-300 mt-2">
                  <span className="text-purple-400 font-medium">
                    Institution:
                  </span>{" "}
                  Bornil Academy,Dhaka
                </p>

                <p className="text-gray-300 mt-1">
                  <span className="text-purple-400 font-medium">Running:</span>{" "}
                  2025
                </p>
              </div>
            </BoxReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
