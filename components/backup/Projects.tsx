import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image'
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import ProjectCard from '../sub/ProjectCard'
import Link from 'next/link';
import { slideInFromLeft } from '@/utils/motion';

const Projects = () => {
    return (
        <div className='flex flex-col items-center justify-center py-20' id='projects'>
            <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
                My Projects
            </h1>
            <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
                <ProjectCard
                    src='/website1.png'
                    title='Jelajah KALBAR'
                    description='This website provides information related to anything in West Kalimantan, such as Culinary, History, Tourism, etc..'
                />
                <ProjectCard
                    src='/semarnusantara1.png'
                    title='Semar Nusantara'
                    description='Gold sales app, providing a variety of jewelry. Buy gold anywhere & anytime'
                />
                <ProjectCard
                    src='/desktoprestaurant.png'
                    title='Simple C# Restaurant Desktop App'
                    description='This is a simple restaurant desktop app, made with C#'
                />
            </div>
        </div>
    )
}

export default Projects