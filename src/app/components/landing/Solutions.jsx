/** @format */

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ButtonComponent from "../ButtonComponent";
import Image from "next/image";
import solutionsImg from "../../../../public/images/solutionsImg.png";
import SolutionsCard from "../SolutionsCard";

export default function Solutions() {
  const cardContent = [
    {
      title: "Get Your Free Consultation",
      descritpion:
        "Discuss your energy needs with experts to find the best solution.",
    },
    {
      title: "Solar System Customization",
      descritpion:
        "Tailor a system to match your energy requirements perfectly.",
    },
    {
      title: "Sign the Agreement",
      descritpion: "Finalize the details and move forward with confidence.",
    },
    {
      title: "Quick installation",
      descritpion:
        "Professional installation completed efficiently and on time.",
    },
    {
      title: "Net Metering Approval",
      descritpion: "We handle the paperwork for seamless integration.",
    },
    { title: "Enjoy", descritpion: "Start saving with sustainable energy!" },
  ];
  return (
    <div className="w-full bg-[url('/images/greenBg.png')] bg-no-repeat bg-cover border-2 border-black text-white">
      <div className="max-w-7xl mx-auto py-20 flex flex-col h-full">
        {/* row 1 */}
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <h1 className="text-6xl font-semibold">
              Make Your <span className="text-[#347928]">Roof </span> Work For
              You
            </h1>
            <p className="text-xl font-light mt-4">
              Lorem ipsum dolor sit amet consectetur. Massa tellus quisque
              pulvinar pulvinar. Vitae tristique commodo diam tempus vulputate
              quam urna iaculis.
            </p>
          </div>
          <div className="flex justify-end">
            <ButtonComponent variant={"white_outline"} icon={"circleArrow"}>
              View Our Solutions
            </ButtonComponent>
          </div>
        </div>
        {/* row 2 */}
        <div className="flex mt-16 gap-5">
          {/* col 1 */}
          <div className="h-full">
            <Card className="bg-[#347928] h-full">
              <CardHeader>
                <CardTitle className="text-white text-3xl">
                  Free Site Inspection & Quotation
                </CardTitle>
                <CardDescription className="text-white font-light text-xl">
                  Our experts visit your site to assess and provide a detailed
                  quote at no cost.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-5">
                <Image
                  src={solutionsImg}
                  className="w-full"
                  alt="solutionsImg"
                />
              </CardContent>
            </Card>
          </div>
          {/* col 2 */}
          <div className="grid grid-cols-2 gap-5">
            {cardContent.map((card, index) => (
              <SolutionsCard
                key={index}
                title={card.title}
                desrcription={card.descritpion}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
