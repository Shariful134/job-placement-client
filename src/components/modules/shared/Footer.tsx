import { PhoneCall } from "lucide-react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#020817] ">
      <footer className="container mx-auto footer sm:footer-horizontal bg-[#020817] text-neutral-content px-2 py-10">
        <nav>
          <h6 className="footer-title">Contact</h6>
          <p className="text-lg text-gray-300 flex  mb-5 items-center max-w-2xl gap-5">
            <div>
              <span className="text-purple-400">
                {" "}
                <PhoneCall className="text-3xl" />
              </span>{" "}
            </div>
            <div>+8801797579562, +8801762370111</div>
          </p>
          <p className="text-lg text-gray-300 flex mb-5 items-center max-w-2xl gap-5">
            <div>
              <span className="text-purple-400">
                {" "}
                <FaLinkedin className="text-3xl" />
              </span>{" "}
            </div>
            <div className="w-40">
              <a
                className="hover:text-purple-300 text-base"
                href="https://www.linkedin.com/in/shariful-islam-316895264/"
              >
                https://www.linkedin.com/in/shariful-islam-316895264/
              </a>
            </div>
          </p>
          <p className="text-lg text-gray-300 flex mb-5 items-center max-w-2xl gap-5">
            <div>
              <span className="text-purple-400">
                {" "}
                <FaWhatsapp className="text-3xl" />
              </span>{" "}
            </div>
            <div>+8801762370111</div>
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
