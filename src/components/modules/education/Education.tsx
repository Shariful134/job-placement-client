import { TextAnimate } from "@/components/magicui/text-animate";
import style from "./Education.module.css";

const Education = () => {
  return (
    <div className="bg-[#020817] ">
      <div className={`${style.iamgeSetup2}`}>
        <div className="container mx-auto px-4 py-10">
          <TextAnimate
            className="text-purple-400 text-3xl md:text-5xl  my-12"
            animation="blurInUp"
            by="character"
            once
          >
            Education & Training
          </TextAnimate>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="border-l-4 border-purple-500 pl-6 relative before:absolute before:top-0 before:left-[-10px] before:bg-purple-500 before:w-4 before:h-4 before:rounded-full">
              <h3 className="text-purple-400 text-xl md:text-2xl mb-2">
                Textile Diploma
              </h3>
              <p className="text-gray-300 mb-1">
                <span className="font-semibold text-purple-300">
                  Institute:
                </span>{" "}
                Barishal Textile Institute, Gournadi, Barishal
              </p>
              <p className="text-gray-300 mb-1">
                <span className="font-semibold text-purple-300">Year:</span>{" "}
                2021 - 2025
              </p>
              <p className="text-gray-300">
                <span className="font-semibold text-purple-300">CGPA:</span>{" "}
                3.34 / 4.00
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-6 relative before:absolute before:top-0 before:left-[-10px] before:bg-purple-500 before:w-4 before:h-4 before:rounded-full">
              <h3 className="text-purple-400 text-xl md:text-2xl mb-2">
                Higher Secondary Certificate
              </h3>
              <p className="text-gray-300 mb-1">
                <span className="font-semibold text-purple-300">
                  Institute:
                </span>{" "}
                Tangail College, Tangail
              </p>
              <p className="text-gray-300 mb-1">
                <span className="font-semibold text-purple-300">Year:</span>{" "}
                2020 - 2022
              </p>
              <p className="text-gray-300">
                <span className="font-semibold text-purple-300">GPA:</span> 4.14
                / 5.00
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-6 relative before:absolute before:top-0 before:left-[-10px] before:bg-purple-500 before:w-4 before:h-4 before:rounded-full">
              <h3 className="text-purple-400 text-xl md:text-2xl mb-4">
                Courses
              </h3>

              <div className="mb-4">
                <p className="text-gray-300">
                  <span className="font-semibold text-purple-300">Course:</span>{" "}
                  Complete Web Development
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold text-purple-300">
                    Institute:
                  </span>{" "}
                  Programming Hero
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold text-purple-300">Year:</span>{" "}
                  2023 - 2024
                </p>
              </div>

              <div>
                <p className="text-gray-300">
                  <span className="font-semibold text-purple-300">Course:</span>{" "}
                  Next Level Web Development
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold text-purple-300">
                    Institute:
                  </span>{" "}
                  Programming Hero
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold text-purple-300">Year:</span>{" "}
                  2024 - 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
