import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed left-0 z-50 grid grid-cols-3 w-[85%] mx-auto right-0 px-4 py-3 font-normal tracking-tighter bottom-4 text-rg-white font-satoshi text-step4 md:bottom-[unset] md:top-0 glassmorphism rounded-full">
      <Link href="/" className="hover:italic w-fit">
        Home
      </Link>
      <Link
        href="/works"
        className="text-center hover:italic w-fit justify-self-center"
      >
        Works
      </Link>
      <Link
        href="/about"
        className="text-right hover:italic w-fit justify-self-end"
      >
        About
      </Link>
    </nav>
  );
};

export default Navbar;
