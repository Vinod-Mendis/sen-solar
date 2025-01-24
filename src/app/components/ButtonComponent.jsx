/** @format */
"use client";

import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import map_icon from "../../../public/icons/map-pin.svg";
import circleArrowGreen from "../../../public/icons/circleArrowGreen.svg";
import circleArrowWhite from "../../../public/icons/circleArrowWhite.svg";
import arrow from "../../../public/icons/arrow.svg";
import download from "../../../public/icons/download.svg";

export default function ButtonComponent({
  variant,
  icon,
  size,
  onClickFn,
  children,
}) {
  const click = () => {
    console.log("clicked");
  };

  const icons = {
    location: map_icon,
    circleArrow:
      variant === "green_primary" || "white_outline"  ? circleArrowWhite : circleArrowGreen,
    arrow: arrow,
    download: download,
  };

  const iconVariant = icons[icon];

  return (
    <>
      <Button variant={variant} onClick={click} size={size}>
        {children}
        {iconVariant && (
          <Image src={iconVariant} width={22} height={22} alt="map-pin" />
        )}
      </Button>
    </>
  );
}
