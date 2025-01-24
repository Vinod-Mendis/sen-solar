/** @format */

import Benefits from "./components/landing/Benefits";
import Hero from "./components/landing/Hero";
import HoverSVG from "./components/landing/HoverSVG";
import Map from "./components/landing/Map-Section";
import ScrollAnimation from "./components/ScrollAnimation";
import TestimonialCarousel from "./components/TestimonialCarousel";

export default function Home() {
  return (
    <div className="items-center flex flex-col gap-20">
      <Hero />
      <Benefits/>
      {/* <ScrollAnimation/> */}
      <Map/>
   
  <TestimonialCarousel/>
    </div>
  );
}