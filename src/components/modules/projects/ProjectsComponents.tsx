"use client";

import style from "./Project.module.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const ProjectsComponents = () => {
  return (
    <div className={`${style.iamgeSetup} `}>
      <div className="container mx-auto px-2 pb-10 w-screen overflow-x-hidden">
        <div className="">
          <h2 className="text-purple-400 text-2xl md:text-5xl py-5">
            All Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
            <div>
              <h2 className="text-purple-400 text-xl md:text-3xl pb-3 ">
                Project-1<small className="text-sm">(FullStack)</small>
              </h2>

              <p className="text-lg text-gray-300 max-w-xl">
                <span className="text-purple-400">Live Link:</span>{" "}
                <a
                  className="text-base"
                  href="https://tutorlink-client-side.vercel.app/"
                >
                  https://tutorlink-client-side.vercel.app/
                </a>
              </p>
              <p className="text-lg text-gray-300  max-w-xl">
                <span className="text-purple-400">Github ForntEnd:</span>{" "}
                <a
                  className="text-base"
                  href="https://github.com/Shariful134/portfolio-tutorlink-client"
                >
                  https://github.com/Shariful134/portfolio-tutorlink-client
                </a>
              </p>

              <p className="text-lg text-gray-300  max-w-xl">
                <span className="text-purple-400">Github BackEnd:</span>{" "}
                <a
                  className="text-base"
                  href="https://github.com/Shariful134/portfolio-tutorlink-server"
                >
                  {" "}
                  https://github.com/Shariful134/portfolio-tutorlink-server
                </a>
              </p>
              <Link href="/project1">
                <Button className=" mt-5 bg-purple-500 hover:bg-purple-600 cursor-pointer">
                  Details
                </Button>
              </Link>
            </div>
            {/* ========================project-2==================================== */}
            <div>
              <h2 className="text-purple-400 text-xl md:text-3xl pb-3 ">
                Project-2<small className="text-sm">(FullStack)</small>
              </h2>

              <p className="text-lg text-gray-300 max-w-xl">
                <span className="text-purple-400">Live Link:</span>{" "}
                <a
                  target="_blank"
                  className="text-base"
                  href=" https://job-placement-client-3.vercel.app/"
                >
                  https://job-placement-client-3.vercel.app/
                </a>
              </p>
              <p className="text-lg text-gray-300  max-w-lg">
                <span className="text-purple-400">Github Backend:</span>{" "}
                <a
                  target="_blank"
                  className="text-base"
                  href=" https://github.com/Shariful134/job-placement-client-3"
                >
                  https://github.com/Shariful134/job-placement-client-3
                </a>
              </p>

              <p className="text-lg text-gray-300  max-w-xl">
                <span className="text-purple-400">Github BackEnd:</span>{" "}
                <a
                  target="_blank"
                  className="text-base"
                  href=" https://github.com/Shariful134/job-placement-server-3"
                >
                  {" "}
                  https://github.com/Shariful134/job-placement-server-3
                </a>
              </p>
              <Link href="/project2">
                <Button className=" mt-5 bg-purple-500 hover:bg-purple-600 cursor-pointer">
                  Details
                </Button>
              </Link>
            </div>
          </div>
          {/* ================project-3====================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10  mt-10">
            <div>
              <h2 className="text-purple-400 text-xl md:text-3xl pb-3 ">
                Project-3<small className="text-sm">(BackEnd)</small>
              </h2>

              <p className="text-lg text-gray-300  max-w-xl">
                <span className="text-purple-400">Live BackEnd:</span>{" "}
                <a
                  className="text-base"
                  href="https://complete-assignment-3-blog-ph.vercel.app/"
                >
                  {" "}
                  https://complete-assignment-3-blog-ph.vercel.app/
                </a>
              </p>
              <p className="text-lg text-gray-300  max-w-lg">
                <span className="text-purple-400">Github BackEnd:</span>{" "}
                <a
                  className="text-[13px]"
                  href="https://github.com/Shariful134/Assignment-3-PH-Blog"
                >
                  {" "}
                  https://github.com/Shariful134/Assignment-3-PH-Blog
                </a>
              </p>

              <p className="text-base text-gray-300  max-w-xl">
                <span className="text-purple-400">Admine Email:</span>{" "}
                Shariful324@gmail.com
              </p>
              <p className="text-lg text-gray-300  max-w-2xl">
                <span className="text-purple-400">Admine Password:</span>{" "}
                Shariful02#J%
              </p>
              <Link href="/project3">
                <Button className=" mt-5 bg-purple-500 hover:bg-purple-600 cursor-pointer">
                  Details
                </Button>
              </Link>
            </div>
            {/* ========================project-4==================================== */}
            <div>
              <h2 className="text-purple-400 text-xl md:text-3xl pb-3 ">
                Project-4<small className="text-sm">(Backend)</small>
              </h2>

              <p className="text-lg text-gray-300 max-w-xl">
                <span className="text-purple-400">Live Link:</span>{" "}
                <a
                  className="text-base"
                  href="assignment2-project-nine.vercel.app"
                >
                  assignment2-project-nine.vercel.app
                </a>
              </p>
              <p className=" text-gray-300  max-w-xl">
                <span className="text-purple-400">Github Backend:</span>{" "}
                <a
                  className="text-[13px]"
                  href="https://github.com/Shariful134/Assignment-2-project"
                >
                  https://github.com/Shariful134/Assignment-2-project
                </a>
              </p>

              <Button className=" mt-5 bg-purple-500 hover:bg-purple-600 cursor-pointer">
                Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponents;
