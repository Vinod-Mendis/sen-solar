/** @format */

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";

export default function ({icon, title, description }) {
  return (
    <Card className="bg-[#E8E8E8] w-72 h-60">
      <CardHeader className="space-y-4">
        <div className={`bg-[#347928] p-3 w-fit rounded-full`}>
          <Image src={icon} width={20} height={25} alt="icon" />
        </div>
        <CardTitle className={`text-2xl leading-tight`}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-[#1E1E1E] font-light leading-tight">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
