import { client } from "@/utils/client";
import React from "react";

const Single = ({ project }) => {
  return (
    <main className="min-h-screen">
      <h1 className="text-rg-white">{project.title}</h1>
    </main>
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
