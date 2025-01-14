/** @format */

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import phone from "../../../public/icons/phone.svg";
import email from "../../../public/icons/email.svg";

export default function ContactCards() {
  const cardContent = [
    {
      icon: phone,
      title: "+94 (11) 219 4350",
      description: "Monday to Friday, 9AM - 6PM",
    },
    {
      icon: email,
      title: "info@sensolar.biz",
      description: "We aim to respond within 24 hours.",
    },
  ];
  return (
    <div className="flex gap-8">
      {cardContent.map((card, index) => (
        <Card key={index} className="w-96 p-8 flex justify-center">
          <CardContent className="flex flex-col p-0">
            <div className="flex gap-2">
              <Image
                src={card.icon}
                width={20}
                height={25}
                alt="icon"
                className="translate-y-[1px]"
              />
              <CardTitle className="flex">
                <p>{card.title}</p>
              </CardTitle>
            </div>
            <CardDescription className="mt-4 text-blacks">
              {card.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
