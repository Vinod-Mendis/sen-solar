/** @format */

import Image from "next/image";
import React from "react";
import map from "../../../../public/images/map.png";
import ButtonComponent from "../ButtonComponent";

export default function Map() {
  return (
    <div className="w-full bg-[url('/images/greenBg.png')] bg-cover bg-no-repeat py-16">
      <div className="max-w-7xl mx-auto flex gap-10 items-center">
        <div className=" w-full h-[824px] relative">
          <Image
            src={map}
            layout="fill" // Makes the image fill its parent container
            objectFit="contain"
            alt="map"
          />
        </div>
        <div className=" text-white font-semibold flex flex-col gap-6">
          <h1 className="text-6xl leading-tight">
            Igniting Your Journey to
            <span className="text-[#347928]"> Solar Success</span>
          </h1>
          <p className="font-light text-xl mb-4">
            Lorem ipsum dolor sit amet consectetur. Massa tellus quisque
            pulvinar pulvinar. Vitae tristique commodo diam tempus vulputate
            quam urna iaculis.
          </p>
          <ButtonComponent variant={"green_primary"} icon={"circleArrow"}>
            View Our Projects
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
}
