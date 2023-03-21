import React from "react";
import Image from "next/image";
import { motion as m } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { allProjectsQuery } from "@/utils/queries";
import { client } from "@/utils/client";
import { customEase3 } from "@/utils/eases";
import { CustomEase } from "gsap/dist/CustomEase";
import gsap from "gsap";

gsap.registerPlugin(CustomEase);

const Works = ({ projects }) => {
  return (
    <m.main
      className="relative top-0 left-0 w-full min-h-screen min-h-[100svh] px-4 pt-10 pb-20 md:pb-0 lg:pb-10 md:pt-16 "
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, delay: 0.4, ease: customEase3 },
      }}
      exit={{
        x: "-100%",
        position: "absolute",
        zIndex: 999,
        height: "100vh",
        transition: { duration: 0.9, ease: customEase3 },
      }}
      // exit={{ opacity: 0, transition: { duration: 0.5, ease: customEase3 } }}
    >
      <section className="max-w-md mx-auto font-satoshi md:max-w-7xl">
        <h1 className="font-extrabold tracking-tighter text-rg-white text-step_2 md:text-step_1 font-neuehaas">
          Projects
        </h1>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-fluid">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
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
