import React from "react";
import localFont from "next/font/local";
import Image from "next/image";

const melodrama = localFont({
  src: "../public/fonts/Melodrama-Variable.ttf",
  variable: "--font-melodrama",
});
const satoshi = localFont({
  src: [
    { path: "../public/fonts/Satoshi-Variable.ttf", style: "normal" },
    { path: "../public/fonts/Satoshi-VariableItalic.ttf", style: "italic" },
  ],
  variable: "--font-satoshi",
});
const neueHaas = localFont({
  src: [
    {
      path: "../public/fonts/NeueHaasDisplayBlack.ttf",
      style: "normal",
      weight: "900",
    },
    {
      path: "../public/fonts/NeueHaasDisplayBlackItalic.ttf",
      style: "italic",
      weight: "900",
    },
    {
      path: "../public/fonts/NeueHaasDisplayMedium.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../public/fonts/NeueHaasDisplayMediumItalic.ttf",
      style: "italic",
      weight: "400",
    },
  ],
  variable: "--font-neuehaas",
});

const FontProvider = ({ children }) => {
  return (
    <div
      className={`bg-primary ${melodrama.variable} ${satoshi.variable} ${neueHaas.variable}`}
    >
      <div className="fixed w-full overflow-hidden -translate-x-1/2 -translate-y-1/2 md:w-3/5 lg:w-[40%] aspect-square top-1/2 left-1/2 blur-xl">
        <Image
          src={"/../public/images/heroGif.gif"}
          fill
          alt="photo"
          draggable={false}
        />
      </div>
      {children}
    </div>
  );
};

export default FontProvider;
