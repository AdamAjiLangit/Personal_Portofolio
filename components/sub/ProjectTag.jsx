import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected
        ? "text-white border-primary-500"
        : "text-[#ADB7BE] border-slate-600 hover:border-white";
    return (
        <button
            className={`${buttonStyles} md:text-xl max-sm:justify-center max-sm:m-1 max-sm:items-center text-center sm:text-left sm:text-xl max-sm:text-2xs lg:text-xl lg:leading-normal rounded-full border-2 px-6 py-3 text-lg cursor-pointer`}
            onClick={() => onClick(name)}
        >
            {name}
        </button>
    );
};

export default ProjectTag;