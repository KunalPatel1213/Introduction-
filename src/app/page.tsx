"use client";

import React from "react";
import { useEffect } from "react";
import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";
import Skill from "./component/Skill";
import Project from "./component/Project";
import Archivement from "./component/Archivement";

const Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Home />
      <About />
      <Skill />
      <Project />
      <Archivement />
    </>
  );
};

export default Page;
