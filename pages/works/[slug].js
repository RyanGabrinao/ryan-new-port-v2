import { client } from "@/utils/client";
import React from "react";
import Image from "next/image";
import urlFor from "@/utils/imageBuilder";
import Link from "next/link";
import { motion as m } from "framer-motion";
import Button from "@/components/Button";
import { customEase3 } from "@/utils/eases";
import { CustomEase } from "gsap/dist/CustomEase";
import gsap from "gsap";

gsap.registerPlugin(CustomEase);

const Single = ({ project, routePageOffset, exitStart }) => {
  return (
    <m.main
      key="single-page"
      className={`relative top-0 left-0 z-10 w-full max-h-full font-neuehaas text-rg-white`}
      initial={{ opacity: 0, scale: 0.95, position: "absolute" }}
      animate={{
        opacity: 1,
        scale: 1,
        position: "relative",
      }}
      exit={{
        opacity: 0,
        position: "absolute",
        zIndex: 999,
      }}
      transition={{ duration: 0.5, ease: customEase3 }}
    >
      {/* <div className="relative z-30 max-h-full overflow-y-auto"> */}
      <section id="hero" className="relative">
        <h1 className="absolute bottom-0 z-10 font-bold text-step_2 left-2 md:left-10">
          {project.title}
        </h1>
        <div className="w-full h-[80vh] relative brightness-[0.5]">
          <Image
            src={urlFor(project.mainImage).url()}
            fill
            className="object-cover"
            alt="photo"
          />
        </div>
      </section>
      <section
        id="overview"
        className="px-5 md:mx-auto font-satoshi mt-14 md:max-w-2xl lg:max-w-6xl"
      >
        <div className="flex flex-col gap-4 pb-14">
          <h2 className="font-bold tracking-tighter text-step2">Overview</h2>
          <p className="p-4 bg-gray-800 rounded-lg shadow-md opacity-70 text-step5 md:text-step6 lg:text-step7 shadow-black lg:p-12 lg:py-8">
            {project.overview}
          </p>
          <div className="flex justify-between mt-6 text-step5 md:text-step6 lg:text-step7">
            <Button
              href={project.repo}
              text="GitHub Repo"
              disabled={project.repo ? false : true}
            />
            <Button href={project.href} text="Live Site" primary />
          </div>
        </div>

        <div className="flex flex-col gap-8 border-y-2 border-rg-white border-opacity-20 py-14 md:flex-row md:justify-between">
          <div className="flex justify-between md:gap-3 md:flex-col md:justify-start">
            <h2 className="font-bold tracking-tighter text-step4 md:text-step5">
              Client
            </h2>
            <p className="opacity-70 text-step5 md:text-step6">
              {project.client}
            </p>
          </div>
          <div className="flex justify-between md:gap-3 md:flex-col md:justify-start">
            <h2 className="font-bold tracking-tighter text-step4 md:text-step5">
              Role
            </h2>
            {project.roles.map((role, idx) => (
              <p className="opacity-70 text-step5 md:text-step6" key={idx}>
                {role}
              </p>
            ))}
          </div>
          <div className="flex justify-between md:gap-3 md:flex-col md:justify-start">
            <h2 className="font-bold tracking-tighter text-step4 md:text-step5">
              Year
            </h2>
            <p className="opacity-70 text-step5 md:text-step6">
              {project.year}
            </p>
          </div>
          <div className="flex justify-between md:gap-3 md:flex-col md:justify-start">
            <h2 className="font-bold tracking-tighter text-step4 md:text-step5">
              Tools
            </h2>
            {project.tools.map((tool, idx) => (
              <p className="opacity-70 text-step5 md:text-step6" key={idx}>
                {tool}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 font-satoshi mb-14 pt-14 md:max-w-2xl md:mx-auto lg:max-w-6xl">
        {project.process && (
          <div className="flex flex-col gap-4">
            <h2 className="font-bold tracking-tighter text-step2 md:text-step3">
              Process
            </h2>
            <p className="p-4 bg-gray-800 rounded-lg shadow-md opacity-70 text-step5 md:text-step6 lg:text-step7 shadow-black lg:p-12 lg:py-8">
              {project.process}
            </p>
          </div>
        )}
        <div className="flex flex-col gap-4 mt-4 md:mt-6 md:gap-6">
          {project.processImages.length > 0 &&
            project.processImages.map((image, idx) => (
              <div className="relative w-full aspect-video" key={idx}>
                <Image
                  src={urlFor(image).url()}
                  fill
                  className="object-contain"
                  alt="photo"
                />
              </div>
            ))}
        </div>
      </section>
      <section className="px-5 pb-20 font-satoshi md:max-w-2xl md:mx-auto lg:max-w-6xl">
        {project.functionality && (
          <div className="flex flex-col gap-4">
            <h2 className="font-bold tracking-tighter text-step2 md:text-step3">
              Functionality
            </h2>
            <p className="p-4 bg-gray-800 rounded-lg shadow-md opacity-70 lg:text-step7 text-step5 md:text-step6 shadow-black lg:p-12 lg:py-8">
              {project.functionality}
            </p>
          </div>
        )}

        <div className="flex flex-col gap-4 mt-4 md:mt-6 md:gap-6">
          {project.functionalityImages.length > 0 &&
            project.functionalityImages.map((image, idx) => (
              <div className="relative w-full aspect-video" key={idx}>
                <Image
                  src={urlFor(image).url()}
                  fill
                  className="object-contain"
                  alt="photo"
                />
              </div>
            ))}
        </div>
      </section>
      {/* </div> */}
    </m.main>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "projects"]{
    _id,
    slug {
      current
    },
  }`;

  const projects = await client.fetch(query);

  const paths = projects.map((project) => ({
    params: {
      slug: project.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const query = `*[_type == "projects" && slug.current == $slug][0]`;

  const query2 = `*[_type == "projects" && slug.current != $slug]`;

  const project = await client.fetch(query, {
    slug: params?.slug,
  });

  const otherProjects = await client.fetch(query2, {
    slug: params?.slug,
  });

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
      otherProjects,
    },
  };
};

export default Single;
