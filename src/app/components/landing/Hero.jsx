/** @format */
"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import ButtonComponent from "../ButtonComponent";
import HeroCard from "../HeroCard";
import { delay, motion } from "framer-motion";

// 1st col animations ------------------------------------------------

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};
const titleVariant = {
  hidden: {
    y: "100%", // Start from below the container
    opacity: 0,
  },
  show: {
    y: "-4%", // Move to its original position
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
};
const paragraphVariant = {
  hidden: {
    y: "100%", // Start from below the container
    opacity: 0,
  },
  show: {
    y: "-4%", // Move to its original position
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.6,
    },
  },
};
const footerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 1, // 1-second delay before the animation starts
      staggerChildren: 1.5, // Delay between button animations
    },
  },
};
const buttonVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};

// 2nd col animations ------------------------------------------------
const fadeInAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, delay: 0 }, // Placeholder for delay that we will override
};

// Assigning random delays to each card manually
const delays = [0.5, 0.7, 0.9, 1.1];

export default function Hero() {
  return (
    <div className="mt-40 w-full flex gap-8 max-w-7xl mx-auto ">
      {/* 1st col */}
      <motion.div variants={containerVariant} initial="hidden" animate="show">
        <Card className="h-[684px] bg-[url('/images/heroCardBg.png')] bg-no-repeat bg-cover px-4">
          <CardHeader>
            <CardTitle className="text-7xl leading-tight text-white font-bold mt-2 ">
              <div className="overflow-hidden">
                <motion.p variants={titleVariant}>Empowering</motion.p>
              </div>
              <div className="overflow-hidden">
                <motion.p variants={titleVariant}>Sri Lanka</motion.p>
              </div>
            </CardTitle>
            <CardTitle className="text-7xl leading-tight text-[#FCCD2A] font-bold">
              <div className="overflow-hidden">
                <motion.p variants={titleVariant}>with Clean</motion.p>
              </div>
              <div className="overflow-hidden">
                <motion.p variants={titleVariant}>Energy</motion.p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-xl text-white font-light leading-tight">
              <div className="overflow-hidden">
                <motion.p variants={paragraphVariant}>
                  Sen Solar creates custom solar solutions for homes and
                  businesses, tailored to your needs. Reduce costs or go green
                  with our efficient, high-quality systems. Harness the power of
                  the sun with us
                </motion.p>
              </div>
            </CardDescription>
          </CardContent>
          <CardFooter className="mt-10">
            <motion.div
              className="flex gap-4"
              variants={footerVariant}
              initial="hidden"
              animate="show">
              <motion.div variants={buttonVariant}>
                <ButtonComponent variant={"green_primary"} icon={"circleArrow"}>
                  Get a free Quote
                </ButtonComponent>
              </motion.div>
              <motion.div variants={buttonVariant}>
                <ButtonComponent variant={"white_outline"}>
                  Learn More
                </ButtonComponent>
              </motion.div>
            </motion.div>
          </CardFooter>
        </Card>
      </motion.div>
      {/* 2nd col */}
      <div className="flex flex-col gap-8">
        <div className="flex gap-8">
          <motion.div
            {...fadeInAnimation}
            transition={{ ...fadeInAnimation.transition, delay: delays[0] }}>
            <HeroCard variant={"light"} />
          </motion.div>
          <motion.div
            {...fadeInAnimation}
            transition={{ ...fadeInAnimation.transition, delay: delays[2] }}>
            <Card className="bg-[url('/images/heroImg1.png')] bg-no-repeat bg-cover w-72 h-[326px]" />
          </motion.div>
        </div>
        <div className="flex gap-8">
          <motion.div
            {...fadeInAnimation}
            transition={{ ...fadeInAnimation.transition, delay: delays[3] }}>
            <Card className="bg-[url('/images/heroImg2.png')] bg-no-repeat bg-cover w-72 h-[326px]" />
          </motion.div>
          <motion.div
            {...fadeInAnimation}
            transition={{ ...fadeInAnimation.transition, delay: delays[1] }}>
            <HeroCard variant={"dark"} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
