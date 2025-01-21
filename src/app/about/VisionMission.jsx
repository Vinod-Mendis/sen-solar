/** @format */

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import target from "../../../public/icons/target.svg";
import bulb from "../../../public/icons/lightbulb.svg";
import Image from "next/image";

export default function VisionMission() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto">
      {/* our story */}
      <Card className="bg-[url('/images/lightGreenBg.png')] p-2 bg-cover bg-no-repeat text-center text-white">
        <CardHeader>
          <h1 className="text-5xl mt-5">Our Story</h1>
        </CardHeader>
        <CardContent>
          <p className="text-xl font-light">
            Founded in 2013, SEN Solar was built on the vision of harnessing the
            power of the sun as an efficient and renewable energy source. Led by
            the visionary leadership of Mr. L. Senarathna and Eng. C.S.S.
            Senarathna, our company has been a pioneer in the solar industry,
            combining years of expertise with a passion for sustainable energy.
            <br />
            <br />
            We believe in creating a future where every home and business can
            access clean, affordable solar power. With a commitment to quality,
            innovation, and customer satisfaction, SEN Solar is your trusted
            partner in the journey towards a greener tomorrow.
          </p>
        </CardContent>
      </Card>
      {/* vision & mission*/}
      <div className="grid grid-cols-2 gap-6">
        {/* vision */}
        <Card className="bg-[#E8E8E8] p-2">
          <CardHeader>
            <div className="bg-[#347928] w-fit p-5 rounded-full">
              <Image
                src={target}
                width={25}
                height={"auto"}
                alt="target-icon"
              />
            </div>
          </CardHeader>
          <CardContent>
            <h1 className="text-3xl font-semibold mb-4">Our Vision</h1>
            <p className="text-xl font-light">
              To emerge as a pioneer Sri Lanka business enterprises in the filed
              of engineering.
            </p>
          </CardContent>
        </Card>
        {/* mision */}
        <Card className="bg-[#E8E8E8] p-2">
          <CardHeader>
            <div className="bg-[#347928] w-fit p-5 rounded-full">
              <Image src={bulb} width={25} height={"auto"} alt="target-icon" />
            </div>
          </CardHeader>
          <CardContent>
            <h1 className="text-3xl font-semibold mb-4">Our Mision</h1>
            <p className="text-xl font-light">
              Ensuring customer satisfaction by consistently providing quality
              product and services at affordable prices. Introduction innovative
              engineering solutions to the Sri Lanka technology market. Optimize
              financial performance while enhancing the well-being of our team
              and community.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
