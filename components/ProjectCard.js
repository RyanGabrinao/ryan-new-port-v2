import urlFor from "@/utils/imageBuilder";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <Link href={`/works/${project.slug.current}`}>
      <article className="relative w-full h-full overflow-hidden rounded-md shadow-md shadow-black bg-card text-rg-white">
        <div className="relative w-full h-28 md:h-40 lg:h-52">
          <Image
            src={urlFor(project.mainImage).url()}
            fill
            alt="photo"
            className="object-cover"
          />
        </div>
        <div className="p-4 py-6">
          <h2 className="mb-2 font-semibold text-step4 md:text-step:5 lg:text-step6">
            {project.title}
          </h2>
          <p className="opacity-50 text-step6 md:text-step7 lg:text-step8">
            {project.excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
