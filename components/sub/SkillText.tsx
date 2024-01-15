"use client";

import { motion } from 'framer-motion'
import React from 'react'
import {
    slideInFromTop,
    slideInFromLeft,
    slideInFromRight,
} from "../../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const SkillText = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center mt-20'>
            <motion.div
                variants={slideInFromTop}
                className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0-9]"
            >
                <SparklesIcon className="text-[#bf9bff] mr-[10px] h-5 w-5" />
                <h1 className="Welcome-text text-[13px] ">
                    Think better with Next js 13
                </h1>
            </motion.div>
            <motion.div variants={slideInFromLeft(0.5)}
                className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
            >
                Making apps with modern technologies
            </motion.div>
            <motion.div variants={slideInFromRight(0.5)}
                className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
            >
                Making apps with modern technologies
            </motion.div>
        </div>
    )
}

export default SkillText