import React from "react";
import Link from "next/link";

const Button = ({ primary, href, text }) => {
  return (
    <Link
      href={href}
      className={`py-2 px-6 rounded-full font-semibold shadow-sm shadow-black ${
        primary ? "bg-rg-white text-primary" : "border text-rg-white"
      }`}
    >
      {text}
    </Link>
  );
};

export default Button;
