/** @format */
import Calculator from "./Calculator";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import solarPanel from "../../../public/images/solarPanel.png";

export default function page() {
  return (
    <div className="pt-40 w-full max-w-7xl mx-auto">
      <div className="text-center">
        <h1 className="text-[80px] font-semibold">
          Lorem ipsum dolor sit amet.
        </h1>
        <p className="text-2xl">Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <Calculator />
      <Card className="bg-[#F9F9F9] p-10 mt-10">
        <CardContent className="pt-6 grid grid-cols-2 items-center">
          {/* col 1 */}
          <div className="">
            <Image
              src={solarPanel}
              width={"auto"}
              height={"auto"}
              alt="solar-panel-product"
            />
          </div>
          {/* col 2 */}
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl font-semibold">Lorem ipsum</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p className="text-4xl mt-3">000,000</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
