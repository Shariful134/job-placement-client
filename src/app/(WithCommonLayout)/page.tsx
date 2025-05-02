import { About } from "@/components/modules/home/About";
import Banner from "@/components/modules/home/Banner";
import { MarqueeDemo } from "@/components/modules/home/Marquee";
import Skils from "@/components/modules/home/Skils";
export default function page() {
  return (
    <div>
      <Banner></Banner>
      <div className="hidden md:block">
        <MarqueeDemo></MarqueeDemo>
      </div>
      <About></About>
      <Skils></Skils>
    </div>
  );
}
