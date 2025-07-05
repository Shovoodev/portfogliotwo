import Link from "next/link";
import React from "react";

type ProductsType = {
  id: string;
  title: string;
  description: string;
  link: string;
};
const ProjectCard = ({ title, description, link }: ProductsType) => {
  return (
    <div className=" rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-200 text-sm">{description}</p>
      </div>
      <Link href={link} target="black">
        <button className="bg-transparent w-full hover:border-red-500 text-white font-semibold hover:text-white py-2 px-4 mt-3 border border-white  rounded">
          Open github project
        </button>
      </Link>
    </div>
  );
};

export default ProjectCard;
