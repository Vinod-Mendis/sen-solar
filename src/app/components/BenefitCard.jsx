/** @format */

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import shieldCheck from "../../../public/icons/shieldCheck.svg";
import handshake from "../../../public/icons/handshake.svg";
import fileBadge from "../../../public/icons/fileBadge.svg";
import wrench from "../../../public/icons/wrench.svg";
import Image from "next/image";

export default function () {
  const cardContent = [
    {
      icon: shieldCheck,
      title: "25+Year Warranty",
      description:
        "Enjoy peace of mind with long-term coverage for your solar system, ensuring durability and performance for decades.",
    },
    {
      icon: handshake,
      title: "Performance Guaranteed",
      description:
        "Get consistent energy output you can count on, backed by our commitment to quality and efficiency.",
    },
    {
      icon: fileBadge,
      title: "Top-Quality Components",
      description:
        "We use only premium materials to build systems that last, delivering maximum value over their lifespan.",
    },
    {
      icon: wrench,
      title: "10+ Years of Experience",
      description:
        "Our expert installers bring over a decade of proven skill to ensure a seamless and reliable installation.",
    },
  ];
  return (
    <Card className="bg-[#E8E8E8] w-72">
      <CardHeader className="space-y-4">
        <div className={`bg-[#347928] p-3 w-fit rounded-full`}>
          <Image src={shieldCheck} width={20} height={25} alt="icon" />
        </div>
        <CardTitle className={`text-2xl`}>25+Year <br/> Warranty</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-[#1E1E1E] font-light leading-tight">
          Enjoy peace of mind with long-term coverage for your solar system,
          ensuring durability and performance for decades.
        </CardDescription>
      </CardContent>
    </Card>
  );
}
