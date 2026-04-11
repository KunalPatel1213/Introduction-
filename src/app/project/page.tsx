import React from "react";
import Header from "../component/Header";
import Project from "../component/Project";

const ProjectPage = () => {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Project />
      </main>
    </>
  );
};

export default ProjectPage;
