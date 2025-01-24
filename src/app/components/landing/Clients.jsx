/** @format */

import React from "react";
import ButtonComponent from "../ButtonComponent";
import longi from "../../../../public/images/longi.png";
import jinko from "../../../../public/images/jinko.png";
import goodwe from "../../../../public/images/goodwe.png";
import growatt from "../../../../public/images/growatt.png";
import huawei from "../../../../public/images/huawei.png";
import fimer from "../../../../public/images/fimer.png";
import Image from "next/image";
import Marquee from "@/components/ui/marquee";

export default function Clients() {
  const clientArray = [longi, jinko, goodwe, growatt, huawei, fimer];
  return (
    <div className=" w-full items-center flex flex-col">
      {/* title */}
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-7xl font-semibold">Lorem ipsum dolor sit amet.</h1>
        <p className="text-2xl mb-10">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <ButtonComponent variant={"green_primary"} icon={"circleArrow"}>
          Calculator
        </ButtonComponent>
      </div>
      {/* Horizontal marquee */}
      <div className="flex w-full mt-16">
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {clientArray.map((logo, index) => (
            <div key={index} className="relative w-32 h-32 ml-28">
              <Image
                src={logo}
                alt="client logo"
                layout="fill" // Makes the image fill its parent container
                objectFit="contain" // Ensures the aspect ratio is maintained
                className="cursor-pointer"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
