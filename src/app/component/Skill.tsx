"use client";

import {
  SiCss,
  SiDocker,
  SiDjango,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { label: "HTML", icon: SiHtml5 },
  { label: "CSS", icon: SiCss },
  { label: "JavaScript", icon: SiJavascript },
  { label: "Tailwind", icon: SiTailwindcss },
  { label: "React.js", icon: SiReact },
  { label: "Next.js", icon: SiNextdotjs },
  { label: "Django", icon: SiDjango },
  { label: "Django Rest Framework", icon: SiDjango },
  { label: "Docker", icon: SiDocker },
  { label: "MySQL", icon: SiMysql },
];

const Skill = () => {
  return (
    <section id="resume" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mx-auto w-full max-w-6xl space-y-8"
      >
        <span className="inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black">
          Skills
        </span>

        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">
          My Core Tech Stack
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ label, icon: Icon }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white p-4"
            >
              <Icon className="text-2xl text-black" />
              <p className="text-base font-semibold text-black">{label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skill;