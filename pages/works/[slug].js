import { client } from "@/utils/client";
import React from "react";
import Image from "next/image";
import urlFor from "@/utils/imageBuilder";
import Link from "next/link";
import { motion as m } from "framer-motion";
import Button from "@/components/Button";

const Single = ({ project }) => {
  return (
    <m.main
      className="min-h-screen font-neuehaas text-rg-white"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, delay: 0.5 },
      }}
    >
      <section id="hero" className="relative">
        <h1 className="font-bold absolute bottom-0 z-10 text-step_2 left-2">
          {project.title}
        </h1>
        <div className="w-full h-[80vh] relative">
          <Image
            src={urlFor(project.mainImage).url()}
            fill
            className="object-cover"
            alt="photo"
          />
        </div>
      </section>
      <section id="overview" className="font-satoshi px-5">
        <div className="rounded-lg py-16 flex flex-col gap-4">
          <h2 className="font-bold text-step2 tracking-tighter">Overview</h2>
          <p className="opacity-70 bg-gray-800 rounded-lg p-4 text-step5 shadow-md shadow-black">
            {project.excerpt}
          </p>
        </div>
        <div className="border-t-2 py-16 border-rg-white border-opacity-20 flex flex-col gap-8">
          <div className="flex justify-between">
            <h2 className="font-bold text-step4 tracking-tighter">Client</h2>
            <p className="opacity-70 text-step5">N/A</p>
          </div>
          <div className="flex justify-between">
            <h2 className="font-bold text-step4 tracking-tighter">Role</h2>
            <p className="opacity-70 text-step5">N/A</p>
          </div>
          <div className="flex justify-between">
            <h2 className="font-bold text-step4 tracking-tighter">Year</h2>
            <p className="opacity-70 text-step5">N/A</p>
          </div>
          <div className="flex justify-between">
            <h2 className="font-bold text-step4 tracking-tighter">Tools</h2>
            <p className="opacity-70 text-step5">N/A</p>
          </div>
        </div>
        <div className="flex justify-between">
          <Button href={`/`} text="GitHub Repo" />
          <Button href={`/`} text="Live Site" primary />
        </div>
      </section>
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
