import React from "react";
import Image from "next/image";
import { CustomEase } from "gsap/dist/CustomEase";
import gsap from "gsap";
import { motion as m } from "framer-motion";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { customEase3 } from "@/utils/eases";
import Button from "@/components/Button";
import { client } from "@/utils/client";
import { siteSettingsQuery } from "@/utils/queries";
import urlFor from "@/utils/imageBuilder";

gsap.registerPlugin(CustomEase);

const About = ({ settings }) => {
  return (
    <m.main
      key="about-page"
      className="relative top-0 left-0 z-10 w-full max-h-full px-5 pb-20 pt-14 md:pt-20 lg:pt-24 lg:pb-20 text-rg-white"
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
      <section className="max-w-6xl gap-4 mx-auto md:gap-6 lg:gap-8 font-satoshi md:grid md:grid-cols-2">
        <h1 className="col-span-2 font-bold tracking-tighter font-neuehaas text-step_2 md:text-step_3">
          About Me
        </h1>
        <div className="relative h-[45vh] md:h-full mb-4 w-full grayscale">
          <Image
            src={urlFor(settings.aboutImage).url()}
            fill
            alt="photo"
            className="object-cover"
          />
        </div>
        <div>
          <p className="mb-4 font-semibold text-step4 md:text-step5">
            Born in Manila, made in BC, and perpetually longing for Greece
          </p>
          <div className="flex flex-col gap-4 opacity-70 text-step5 md:text-step6">
            <p>
              I specialize in creating interactive experiences and user-friendly
              interfaces whilst maintaining semantic, clean markup, and SEO
              friendly code.
            </p>
            <p>
              My goal is to connect people with brands & businesses through
              design. A combination of strong concepts and refined execution to
              deliver premium results.
            </p>
            <p>
              Currently I&apos;m working as a freelance Web Developer / Designer
              & accepting new projects. I&apos;m always available for
              interesting collaborations and fun side projects. If you would
              like to work together, feel free to get in touch.
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-8 italic font-neuehaas text-step3 md:text-step5">
            <a
              href="mailto:ryan.gabrinao@gmail.com?subject=Hello!"
              className="flex items-center gap-1 underline"
            >
              Email
              <ArrowLongRightIcon className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ryan-luke-gabrinao-a269b8136/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 underline"
            >
              Linkedin <ArrowLongRightIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
      <div className="max-w-2xl mx-auto mt-12">
        <a
          href="/files/RyanGabrinao-Resume.pdf"
          alt="alt text"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center w-full py-3 border border-rg-white text-rg-white"
        >
          <button className="flex-1 font-bold tracking-tighter uppercase text-step5 font-satoshi">
            Download Resume
          </button>
        </a>
      </div>
    </m.main>
  );
};

export async function getStaticProps() {
  const settings = await client.fetch(siteSettingsQuery());

  return {
    props: {
      settings,
    },
  };
}

export default About;
