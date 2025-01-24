/** @format */

import Image from "next/image";
import facebook from "../../../public/icons/facebook.svg";
import instagram from "../../../public/icons/instagram.svg";
import linkedin from "../../../public/icons/linkedin.svg";
import youtube from "../../../public/icons/youtube.svg";
import tiktok from "../../../public/icons/tiktok.svg";
import Link from "next/link";

export default function Socials({ size }) {
  const socialIcons = [
    { name: "instagram", image: instagram, link: "/" },
    { name: "facebook", image: facebook, link: "/" },
    { name: "linkedin", image: linkedin, link: "/" },
    { name: "youtube", image: youtube, link: "/" },
    { name: "tiktok", image: tiktok, link: "/" },
  ];

  const sizeStyles = {
    large: { iconSize: 40, padding: "p-4", gap:"gap-4", },
    small: { iconSize: 20, padding: "p-2", gap:"gap-2", },
  };

  const selectedSize = sizeStyles[size] || sizeStyles.small;
  return (
    <div className={`flex ${selectedSize.gap}`}>
      {socialIcons.map((icon, index) => (
        <Link
          href={icon.link}
          className={`bg-[#347928] ${selectedSize.padding} w-fit rounded-full hover:scale-110 transition`}
          key={index}>
          <Image
            src={icon.image}
            width={selectedSize.iconSize}
            height={selectedSize.iconSize}
            alt={icon.name}
          />
        </Link>
      ))}
    </div>
  );
}
