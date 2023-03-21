import Hero from "@/components/Hero";
import { client } from "@/utils/client";
import urlFor from "@/utils/imageBuilder";
import { siteSettingsQuery } from "@/utils/queries";
import Head from "next/head";
import Image from "next/image";
import { motion as m } from "framer-motion";
import { customEase2, customEase3 } from "@/utils/eases";
import { CustomEase } from "gsap/dist/CustomEase";
import gsap from "gsap";

gsap.registerPlugin(CustomEase);

export default function Home({ settings }) {
  return (
    <>
      <Head>
        <title>Ryan Gabrinao - Portfolio</title>
        <meta
          name="description"
          content="A graduate of BCIT's Front-End Web Development Program with hands on experience creating websites with multiple modern technologies such as React.js, PHP, sass, and WordPress. I have a strong foundation of responsive and dynamic development and passionate about new web technologies. I am a creative thinker and quick learner who strives for innovative solutions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <m.main
        className="top-0 left-0 w-full h-full overflow-hidden select-none "
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5, delay: 0.4, ease: customEase3 },
        }}
        exit={{
          x: "-100%",
          position: "fixed",
          height: "100vh",
          zIndex: 999,
          transition: { duration: 0.9, ease: customEase2 },
        }}
      >
        <section className="w-full min-h-screen min-h-[100svh]">
          <m.div className="absolute top-14 md:top-[unset] md:bottom-12 md:left-4 md:w-fit text-center md:text-left z-10 leading-[1] text-rg-white uppercase w-full">
            <h1
              className="font-extrabold tracking-tight font-neuehaas text-step_3 md:text-step_1"
              id="title"
            >
              {settings.title}
            </h1>
            <h2 className="text-step2 tracking-[-0.02em] font-satoshi font-light capitalize">
              <span className="font-melodrama">Creative</span> Developer
            </h2>
          </m.div>
          {/* <m.div className="absolute w-full overflow-hidden -translate-x-1/2 -translate-y-1/2 md:w-3/5 lg:w-[40%] aspect-square top-1/2 left-1/2 blur-xl">
            <Image
              src={"/../public/images/heroGif.gif"}
              fill
              alt="photo"
              draggable={false}
            />
          </m.div> */}
          <div className="absolute z-50 -translate-x-1/2 -translate-y-1/2 h-1/5 aspect-square top-1/2 left-1/2 opacity-80 blur-0">
            <Image
              src={urlFor(settings.heroImage).url()}
              fill
              alt="photo"
              draggable={false}
            />
          </div>
        </section>
      </m.main>
    </>
  );
}

export async function getStaticProps() {
  const settings = await client.fetch(siteSettingsQuery());

  return {
    props: {
      settings,
    },
  };
}
