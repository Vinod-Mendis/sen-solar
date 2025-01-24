/** @format */
import AboutHero from "./AboutHero";
import Quote from "./Quote";
import VisionMission from "./VisionMission";

export default function page() {
  return (
    <div className="pt-40 flex flex-col gap-20">
      <AboutHero />
      <VisionMission />
      <Quote />
    </div>
  );
}
