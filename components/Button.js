import React from "react";
import Link from "next/link";

const Button = ({ primary, href, text, disabled }) => {
  return (
    <Link
      href={href}
      className={`py-2 px-6 rounded-full text-step5 font-semibold shadow-sm shadow-black ${
        primary ? "bg-rg-white text-primary" : "border text-rg-white"
      } ${disabled && "opacity-20 pointer-events-none"}`}
      disabled={disabled ? "true" : "false"}
    >
      {text}
    </Link>
  );
};

export default Button;
