/** @format */

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import zap from "../../../public/icons/zap.svg";
import dollarSign from "../../../public/icons/dollarSign.svg";

export default function HeroCard({ variant }) {
  const variants = {
    light: {
      card: "bg-[#347928]/15",
      iconBg: "bg-[#163311]",
      icon: zap,
      textColor: "text-[#163311]",
    },
    dark: {
      card: "bg-[#347928]",
      iconBg: "bg-white",
      icon: dollarSign,
      textColor: "text-white",
    },
  };

  const selectedVariant = variants[variant];
  return (
    <Card className={`${selectedVariant.card} w-72 rounded-3xl py-4`}>
      <CardHeader>
        <div className={`${selectedVariant.iconBg} p-3 w-fit rounded-full`}>
          <Image src={selectedVariant.icon} width={20} height={25} alt="icon" />
        </div>
        <CardTitle className={`${selectedVariant.textColor} text-3xl`}>
          Energy Independence
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription
          className={`${selectedVariant.textColor} text-base mt-5 leading-tight`}>
          Enjoy energy security with your own renewable power source, reducing
          dependence on ullilly companies and foosil fuels
        </CardDescription>
      </CardContent>
    </Card>
  );
}
