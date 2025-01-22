/** @format */

import Image from "next/image";
import house1 from "../../../public/images/house1.png";
import ButtonComponent from "./ButtonComponent";

export default function SolutionTypeCard({
  variant = "left",
  title,
  category,
  image,
  featuresArray,
}) {
  const isLeft = variant === "left";

  const containerClasses = `
    flex w-full gap-6 max-h-[622px]
    ${isLeft ? "flex-row" : "flex-row-reverse"}
  `;

  const imageWrapperClasses = `
    w-full relative flex
    ${
      isLeft
        ? "items-end justify-end ml-auto"
        : "items-start justify-start mr-auto"
    }
  `;

  const categoryBadgeClasses = `
    bg-[#347928] p-6 px-10 w-fit rounded-3xl absolute bottom-0
    ${isLeft ? "left-0" : "right-0"}
  `;

  const titleClasses = `
    text-6xl font-semibold mt-10
    ${isLeft ? "max-w-[400px]" : "max-w-[500px]"}
  `;

  return (
    <div className={containerClasses}>
      <div className={imageWrapperClasses}>
        <div className="w-[92%]">
          <Image src={image} alt="house1" width={600} height={620} />
        </div>
        <div className={categoryBadgeClasses}>
          <h1 className="max-w-64 justify-center flex items-center text-4xl font-semibold text-white">
            {category}
          </h1>
        </div>
      </div>

      <div className="w-full flex flex-col max-w-[600px] gap-6">
        <h1 className={titleClasses}>{title}</h1>
        <ul className="pl-6 flex flex-col gap-4">
          {featuresArray.map((feature, index) => (
            <li className="list-disc leading-tight" key={index}>
              <span className="font-semibold mr-2">{feature.subtitle}</span>
              {feature.description}
            </li>
          ))}
        </ul>

        <ButtonComponent variant={"green_outline"} icon={"download"}>
          Sample Proposal
        </ButtonComponent>
      </div>
    </div>
  );
}
