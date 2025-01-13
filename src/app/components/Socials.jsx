/** @format */

import Image from "next/image";
import facebook from "../../../public/icons/facebook.svg";
import instagram from "../../../public/icons/instagram.svg";
import linkedin from "../../../public/icons/linkedin.svg";
import youtube from "../../../public/icons/youtube.svg";
import tiktok from "../../../public/icons/tiktok.svg";
import Link from "next/link";

export default function Socials() {
  const socialIcons = [
    { name: "instagram", image: instagram, link: "/" },
    { name: "facebook", image: facebook, link: "/" },
    { name: "linkedin", image: linkedin, link: "/" },
    { name: "youtube", image: youtube, link: "/" },
    { name: "tiktok", image: tiktok, link: "/" },
  ];
  return (
    <div className="flex gap-2">
      {socialIcons.map((icon, index) => (
        <Link
          href={icon.link}
          className="bg-[#347928] p-2 w-fit rounded-full hover:scale-110 transition"
          key={index}>
          <Image src={icon.image} width={20} height={20} alt={icon.name} />
        </Link>
      ))}
    </div>
  );
}
