"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

type ProjectItem = {
  id: string;
  title: string;
  description: string;
  url: string;
  video: string;
  tag: string;
  codeUrl?: string;
};

const startupProjects: ProjectItem[] = [
  {
    id: "billing-kitaab",
    title: "Billing Kitaab",
    description:
      "Billing Kitaab helps business owners manage billing in a simple and practical way. For more details,",
    url: "https://billing-kitaab.vercel.app/",
    video: "/Billin.mp4",
    tag: "Startup Project",
  },
  {
    id: "ornix-agency",
    title: "Ornix Agency",
    description:
      "This site is an agency platform where multiple clients can connect and grow. For more details,",
    url: "https://ornix-agency-redisign-zcjd.vercel.app/",
    video: "/ornixag.mp4",
    tag: "Startup Project",
  },
];

const cloneProjects: ProjectItem[] = [
  {
    id: "v2-clone",
    title: "V2 Clone",
    description:
      "A clean V2 clone showcase built for presentation and UI reference. For more details,",
    url: "https://v2-clone-zeta.vercel.app/",
    video: "/pd2.mp4",
    tag: "Clone Project",
    codeUrl: "https://github.com/KunalPatel1213/V2-Clone",
  },
  {
    id: "studio-clone",
    title: "Studio Clone",
    description:
      "A studio design clone focused on polished layout, spacing, and visual balance. For more details,",
    url: "https://studio-design-clone.vercel.app/",
    video: "/pd1.mp4",
    tag: "Clone Project",
    codeUrl: "https://github.com/KunalPatel1213/studio.designClone",
  },
];

const Project = () => {
  const [projectProgress, setProjectProgress] = useState<Record<string, "view" | "code">>({});

  const handleViewClick = (projectId: string) => {
    setProjectProgress((prev) => ({ ...prev, [projectId]: "view" }));
  };

  const handleCodeClick = (projectId: string) => {
    setProjectProgress((prev) => ({ ...prev, [projectId]: "code" }));
    const project = [...startupProjects, ...cloneProjects].find((item) => item.id === projectId);

    if (project?.codeUrl) {
      window.location.href = project.codeUrl;
      return;
    }

    window.location.href = "/contact?project=clone-work";
  };

  const getLineHeight = (projectId: string) => {
    const progress = projectProgress[projectId];
    if (!progress) return "0%";
    if (progress === "view") return "50%";
    if (progress === "code") return "100%";
    return "0%";
  };

  const renderProjectGrid = (projects: ProjectItem[], delayOffset: number) => (
    <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
      {projects.map((project, index) => (
        <motion.article
          key={project.id}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: (delayOffset + index) * 0.08 }}
          className="overflow-hidden rounded-xl border border-black/10 bg-[#f9f9f9] shadow-[0_2px_8px_rgba(0,0,0,0.04)] sm:rounded-2xl sm:shadow-[0_4px_14px_rgba(0,0,0,0.06)]"
        >
          <div className="relative overflow-hidden bg-black min-h-50 sm:min-h-65">
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />
          </div>

          <div className="p-4 sm:p-5 lg:p-6">
            <div className="space-y-3 sm:space-y-4">
              <div className="space-y-2">
                <span className="inline-flex rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-black/70">
                  {project.tag}
                </span>
                <h3 className="text-base font-bold text-black line-clamp-1 sm:text-lg">{project.title}</h3>
                <p className="text-xs leading-5 text-gray-700 line-clamp-2 sm:text-sm sm:leading-6">
                  {project.description}
                </p>
              </div>

              <div className="relative flex flex-wrap items-center justify-center gap-2 py-3 sm:gap-4">
                <a
                  href={project.url}
                  onClick={() => handleViewClick(project.id)}
                  target={project.url.startsWith("http") ? "_blank" : undefined}
                  rel={project.url.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-1 rounded-lg bg-black px-3 py-2 text-xs font-semibold text-white transition hover:bg-gray-800 sm:px-4"
                >
                  View
                  <FaExternalLinkAlt className="text-xs" />
                </a>

                <div className="relative order-3 h-10 w-0.5 overflow-hidden rounded-full bg-gray-200 sm:order-2 sm:h-12">
                  <motion.div
                    className="absolute inset-0 w-full origin-top rounded-full bg-blue-600"
                    initial={{ height: "0%" }}
                    animate={{ height: getLineHeight(project.id) }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>

                <button
                  onClick={() => handleCodeClick(project.id)}
                  className="inline-flex items-center gap-1 rounded-lg border border-black/20 bg-white px-3 py-2 text-xs font-semibold text-black transition hover:bg-gray-50 sm:px-4"
                >
                  Code
                  <FaExternalLinkAlt className="text-xs" />
                </button>
              </div>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );

  return (
    <>
      <section id="project" className="relative scroll-mt-24 bg-white px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto w-full max-w-6xl space-y-8"
        >
          <div className="space-y-4">
            <span className="inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black">
              Projects
            </span>

            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">
              Selected Work
            </h2>

            <p className="max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
              This section is separated from the rest of the app and shows startup projects and clone work in clean cards.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-black sm:text-2xl">Startup Projects</h3>
              <p className="text-sm leading-7 text-gray-600 sm:text-base">
                Live previews for Billing Kitaab and Ornix Agency are shown here.
              </p>
            </div>
            {renderProjectGrid(startupProjects, 0)}
          </div>

          <div className="space-y-6 pt-2">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-black sm:text-2xl">Clone Projects</h3>
              <p className="text-sm leading-7 text-gray-600 sm:text-base">
                The V2 clone and Studio clone videos, along with their live links, are added below.
              </p>
            </div>
            {renderProjectGrid(cloneProjects, startupProjects.length)}
          </div>
        </motion.div>
      </section>

    </>
  );
};

export default Project;
