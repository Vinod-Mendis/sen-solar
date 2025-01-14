/** @format */

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import ButtonComponent from "../ButtonComponent";
import HeroCard from "../HeroCard";

export default function Hero() {
  return (
    <div className="mt-40 w-full flex gap-8">
      {/* 1st col */}
      <Card className="h-[684px] bg-[url('/images/heroCardBg.png')] bg-no-repeat bg-cover px-4">
        <CardHeader>
          <CardTitle className="text-7xl leading-tight text-white font-bold mt-2">
            Empowering
            <br />
            Sri Lanka{" "}
          </CardTitle>
          <CardTitle className="text-7xl leading-tight text-[#FCCD2A] font-bold">
            with Clean
            <br />
            Energy{" "}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-xl text-white font-light leading-tight">
            Sen Solar creates custom solar solutions for homes and businesses,
            tailored to your needs. Reduce costs or go green with our efficient,
            high-quality systems. Harness the power of the sun with us
          </CardDescription>
        </CardContent>
        <CardFooter className="flex gap-4 mt-10">
          <ButtonComponent variant={"green_primary"} icon={"circleArrow"}>
            Get a free Quote
          </ButtonComponent>
          <ButtonComponent variant={"white_outline"}>
            Learn More
          </ButtonComponent>
        </CardFooter>
      </Card>
      {/* 2nd col */}
      <div className="flex flex-col gap-8">
        <div className="flex gap-8">
          <HeroCard variant={"light"} />
          <Card className="bg-[url('/images/heroImg1.png')] bg-no-repeat bg-cover w-72 h-[326px]" />
        </div>
        <div className="flex gap-8">
          <Card className="bg-[url('/images/heroImg2.png')] bg-no-repeat bg-cover w-72 h-[326px]" />
          <HeroCard variant={"dark"} />
        </div>
      </div>
    </div>
  );
}
