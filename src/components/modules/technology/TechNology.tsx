import { BoxReveal } from "@/components/magicui/box-reveal";

const Technology = () => {
  return (
    <div className="container mx-auto px-4 flex flex-col xl:flex-row justify-between">
      <div>
        <BoxReveal boxColor="#AD46FF" duration={0.5}>
          <h2 className="text-purple-400 pt-8 md:pt-16 pb-6 text-2xl md:text-5xl font-bold">
            Skils
          </h2>
        </BoxReveal>

        {/* Diploma Section */}
        <BoxReveal boxColor="#AD46FF" duration={0.5}>
          <div className="border-l-4 border-purple-500 pl-4 mb-8">
            <h3 className="text-xl md:text-2xl text-purple-300 font-semibold">
              Languages
            </h3>
            <p className="text-gray-300 mt-2">
              <span className="text-purple-400 font-medium">Programming:</span>{" "}
              Html, Css, JavaScript, TypeScript, C
            </p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4 mb-8">
            <h3 className="text-xl md:text-2xl text-purple-300 font-semibold">
              FrontEnd
            </h3>
            <p className="text-gray-300 mt-2">
              <span className="text-purple-400 font-medium">FrameWork:</span>{" "}
              Shadcn Ui, Ant-Design React, Vite, Redux, Next Js,
            </p>
          </div>
        </BoxReveal>

        {/* HSC Section */}
        <BoxReveal boxColor="#AD46FF" duration={0.5}>
          <div className="border-l-4 border-purple-500 pl-4 mb-8">
            <h3 className="text-xl md:text-2xl text-purple-300 font-semibold">
              BackEnd
            </h3>
            <p className="text-gray-300 mt-2">
              <span className="text-purple-400 font-medium">FrameWork:</span>{" "}
              Node Js, Express Js
            </p>
            <p className="text-gray-300 mt-2">
              <span className="text-purple-400 font-medium">Database:</span>{" "}
              MongoDb, Mongoose
            </p>
            <p className="text-gray-300 mt-2">
              <span className="text-purple-400 font-medium">Validation:</span>{" "}
              Zod, JWT
            </p>
          </div>
        </BoxReveal>
      </div>

      <div>
        <BoxReveal boxColor="#AD46FF" duration={0.5}>
          <h2 className="text-purple-400 pt-8 md:pt-16 pb-6 text-2xl md:text-5xl font-bold">
            I wil be Explored
          </h2>
        </BoxReveal>

        {/* Diploma Section */}
        <BoxReveal boxColor="#AD46FF" duration={0.5}>
          <div className="border-l-4 border-purple-500 pl-4 mb-8">
            <h3 className="text-xl md:text-2xl text-purple-300 font-semibold">
              Languages
            </h3>
            <p className="text-gray-300 mt-2">
              <span className="text-purple-400 font-medium">Programming:</span>{" "}
              C ++, Phython, Java
            </p>
          </div>
        </BoxReveal>

        {/* HSC Section */}
        <BoxReveal boxColor="#AD46FF" duration={0.5}>
          <div className="border-l-4 border-purple-500 pl-4 mb-8">
            <h3 className="text-xl md:text-2xl text-purple-300 font-semibold">
              Backend Technologies
            </h3>

            <p className="text-gray-300 mt-2">
              <span className="text-purple-400 font-medium">Frameworks:</span>{" "}
              Node.js, Express.js
            </p>

            <p className="text-gray-300 mt-2">
              <span className="text-purple-400 font-medium">Databases:</span>{" "}
              PostgreSQL, SQL (RDBMS Concepts)
            </p>

            <p className="text-gray-300 mt-2">
              <span className="text-purple-400 font-medium">
                ORM & API Tools:
              </span>{" "}
              Prisma, GraphQL
            </p>

            <p className="text-gray-300 mt-2">
              <span className="text-purple-400 font-medium">
                Development Tools:
              </span>{" "}
              Vite, Jest
            </p>

            <p className="text-gray-300 mt-2">
              <span className="text-purple-400 font-medium">
                Cloud & DevOps:
              </span>{" "}
              Docker, AWS
            </p>
          </div>
        </BoxReveal>
      </div>
    </div>
  );
};

export default Technology;
