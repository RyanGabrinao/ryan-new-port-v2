import gsap from "gsap";
import { CustomEase } from "gsap/dist/CustomEase";

gsap.registerPlugin(CustomEase);

export const customEase = CustomEase.create(
  "custom",
  "M0,0 C0,0 0.065,0.021 0.102,0.076 0.102,0.076 0.115,0.099 0.118,0.105 0.221,0.362 0.121,1 1,1 "
);

export const customEase2 = CustomEase.create(
  "custom",
  "M0,0 C0.802,0 0.348,0.999 0.984,0.999 0.989,0.999 0.994,1 1,1 "
);

export const customEase3 = CustomEase.create(
  "custom3",
  "M0,0 C0.109,0.012 0.177,0.051 0.221,0.106 0.45,0.442 0.26,0.946 0.99,0.999 0.993,1 0.996,1 1,1 "
);

export const customEase4 = CustomEase.create(
  "custom4",
  "M0,0 C0.11,0.494 0.06,0.748 0.186,0.874 0.34,1 0.504,1 1,1 "
);

export * from "gsap";
export * from "gsap/dist/CustomEase";
