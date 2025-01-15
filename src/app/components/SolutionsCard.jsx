/** @format */

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import arrow from "../../../public/icons/arrowUpRight.svg";

export default function SolutionsCard({ title, desrcription }) {
  return (
    <Card className="bg-[#347928] w-full text-white max-h-56 relative">
      <CardHeader className="pb-3">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-white text-base font-light">
          {desrcription}
        </CardDescription>
      </CardContent>
      <Image
        src={arrow}
        width={40}
        height={40}
        alt="icon"
        className="absolute bottom-5 right-5"
      />
    </Card>
  );
}
