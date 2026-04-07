"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "700"],
});

const Home = () => {
  return (
    <main
      id="home"
      className="flex min-h-[calc(100svh-4rem)] items-center justify-center bg-white px-4 pt-16"
    >
      <h1
        className={`${poppins.className} hero-title max-w-4xl text-center text-3xl font-bold leading-tight text-black sm:text-5xl md:text-6xl`}
      >
        <TypeAnimation
          sequence={["Hello, I'm Kunal.", 900, "I'm a Full-Stack Developer.", 1800]}
          wrapper="span"
          speed={65}
          repeat={0}
          cursor={true}
        />
      </h1>
    </main>
  );
};

export default Home;