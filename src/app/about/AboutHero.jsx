/** @format */

import Image from "next/image";
import heroImg from "../../../public/images/aboutHeroImg.png";
import Img1 from "../../../public/images/aboutImg1.png";
import Img2 from "../../../public/images/aboutImg2.png";
import slsea from "../../../public/images/slsea.png";
import circleArrow from "../../../public/icons/circleArrowWhite.svg";
import { ArrowDownRight, CircleArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutHero() {
  return (
    <div className="grid grid-cols-2 gap-6 h-[715px] w-full max-w-7xl mx-auto">
      {/* 1st col */}
      <div className="col-span-1 relative">
        <div className=" flex flex-col gap-2 text-6xl w-fit">
          <h1 className="">Welcome to</h1>
          <div className="flex items-end gap-16">
            <h1 className="">SEN Solar,</h1>
            <ArrowDownRight size={60} className="translate-y-3" />
          </div>
        </div>
        <Image src={heroImg} layout="fill" objectFit="contain" alt="hero-img" />
      </div>
      {/* 2nd col */}
      <div className="col-span-1 w-fit flex flex-col gap-6">
        <div className="flex gap-6">
          <Image src={Img1} alt="about-img-1" width={"auto"} height={200} />
          <Image src={Img2} alt="about-img-1" width={"auto"} height={200} />
        </div>
        <Card className="flex bg-[#347928] p-4 px-8 gap-4 relative text-white">
          <CardContent className="p-0">
            <p className="max-w-96 text-xl font-light">
              Where sustainability meets innovation. As a division of SEN
              Electrical Technologies (Pvt) Ltd, we provide custom solar energy
              solutions for homes and businesses across Sri Lanka. In a time
              when the demand for alternative energy is growing rapidly, we are
              here to meet this need with innovative, tailored solar solutions.
            </p>
          </CardContent>
          <CircleArrowRight
            size={80}
            className="rotate-45 absolute bottom-0 right-0 m-6 "
          />
          {/* <Image
            src={circleArrow}
            alt="about-img-1"
            width={"auto"}
            height={200}
          /> */}
        </Card>
        <Card className="bg-[#347928]/15 p-6">
          <CardContent className="flex flex-col gap-4 justify-center items-center p-0">
            <Image src={slsea} alt="about-img-1" width={"auto"} height={130} />
            <p className="text-xl font-light">Registered Number : SLSEASBS00306PV</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
