/** @format */

import React from "react";
import AccordianComponent from "../AccordianComponent";

export default function FAQ() {
  return (
    <div className="max-w-7xl mx-auto mb-32 w-full flex flex-col gap-16">
      <div className="flex flex-col text-center gap-2">
        <h1 className="text-6xl font-semibold">
          Frequently
          <span className="text-[#347928]"> Asked </span>
          Questions
        </h1>
        <p className="text-2xl">Lorem ipsum dolor sit amet consectetur. </p>
      </div>
      <AccordianComponent />
    </div>
  );
}
