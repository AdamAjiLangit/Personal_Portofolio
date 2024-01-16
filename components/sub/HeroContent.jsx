"use client";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";
import {
  slideInFromTop,
  slideInFromLeft,
  slideInFromRight,
} from "../../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center w-full px-20 mt-40 z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0-9]"
        >
          <SparklesIcon className="text-[#bf9bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] ">
            Frontend Developer Portofolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w[600px] w-auto h-auto"
        >
          <span>
            Hi, <img src="/waving.png" alt="Waving" className="w-20 h-15 inline-block" /> I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              <br></br>
              <TypeAnimation
                sequence={[
                  { text: "Adam", key: "adam" },
                  1000,
                  { text: <br key="br1" />, key: "br1" },
                  { text: "Frontend Developer", key: "frontendDeveloper" },
                  1000,
                  { text: <br key="br2" />, key: "br2" },
                ]}
                wrapper="span"
                speed={1}
                repeat={Infinity}
              />
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Frontend Developer with experience in Websites, Mobile, and
          Software development. I&apos;m currently learning Vue.js, check out my
          projects and skills.
        </motion.p>

        <motion.a
          href="#skills"
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[199px]"
        >
          Learn More!
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <img
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          weight={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
