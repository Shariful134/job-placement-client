import style from "./About.module.css";
import { AnimatedBeamMultipleOutputDemo } from "./AnimatedBeam";
const Skils = () => {
  // h-[100vh]
  return (
    <div id="skils" className={`${style.iamgeSetup2}`}>
      <div className="container mx-auto px-2  py-8">
        <div className="grid grid-cols-12 justify-center items-center gap-5 ">
          <div className=" col-span-12 mx-auto lg:col-span-4">
            <div className="flex justify-center items-center md:items-start md:justify-start flex-col md:flex-row gap-5 md:gap-15 ">
              <div>
                <h3 className="text-purple-400 pt-8 md:pt-15 pb-5 text-2xl text-center md:text-start ">
                  Technical Skills:
                </h3>
                <div className="flex gap-5">
                  <ol className="text-gray-300 ps-5">
                    <li className="list-disc">Html</li>
                    <li className="list-disc">Css</li>
                    <li className="list-disc">Bootstrap</li>
                    <li className="list-disc">Tailwind</li>
                    <li className="list-disc">Sass</li>
                    <li className="list-disc">Shadcn</li>
                    <li className="list-disc">React</li>
                  </ol>
                  <ol className="text-gray-300 ps-5">
                    <li className="list-disc">Nextjs</li>
                    <li className="list-disc">Typescript</li>
                    <li className="list-disc">Javascript</li>
                    <li className="list-disc">Mongodb</li>
                    <li className="list-disc">Mongoose</li>
                    <li className="list-disc">Node js</li>
                    <li className="list-disc">Expressjs</li>
                  </ol>
                </div>
              </div>
              <div>
                <h3 className="text-purple-400 pt-8 md:pt-15 pb-5 text-2xl text-center md:text-start ">
                  Soft Skils:
                </h3>
                <div className="flex gap-5">
                  <ol className="text-gray-300 ps-5">
                    <li className="list-disc">Communication</li>
                    <li className="list-disc">Teamwork</li>
                    <li className="list-disc">Time Management</li>
                    <li className="list-disc">Self-Motivation</li>
                    <li className="list-disc">Leadership</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className=" hidden lg:block col-span-8">
            <AnimatedBeamMultipleOutputDemo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skils;
