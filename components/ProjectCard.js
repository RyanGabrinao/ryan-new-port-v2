import urlFor from "@/utils/imageBuilder";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <Link href={`/works/${project.slug.current}`}>
      <article className="relative w-full overflow-hidden rounded-md shadow-md bg-card text-rg-white">
        <div className="relative w-full h-28">
          <Image
            src={urlFor(project.mainImage).url()}
            fill
            alt="photo"
            className="object-cover"
          />
        </div>
        <div className="p-4 py-6">
          <h2 className="font-semibold text-step4 mb-2">{project.title}</h2>
          <p className="opacity-50 text-step6">{project.excerpt}</p>
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
