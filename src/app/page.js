/** @format */

import Benefits from "./components/landing/Benefits";
import Hero from "./components/landing/Hero";

export default function Home() {
  return (
    <div className="items-center flex flex-col gap-20">
      <Hero />
      <Benefits/>
    </div>
  );
}
