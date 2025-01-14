/** @format */

import BenefitCard from "../BenefitCard";
import { Card } from "@/components/ui/card";
import ButtonComponent from "../ButtonComponent";

export default function Benefits() {
  const cardContent = [
    {
      icon: "/icons/shieldCheck.svg",
      title: "25+Year Warranty",
      description:
        "Enjoy peace of mind with long-term coverage for your solar system, ensuring durability and performance for decades.",
    },
    {
      icon: "/icons/handshake.svg",
      title: "Performance Guaranteed",
      description:
        "Get consistent energy output you can count on, backed by our commitment to quality and efficiency.",
    },
    {
      icon: "/icons/fileBadge.svg",
      title: "Top-Quality Components",
      description:
        "We use only premium materials to build systems that last, delivering maximum value over their lifespan.",
    },
    {
      icon: "/icons/wrench.svg",
      title: "10+ Years of Experience",
      description:
        "Our expert installers bring over a decade of proven skill to ensure a seamless and reliable installation.",
    },
  ];
  return (
    <div className="w-full mb-20 mt-10 flex flex-col gap-16 items-center">
      {/* title */}
      <div className="flex flex-col gap-2 text-center items-center">
        <h1 className="text-6xl font-semibold">
          Why <span className="text-[#347928] ">Choose</span> Sen Solar?
        </h1>
        <p className="text-[20px] w-[800px] leading-tight">
          Lorem ipsum dolor sit amet consectetur. Massa tellus quisque pulvinar
          pulvinar. Vitae tristique commodo diam tempus vulputate quam urna
          iaculis.
        </p>
      </div>
      {/* cards */}
      <div className="flex w-full justify-between gap-6">
        {/* col 1 */}
        <div className="flex flex-col">
          <div className="flex flex-col gap-6 justify-between">
            <div className="flex flex-col gap-6 justify-between">
              {cardContent.slice(0, 2).map((card, index) => (
                <BenefitCard
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>

            <Card className="w-72 h-60 bg-[url('/images/benefitsImg2.png')] bg-no-repeat bg-cover"></Card>
          </div>
        </div>
        {/* col 2 */}
        <Card className="w-full bg-[url('/images/benefitsImg1.png')] bg-no-repeat bg-cover"></Card>
        {/* col 3 */}
        <div className="flex flex-col gap-6">
          <Card className="w-72 h-60 bg-[url('/images/benefitsImg3.png')] bg-no-repeat bg-cover"></Card>
          <div className="flex flex-col gap-6 justify-between">
            {cardContent.slice(2, 4).map((card, index) => (
              <BenefitCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
      {/* buttom */}
      <ButtonComponent variant={"green_outline"} icon={"circleArrow"}>
        More About Sen Solar
      </ButtonComponent>
    </div>
  );
}
