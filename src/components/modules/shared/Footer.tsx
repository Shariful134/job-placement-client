import { PhoneCall } from "lucide-react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#020817]">
      <footer className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:items-center md:justify-center text-neutral-content space-y-6">
          <h6 className="footer-title text-start md:text-center ">Contact</h6>

          <div className="text-lg text-gray-300 flex items-center gap-5">
            <span className="text-purple-400">
              <PhoneCall className="text-3xl" />
            </span>
            <span>+8801797579562, +8801762370111</span>
          </div>

          <div className="text-lg text-gray-300 flex  items-center gap-5">
            <span className="text-purple-400">
              <FaLinkedin className="text-3xl" />
            </span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300 text-base text-start md:text-center w-64 break-words"
              href="https://www.linkedin.com/in/shariful-islam-316895264/"
            >
              https://www.linkedin.com/in/shariful-islam-316895264/
            </a>
          </div>

          <div className="text-lg text-gray-300 flex items-center gap-5">
            <span className="text-purple-400">
              <FaWhatsapp className="text-3xl" />
            </span>
            <span>+8801762370111</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
