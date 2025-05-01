import Banner from "@/components/modules/home/Banner";
import { MarqueeDemo } from "@/components/modules/home/Marquee";
export default function page() {
  return (
    <div>
      <Banner></Banner>
      <div className="hidden md:block">
        <MarqueeDemo></MarqueeDemo>
      </div>
    </div>
  );
}
