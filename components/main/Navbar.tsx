import React from 'react';
import Image from 'next/image';
import { Socials } from '@/constants';
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

const Navbar = () => {
    return (
        <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
            <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
                <a href="#about-me" className='h-auto w-auto flex flex-row items-center'>
                    <Image src='/icebear.png' alt='Logo' width={70} height={70} className='cursor-pointer hover:animate-slowspin' />
                    <span className='font-bold ml-[10px] hidden md:block text-gray-300'>
                        Ice Bear Dev
                    </span>
                </a>
                <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20 max-sm:text-xs'>
                    <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
                        <a href="#about-me" className='cursor-pointer'>About me</a>
                        <a href="#skills" className='cursor-pointer'>Skills</a>
                        <a href="#projects" className='cursor-pointer'>Projects</a>
                    </div>
                </div>
                <div className='flex flex-row gap-5 max-sm:w-20 max-sm:gap-1 cursor-pointer text-white'>
                    <a href='https://github.com/AdamAjiLangit' className='flex flex-row items-center'>
                        <RxGithubLogo />
                    </a>
                    <a href='https://www.linkedin.com/in/adam-aji-langit-817670267/' className='flex flex-row items-center'>
                        <RxLinkedinLogo />
                    </a>
                    <a href='https://www.instagram.com/zein_wx/' className='flex flex-row items-center'>
                        <RxInstagramLogo />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar