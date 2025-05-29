import Image from "next/image";
import img1 from "../../../app/assests/img/pro1.png";
import img2 from "../../../app/assests/img/img-2.jpg";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Banner = () => {
  return (
    <div id="banner" className="overflow-x-hidden bg-black text-white">
      <div className="relative max-w-7xl mx-auto h-[60vh] sm:h-[75vh] px-4 sm:px-8">
        {/* Background Image */}
        <Image
          src={img2}
          alt="Banner Background"
          fill
          className="object-cover opacity-20"
          priority
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          {/* Profile Image with animation ring */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-52 lg:h-52 mb-4">
            <div
              className="absolute inset-0 rounded-full border-4 border-dashed border-purple-500"
              style={{ animation: "spin 10s linear infinite" }}
            ></div>
            <div className="absolute inset-2 flex items-center justify-center rounded-full overflow-hidden bg-white">
              <Image
                src={img1}
                alt="Profile"
                width={200}
                height={200}
                className="rounded-full"
              />
            </div>
          </div>

          {/* Name, Email & Title */}
          <TextAnimate
            className="text-purple-400 text-sm sm:text-lg"
            animation="slideLeft"
            by="character"
          >
            shariful32213@gmail.com
          </TextAnimate>

          <TextAnimate
            className="text-purple-400 text-2xl sm:text-4xl font-bold"
            animation="slideLeft"
            by="character"
          >
            Md. Shariful Islam
          </TextAnimate>

          <TextAnimate
            className="text-gray-300 text-base sm:text-2xl font-medium"
            animation="slideLeft"
            by="character"
          >
            Full Stack Developer
          </TextAnimate>

          <TextAnimate
            className="text-purple-400 text-sm sm:text-lg mt-2"
            animation="slideLeft"
            by="character"
          >
            Student of Programming Hero
          </TextAnimate>

          {/* Download CV Button */}
          <a
            href="/cv/CV SHARIFUL ISLAM.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5"
          >
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg flex items-center cursor-pointer gap-2">
              <Download className="w-4 h-4" /> Download CV
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
