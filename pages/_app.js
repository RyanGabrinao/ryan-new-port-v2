"use client";
import { useEffect, useState } from "react";
import Layout from "@/components/layout";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Lenis from "@studio-freight/lenis";
import PageTransition from "@/components/PageTransition";

export default function App({ Component, pageProps }) {
  const [routePageOffset, setRoutePageOffset] = useState(0);
  const [exitStart, setExitStart] = useState(false);
  const router = useRouter();

  const onExitComplete = () => {
    window.scrollTo({ top: 0 });
  };
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      orientation: "vertical", // vertical, horizontal
      gestureOrientation: "vertical", // vertical, horizontal, both
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const pageChange = () => {
      setRoutePageOffset(window.scrollY);
      setExitStart(true);
      console.log("page change start");
    };

    const pageChangeDone = () => {
      // setExitStart(false);
      console.log("page change end");
    };

    router.events.on("routeChangeStart", pageChange);
    router.events.on("routeChangeComplete", pageChangeDone);

    return () => {
      router.events.off("routeChangeStart", pageChange);
      router.events.off("routeChangeComplete", pageChangeDone);
    };
  }, [router.events]);

  return (
    <Layout>
      <AnimatePresence
        initial={false}
        mode="wait"
        onExitComplete={onExitComplete}
      >
        <Component
          {...pageProps}
          key={router.pathname}
          routePageOffset={routePageOffset}
          exitStart={exitStart}
        />
      </AnimatePresence>
    </Layout>
  );
}
