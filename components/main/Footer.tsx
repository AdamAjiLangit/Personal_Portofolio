"use client";

import React from 'react'
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "../../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxLinkedinLogo,
} from "react-icons/rx"; //npm install react-icons
import HeroContent from '../sub/HeroContent';

const Footer = () => {
    return (
        <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]'>
            <div className='w-full flex flex-col items-center justify-center m-auto'>
                <div className='w-full h-full flex flex-row items-center justify-center flex-wrap mb-10'>
                    <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                        <div className='font-bold text-[16px]'>
                            Social Media
                        </div>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                            <a href='https://www.linkedin.com/in/adam-aji-langit-817670267/' className='flex flex-row items-center'>
                                <RxLinkedinLogo />
                                <span className='text-[15px] ml-[6px]'>Adam Aji Langit</span>
                            </a>
                        </p>
                        <p className=''>
                            <a href='https://www.instagram.com/zein_wx/' className='flex flex-row items-center my-[15px] cursor-pointer'>
                                <RxInstagramLogo />
                                <span className='text-[15px] ml-[6px]'>@zein_wx</span>
                            </a>
                        </p>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                            <a href='https://github.com/AdamAjiLangit' className='flex flex-row items-center'>
                                <RxGithubLogo />
                                <span className='text-[15px] ml-[6px]'>AdamAjiLangit</span>
                            </a>
                        </p>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                            <a href='mailto:adam.aji2007@gmail.com' className='flex flex-row items-center'>
                                <span className='text-[15px] ml-[6px]'>adam.aji2007@gmail.com</span>
                            </a>
                        </p>
                    </div>
                </div>
                <div className='mb-[20px] text-[15px] text-center'>
                    &copy; Ice Bear Dev 2024 Inc. All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer