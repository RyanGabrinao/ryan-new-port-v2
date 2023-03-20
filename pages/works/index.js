import React from "react";
import Image from "next/image";
import { motion as m } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { allProjectsQuery } from "@/utils/queries";
import { client } from "@/utils/client";

const Works = ({ projects }) => {
  console.log(projects);
  return (
    <m.main
      className="relative w-full min-h-screen px-4 pt-14 pb-20"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, delay: 0.5 },
      }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <h1 className="mb-6 font-extrabold text-rg-white text-step_3 tracking-tighter font-neuehaas">
        Projects
      </h1>
      <section className="flex flex-col gap-6 font-satoshi">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </section>
    </m.main>
  );
};

export async function getStaticProps() {
  const projects = await client.fetch(allProjectsQuery());

  return {
    props: {
      projects,
    },
  };
}

export default Works;
