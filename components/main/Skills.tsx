"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Backend_skill, Frontend_skill, Full_stack, Other_skill, Skill_data } from '@/constants'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'


const Skills = () => {
    return (
        <section id='skills' className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden'
        >
            <SkillText />
            <div className="flex flex-col gap-20 max-w-[80%] text-center items-center">
                <Swiper
                    slidesPerView={5}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    speed={5000}
                    modules={[Autoplay]}
                    className="max-w-[80%]"
                >
                    {Frontend_skill.map((image, index) => (
                        <SwiperSlide key={index}>
                            <SkillDataProvider
                                src={image.Image}
                                width={image.width}
                                height={image.height}
                                index={index}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    slidesPerView={4}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        reverseDirection: true
                    }}
                    speed={5000}
                    modules={[Autoplay]}
                    className="max-w-[80%]"
                >
                    {Frontend_skill.map((image, index) => (
                        <SwiperSlide key={index}>
                            <SkillDataProvider
                                src={image.Image}
                                width={image.width}
                                height={image.height}
                                index={index}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='w-full h-full absolute'>
                <div className='w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover'>
                    <video className='w-full h-auto' preload='false' playsInline loop muted autoPlay src="/cards-video.webm"></video>
                </div>
            </div>
        </section>
    )
}

export default Skills