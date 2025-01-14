/** @format */
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import quote from "../../../public/icons/quote.svg";
import star from "../../../public/icons/star.svg";
import { useEffect, useState } from "react";

export default function TestimonialCarousel() {
  const testimonials = [
    {
      id: 1,
      text: "“Lorem ipsum dolor sit amet consectetur. Est id mus sed in mauris pellentesque dolor. A donec in penatibus tincidunt aenean maecenas nam semper scelerisque. Imperdiet integer et eros pharetra nulla sed ultricies. Ultrices tellus condimentum fames molestie diam cursus. Viverra eget donec eget aliquet volutpat nunc pharetra ut in.”",
      author: "Kamal Perera",
      company: "The Abc Company",
      rating: 5,
      image: "/images/customer.png",
    },
    {
      id: 2,
      text: "Excellent service and outstanding results. The team went above and beyond our expectations.",
      author: "Sarah Johnson",
      company: "XYZ Corp",
      rating: 5,
      image: "/images/customer.png",
    },
    {
      id: 3,
      text: "Their innovative solutions transformed our business processes completely.",
      author: "Michael Chen",
      company: "Tech Solutions",
      rating: 3,
      image: "/images/customer.png",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(currentSlide);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="w-full flex flex-col mb-20">
      {/* title */}
      <div className="flex flex-col gap-5 items-center">
        <div className="bg-[#347928] rounded-full py-1 px-6 text-white text-xl">
          Testimonials
        </div>
        <h1 className="text-6xl font-semibold">
          What Our <span className="text-[#347928]">Customers Say</span>{" "}
        </h1>
      </div>
      {/* carousel */}
      <div className="w-full flex overflow-hidden">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className=" grid grid-cols-3 gap-6 mt-16 min-w-full transition-transform duration-500 ease-in-out px-4"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {/* col 1 */}
            <Card className="bg-[#347928] w-full h-[600px] p-4 col-span-2">
              <CardHeader className="flex flex-row justify-between">
                <div className="bg-[#163311] p-5 rounded-full w-fit">
                  <Image src={quote} width={25} height={25} alt="quote" />
                </div>
                <div className="flex gap-3 w-fit">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Image
                      key={index}
                      src={star}
                      width={30}
                      height={30}
                      alt="quote"
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-3xl mt-10 text-white italic leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </CardDescription>
              </CardContent>
            </Card>
            {/* col 2 */}
            <div className="grid grid-rows-3 gap-6 col-span-1">
              <Card
                className={`row-span-2 bg-[#E8E8E8] border bg-no-repeat bg-cover`}
                style={{ backgroundImage: `url(${testimonial.image})` }}></Card>
              <Card className="w-full h-full bg-[#347928] p-6">
                <CardHeader className="pb-2">
                  <CardTitle className="text-4xl text-white">
                    {testimonial.author}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white text-xl font-light">
                    {testimonial.company}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-[#347928]" : "bg-[#347928]/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
