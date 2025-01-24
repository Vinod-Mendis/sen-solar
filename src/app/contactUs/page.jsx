/** @format */

import ContactCards from "../components/ContactCards";
import ContactForm from "../components/ContactForm";
import Socials from "../components/Socials";

export default function page() {
  return (
    <div className="pt-40 w-full max-w-7xl mx-auto">
      <div className="flex flex-col items-center gap-12 max-w-7xl">
        <div className="flex flex-col text-center mb-4">
          <h1 className="text-[80px] font-semibold text-black">
            Get in
            <span className="text-[#347928]"> Touch </span>
            with
            <span className="text-[#347928]"> Sen Solar</span>
          </h1>
          <p className="text-2xl font-light text-black">
            Let&apos;s Discuss Your Solar Journey
          </p>
        </div>
        <Socials size={"large"} />
        <ContactCards />
        <ContactForm />
      </div>
    </div>
  );
}
