/** @format */

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import ButtonComponent from "./ButtonComponent";

export default function ProjectCard({ image, description }) {
  return (
    <div className="w-full relative mb-14">
      <div className="absolute left-5 top-5">
        <ButtonComponent variant={"white_outline"} icon={"location"}>
          Location
        </ButtonComponent>
      </div>
      <Image src={image} width={1280} height={"auto"} alt="project-image" />
      <Card className="absolute z-10 right-12 -bottom-16 bg-[#347928] max-w-xl text-left text-white font-light">
        <CardContent className="pt-6">{description}</CardContent>
      </Card>
    </div>
  );
}
