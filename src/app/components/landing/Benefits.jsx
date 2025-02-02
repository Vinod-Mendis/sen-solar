/** @format */
"use client";

import BenefitCard from "../BenefitCard";
import { Card } from "@/components/ui/card";
import ButtonComponent from "../ButtonComponent";
import { motion, useInView, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Benefits() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: "all", once: true });

  // Create animation controls for each card
  const controls1 = useAnimationControls();
  const controls2 = useAnimationControls();
  const controls3 = useAnimationControls();
  const controls4 = useAnimationControls();
  const controls5 = useAnimationControls();
  const controls6 = useAnimationControls();
  const controlsCenter = useAnimationControls();

  // Animation sequence
  useEffect(() => {
    if (isInView) {
      const sequence = async () => {
        // Start with center image
        await controlsCenter.start({
          scale: 1,
          opacity: 1,
          transition: { duration: 0.5, ease: [0, 0.71, 0.2, 1.01] },
        });
        // Then proceed with ID order
        await controls1.start({
          scale: 1,
          opacity: 1,
          transition: { duration: 0.5, ease: [0, 0.71, 0.2, 1.01] },
        });
        await controls2.start({
          scale: 1,
          opacity: 1,
          transition: { duration: 0.5, ease: [0, 0.71, 0.2, 1.01] },
        });
        await controls3.start({
          scale: 1,
          opacity: 1,
          transition: { duration: 0.5, ease: [0, 0.71, 0.2, 1.01] },
        });
        await controls4.start({
          scale: 1,
          opacity: 1,
          transition: { duration: 0.5, ease: [0, 0.71, 0.2, 1.01] },
        });
        await controls5.start({
          scale: 1,
          opacity: 1,
          transition: { duration: 0.5, ease: [0, 0.71, 0.2, 1.01] },
        });
        await controls6.start({
          scale: 1,
          opacity: 1,
          transition: { duration: 0.5, ease: [0, 0.71, 0.2, 1.01] },
        });
      };
      sequence();
    }
  }, [
    isInView,
    controls1,
    controls2,
    controls3,
    controls4,
    controls5,
    controls6,
    controlsCenter,
  ]);

  const cardContent = [
    {
      icon: "/icons/shieldCheck.svg",
      title: "25+Year Warranty",
      description:
        "Enjoy peace of mind with long-term coverage for your solar system, ensuring durability and performance for decades.",
    },
    {
      icon: "/icons/handshake.svg",
      title: "Performance Guaranteed",
      description:
        "Get consistent energy output you can count on, backed by our commitment to quality and efficiency.",
    },
    {
      icon: "/icons/fileBadge.svg",
      title: "Top-Quality Components",
      description:
        "We use only premium materials to build systems that last, delivering maximum value over their lifespan.",
    },
    {
      icon: "/icons/wrench.svg",
      title: "10+ Years of Experience",
      description:
        "Our expert installers bring over a decade of proven skill to ensure a seamless and reliable installation.",
    },
  ];

  return (
    <div className="w-full mb-20 mt-10 flex flex-col gap-16 items-center max-w-7xl mx-auto">
      {/* title */}
      <div className="flex flex-col gap-2 text-center items-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-200px", once: true }}
          transition={{ duration: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
          className="text-6xl font-semibold">
          Why <span className="text-[#347928] ">Choose</span> Sen Solar?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-200px", once: true }}
          transition={{ duration: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
          className="text-[20px] w-[800px] leading-tight">
          Lorem ipsum dolor sit amet consectetur. Massa tellus quisque pulvinar
          pulvinar. Vitae tristique commodo diam tempus vulputate quam urna
          iaculis.
        </motion.p>
      </div>
      {/* cards */}
      <div ref={containerRef} className="flex w-full justify-between gap-6">
        {/* col 1 */}
        <div className="flex flex-col">
          <div className="flex flex-col gap-6 justify-between">
            <motion.div
              id="1"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={controls1}>
              <BenefitCard
                icon={cardContent[0].icon}
                title={cardContent[0].title}
                description={cardContent[0].description}
              />
            </motion.div>
            <motion.div
              id="3"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={controls3}>
              <BenefitCard
                icon={cardContent[1].icon}
                title={cardContent[1].title}
                description={cardContent[1].description}
              />
            </motion.div>
            <motion.div
              id="5"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={controls5}
              className="w-72 h-60 bg-[url('/images/benefitsImg2.png')] bg-no-repeat bg-cover rounded-3xl"></motion.div>
          </div>
        </div>
        {/* col 2 */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={controlsCenter}
          className="bg-[url('/images/benefitsImg1.png')] bg-no-repeat bg-cover w-full rounded-3xl"></motion.div>
        {/* col 3 */}
        <div className="flex flex-col gap-6">
          <motion.div
            id="6"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={controls6}
            className="w-72 h-60 bg-[url('/images/benefitsImg3.png')] bg-no-repeat bg-cover rounded-3xl"></motion.div>
          <motion.div
            id="4"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={controls4}>
            <BenefitCard
              icon={cardContent[2].icon}
              title={cardContent[2].title}
              description={cardContent[2].description}
            />
          </motion.div>
          <motion.div
            id="2"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={controls2}>
            <BenefitCard
              icon={cardContent[3].icon}
              title={cardContent[3].title}
              description={cardContent[3].description}
            />
          </motion.div>
        </div>
      </div>
      {/* button */}
      <ButtonComponent variant={"green_outline"} icon={"circleArrow"}>
        More About Sen Solar
      </ButtonComponent>
    </div>
  );
}
