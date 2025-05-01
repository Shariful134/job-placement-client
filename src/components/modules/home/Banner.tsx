import Image from "next/image";
import img1 from "../../../app/assests/img/pro1.png";
import img2 from "../../../app/assests/img/img-2.jpg";
import { TextAnimate } from "@/components/magicui/text-animate";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Banner = () => {
  return (
    <div className=" overflow-x-hidden text-white">
      <div className="relative h-[80vh] w-screen text-white ">
        <Image src={img2} priority={true} fill alt="BannerImg"></Image>
        <div className="absolute top-[40%]  left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
          <div className="flex items-center flex-col gap-1">
            <div className="relative w-[220px] h-[220px]">
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-purple-500 animate-spin"></div>

              {/* Static Image in Center */}
              <div className="absolute inset-2 flex items-center justify-center rounded-full overflow-hidden bg-white">
                <Image
                  className="rounded-full"
                  src={img1}
                  width={200}
                  height={200}
                  alt="img1"
                />
              </div>
            </div>

            <TextAnimate
              className="text-purple-400 text-xs md:text-lg lg:text-4xl "
              animation="slideLeft"
              by="character"
            >
              Md.Shariufl islam
            </TextAnimate>
            <TextAnimate
              className="text-white text-xs md:text-lg lg:text-4xl "
              animation="slideLeft"
              by="character"
            >
              Full Stack Developer
            </TextAnimate>
            <TextAnimate
              className="text-purple-400 text-xs md:text-lg lg:text-4xl "
              animation="slideLeft"
              by="character"
            >
              Student of Programming Hero
            </TextAnimate>
            <Button className=" mt-5 bg-purple-600 hover:bg-purple-700 cursor-pointer">
              <Download /> Download CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
