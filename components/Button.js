import React from "react";
import Link from "next/link";

const Button = ({ primary, href, text, disabled }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`py-2 px-6 rounded-full font-semibold shadow-sm shadow-black ${
        primary ? "bg-rg-white text-primary" : "border text-rg-white"
      } ${disabled && "opacity-20 pointer-events-none"}`}
    >
      {text}
    </a>
  );
};

export default Button;
