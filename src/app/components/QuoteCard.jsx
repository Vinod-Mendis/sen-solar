/** @format */

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import person from "../../../public/images/person.png";
import { Quote } from "lucide-react";

export default function QuoteCard() {
  return (
    <div className="flex flex-col gap-10">
      <div className="w-full">
        <div className="relative flex items-center w-fit">
          <div className="bg-[#D9D9D9] w-fit rounded-full p-3 absolute z-10">
            <Image src={person} alt="team-member" width={200} height={"auto"} />
          </div>
          <Card className="bg-[#347928] max-w-[620px] text-white translate-x-28">
            <CardContent className="pt-6 pb-0 pl-36">
              <Quote className="scale-y-[-1] scale-x-[-1] translate-y-6" />
              <p className="text-2xl indent-10">
                As Chairman, I am proud to see SEN Solar lead the way in
                bringing sustainable energy solutions to Sri Lanka. Our
                commitment to quality and innovation drives us to create a
                future where solar power is accessible to all, empowering homes
                and businesses to embrace a cleaner, greener way of living.
              </p>
              <Quote className="-translate-y-5 translate-x-80" />
            </CardContent>
            <CardFooter className="pl-36">
              <p className="text-xl font-light">
                Mr. L. Senarathna &#40;Chairman&#41;
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="w-full flex flex-end justify-end">
        <div className="relative flex items-center">
          <div className="bg-[#D9D9D9] w-fit rounded-full p-3 absolute right-0 z-10">
            <Image src={person} alt="team-member" width={200} height={"auto"} />
          </div>
          <Card className="bg-[#347928] max-w-[620px] text-white -translate-x-28 pl-4">
            <CardContent className="pt-6 pb-0 pr-32">
              <Quote className="scale-y-[-1] scale-x-[-1] translate-y-6" />
              <p className="text-2xl indent-10">
                As Managing Director, my focus has always been on delivering
                tailored solar solutions that exceed our customers'
                expectations. At SEN Solar, we believe in the power of renewable
                energy to transform lives, and we are dedicated to providing the
                highest level of service, quality, and support on every step of
                this journey.
              </p>
              <Quote className="-translate-y-5 translate-x-24" />
            </CardContent>
            <CardFooter className="pr-32">
              <p className="text-xl font-light">
                Eng. C.S.S. Senarathna &#40;Managing Director&#41;
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
