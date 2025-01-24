/** @format */
"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import logo from "../../../public/images/logo.png";
import Link from "next/link";
import ButtonComponent from "./ButtonComponent";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Solutions", link: "/solutions" },
    { name: "Projects", link: "/projects" },
    { name: "Contact us", link: "/contactUs" },
    { name: "FAQs", link: "/faq" },
  ];

  return (
    <div
      className={`fixed z-50 w-full max-w-7xl mt-10 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-32"
      }`}>
      <nav className="flex items-center mx-auto bg-[#D8E4D3] border py-1 px-10 rounded-lg justify-between">
        <Link href={"/"} className="cursor-pointer">
          <Image src={logo} width={80} height={80} alt="logo" />
        </Link>
        <ul className="flex gap-8">
          {navLinks.map((navItem, index) => (
            <Link href={navItem.link} key={index}>
              <li className="h-6 text-center group">
                <p className="">{navItem.name}</p>
                <hr className="rounded-full opacity-70 border-[#1d4d14] w-0 group-hover:w-full group-hover:border transition-all duration-300" />
              </li>
            </Link>
          ))}
        </ul>
        <Link href={"/calculator"}>
          <ButtonComponent
            variant={"green_primary"}
            icon={"circleArrow"}
            size={"sm"}>
            Solar Calculator
          </ButtonComponent>
        </Link>
      </nav>
    </div>
  );
}
