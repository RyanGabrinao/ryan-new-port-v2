import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed left-0 z-[9999] grid grid-cols-3 w-[95%] mx-auto right-0 px-6 py-3 font-normal tracking-tighter bottom-4 text-rg-white font-satoshi text-step4 md:text-step3 md:bottom-[unset] md:top-0 glassmorphism rounded-full">
      <Link href="/" className="hover:italic w-fit" scroll={false}>
        Home
      </Link>
      <Link
        href="/works"
        className="text-center hover:italic w-fit justify-self-center"
        scroll={false}
      >
        Works
      </Link>
      <Link
        href="/about"
        className="text-right hover:italic w-fit justify-self-end"
        scroll={false}
      >
        About
      </Link>
    </nav>
  );
};

export default Navbar;
