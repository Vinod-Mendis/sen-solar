/** @format */

import React from "react";
import ButtonComponent from "./ButtonComponent";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Link from "next/link";
import EmaiInputField from "./EmaiInputField";
import Socials from "./Socials";

export default function FooterComponent() {
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Solutions", link: "/" },
    { name: "Projects", link: "/" },
    { name: "Contact us", link: "/" },
    { name: "FAQs", link: "/" },
  ];
  return (
    <div className="mb-10 mt-20 px-14 py-4 bg-[#163311] h-[628px] rounded-3xl flex flex-col text-white max-w-7xl mx-auto">
      {/* 1st row */}
      <div className="flex justify-between items-center mt-10">
        <h1 className="text-6xl font-semibold">Let`s Connect there</h1>
        <ButtonComponent variant={"green_primary"} icon={"arrow"}>
          Connect
        </ButtonComponent>
      </div>
      <hr className="rounded-full border border-[#475467]/50 mt-14" />
      {/* 2nd row */}
      <div className="flex justify-between mt-6">
        {/* 1st col */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="p-1 bg-[#347928]/15 rounded-2xl">
              <Image src={logo} width={40} height={40} alt="logo" />
            </div>
            <h1 className="text-3xl font-semibold">SEN SOLAR</h1>
          </div>
          <p className="w-[420px] font-light">
            SEN Solar specializes in creating custom solar energy solutions for
            both homes and businesses. We take a personalized approach,
            thoroughly assessing each customer's unique needs to deliver the
            ideal solar system. Whether you're looking to reduce energy costs or
            make an eco-friendly switch, our team is dedicated...
          </p>
          {/* socials */}
          <Socials/>
        </div>
        {/* 2nd col */}
        <div className="">
          <h1 className="text-2xl font-semibold">Navigation</h1>
          <ul className="flex flex-col gap-4 mt-5">
            {navLinks.map((navItem, index) => (
              <Link href={navItem.link} key={index}>
                <li className="font-light">{navItem.name} </li>
              </Link>
            ))}
          </ul>
        </div>
        {/* 3rd col */}
        <div className="">
          <h1 className="text-2xl font-semibold">Contact</h1>
          <ul className="flex flex-col gap-4 mt-5">
            <li className="font-light">+94 &#40;11&#41; 2 19 4350</li>
            <li className="font-light">info@sensolar&#46;biz</li>
          </ul>
        </div>
        {/* 4th col */}
        <div className="">
          <h1 className="text-2xl font-semibold">Get the latest information</h1>
          <EmaiInputField />
        </div>
      </div>
      <hr className="rounded-full border border-[#475467]/50 mt-20" />
      {/* 3rd row */}
      <div className="flex justify-between items-center mt-5 font-light">
        <p>
          Copyright© 2025 <Link href={'/'} className="underline">
          Sen Electrical Technologies (Pvt) Ltd.</Link>&#46; All
          Rights Reserved&#46;
        </p>
        <p className="flex gap-1">
          <Link href={'/'} className="underline">User Terms & Conditions</Link>|
          <Link href={'/'} className="underline">Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
}
