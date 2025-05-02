import { BoxReveal } from "@/components/magicui/box-reveal";
import { Button } from "@/components/ui/button";
import style from "./About.module.css";
export function About() {
  return (
    <div className={`${style.iamgeSetup}`}>
      <div className="container mx-auto px-5 text-center  h-[60vh]  size-full max-w-7xl items-center justify-center overflow-hidden pt-8">
        <div className=" flex flex-col items-center ">
          <BoxReveal boxColor={"#AD46FF"} duration={0.5}>
            <h2 className="text-purple-400 pt-8 md:pt-15 pb-5 text-2xl md:text-5xl">
              About Me
            </h2>
          </BoxReveal>
          <BoxReveal boxColor={"#AD46FF"} duration={0.5}>
            <p className="text-lg text-gray-300 text-center max-w-2xl">
              I am a dedicated Full Stack Developer with nearly 3 years of
              experience in coding and learning modern web technologies. Over
              the years, coding has grown from a skill into a true passion for
              me. I find joy in solving problems, building meaningful projects,
              and continuously pushing myself to improve.
            </p>
          </BoxReveal>

          <BoxReveal boxColor={"#AD46FF"} duration={0.5}>
            <p className="text-md text-gray-300 text-center max-w-2xl">
              As a motivated learner and a proud student of Programming Hero,
              I’m constantly sharpening my development skills and keeping up
              with industry trends. I thrive in collaborative environments and
              enjoy turning ideas into scalable digital solutions.
            </p>
          </BoxReveal>

          <BoxReveal boxColor={"#AD46FF"} duration={0.5}>
            <Button className="mt-[1.6rem] bg-purple-500 hover:bg-purple-600">
              Explore
            </Button>
          </BoxReveal>
        </div>
      </div>
    </div>
  );
}
