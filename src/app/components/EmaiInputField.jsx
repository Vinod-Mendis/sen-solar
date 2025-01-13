/** @format */

import { Input } from "@/components/ui/input";
import React from "react";
import arrowHead from "../../../public/icons/arrowHead.svg";
import Image from "next/image";

export default function EmaiInputField() {
  return (
    <div>
      <form className="flex mt-5">
        <Input
          type={"email"}
          placeholder={"Email Address"}
          className="rounded-r-none"
        />
        <button
          type="submit"
          className="bg-[#347928] px-4 rounded-r-md hover:bg-[#347928]/80 transition">
          <Image src={arrowHead} width={10} height={10} alt="arrow head" />
        </button>
      </form>
    </div>
  );
}
