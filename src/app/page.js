/** @format */

import Benefits from "./components/landing/Benefits";
import Hero from "./components/landing/Hero";
import ScrollAnimation from "./components/ScrollAnimation";

export default function Home() {
  return (
    <div className="items-center flex flex-col gap-20">
      <Hero />
      <Benefits/>
      <ScrollAnimation/>
      <Benefits/>
    </div>
  );
}