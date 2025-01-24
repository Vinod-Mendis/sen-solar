/** @format */

import Benefits from "./components/landing/Benefits";
import Clients from "./components/landing/Clients";
import ContactUs from "./components/landing/ContactUs";
import FAQ from "./components/landing/FAQ";
import Hero from "./components/landing/Hero";
import HoverSVG from "./components/landing/HoverSVG";
import Map from "./components/landing/Map-Section";
import Solutions from "./components/landing/Solutions";
import ScrollAnimation from "./components/ScrollAnimation";
import TestimonialCarousel from "./components/TestimonialCarousel";

export default function Home() {
  return (
    <div className="items-center flex flex-col gap-20">
      <Hero />
      <Benefits />
      <ScrollAnimation/>
      <Solutions />
      <Clients />
      <Map />
      <TestimonialCarousel />
      <ContactUs />
      <FAQ />
    </div>
  );
}
