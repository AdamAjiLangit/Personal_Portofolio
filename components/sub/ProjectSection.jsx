"use client";
import React, { useState, useRef } from "react";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import Project from "../main/Project";

const projectsData = [
    {
        id: 1,
        title: "Jelajah KALBAR",
        description: "This website provides information related to anything in West Kalimantan, such as Culinary, History, Tourism, etc..",
        src: '/website1.png',
        tag: ["All", "Web"],
        gitUrl: "https://github.com/AdamAjiLangit/Website_KalimantanBarat",
        previewUrl: "https://website-kalimantan-barat.vercel.app/",
    },
    {
        id: 2,
        title: "Semar Nusantara",
        description: "Gold sales app, providing a variety of jewelry. Buy gold anywhere & anytime",
        src: "/semarnusantara1.png",
        tag: ["All", "Mobile"],
        gitUrl: "https://github.com/AdamAjiLangit/semar_nusantara",
        previewUrl: "#",
    },
    {
        id: 3,
        title: "Simple Restaurant App",
        description: "This is a simple restaurant desktop app, made with C#",
        src: "/desktoprestaurant.png",
        tag: ["All", "Desktop"],
        gitUrl: "https://github.com/AdamAjiLangit/SimpleRestaurant",
        previewUrl: "#",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold md:mb-12 text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Mobile"
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Desktop"
                    isSelected={tag === "Desktop"}
                />
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 overflow-hidden rounded-lg  shadow-lg mb-10 pb-10 pl-10 pr-10">
                {filteredProjects.map((project) => (
                    <motion.li
                        key={project.id} // Add key prop with unique value
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: project.id * 0.4 }} // Use project.id as delay value
                    >
                        <Project
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.src}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsSection;
