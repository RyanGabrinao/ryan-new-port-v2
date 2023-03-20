import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <main className="min-h-screen px-5 text-rg-white">
      <h1 className="font-bold font-neuehaas tracking-tighter text-step_3 pt-14">
        About Me
      </h1>
      <div className="relative h-[45vh] mb-4">
        <Image
          src={`/../public/images/flare.jpg`}
          fill
          alt="photo"
          className="object-cover"
        />
      </div>
      <div className="font-satoshi">
        <p className="font-medium text-step5">
          Born in Manila, made in BC, and perpetually longing for Greece
        </p>
      </div>
    </main>
  );
};

export default About;
