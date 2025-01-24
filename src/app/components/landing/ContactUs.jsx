/** @format */

import ContactCards from "../ContactCards";
import ContactForm from "../ContactForm";
import Socials from "../Socials";

export default function ContactUs() {
  return (
    <div className="bg-[url('/images/greenBg.png')] w-full flex items-center justify-center py-20">
      <div className="flex flex-col items-center gap-12 max-w-7xl">
        <div className="flex flex-col text-center mb-4">
          <h1 className="text-[80px] font-semibold text-white">
            Get in
            <span className="text-[#347928]"> Touch </span>
            with
            <span className="text-[#347928]"> Sen Solar</span>
          </h1>
          <p className="text-2xl font-light text-white">
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
