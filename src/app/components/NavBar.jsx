/** @format */

import Image from "next/image";
import React from "react";
import logo from "../../../public/images/logo.png";
import Link from "next/link";
import ButtonComponent from "./ButtonComponent";

export default function NavBar() {
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Solutions", link: "/" },
    { name: "Projects", link: "/" },
    { name: "Contact us", link: "/" },
    { name: "FAQs", link: "/" },
  ];
  return (
    <div className="fixed z-50 w-full max-w-7xl mt-10">
      <nav className="flex items-center mx-auto bg-[#347928]/20 backdrop-blur-sm border py-1 px-10 rounded-lg justify-between">
        <Link href={"/"} className="cursor-pointer">
          <Image src={logo} width={80} height={80} alt="logo" />
        </Link>
        <ul className="flex gap-8">
          {navLinks.map((navItem, index) => (
            <Link href={navItem.link} key={index}>
              <li className="hover:scale-110 transition">{navItem.name}</li>
            </Link>
          ))}
        </ul>
        <ButtonComponent
          variant={"green_primary"}
          icon={"circleArrow"}
          size={"sm"}>
          Solar Calculator
        </ButtonComponent>
      </nav>
    </div>
  );
}
