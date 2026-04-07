"use client";

import { FaGraduationCap, FaLaptopCode, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.22 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto w-full max-w-6xl"
      >
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black">
            About Me
          </span>

          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">
            Hi, I&apos;m Kunal Patel.
          </h2>

          <p className="max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
            I&apos;m a BCA 4th semester student and a full-stack developer. I&apos;ve worked on multiple
            client projects and I&apos;m comfortable collaborating in team environments. You can review my
            GitHub and LinkedIn profiles to see my work and growth journey.
          </p>

          <p className="max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
            My vision is simple: to turn practical ideas into real products that deliver value and make
            people&apos;s lives easier.
          </p>

          <div className="grid gap-3 sm:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
              className="rounded-2xl border border-black/10 bg-white p-4"
            >
              <FaGraduationCap className="mb-2 text-xl text-black" />
              <p className="text-sm font-semibold text-black">BCA Student</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
              className="rounded-2xl border border-black/10 bg-white p-4"
            >
              <FaLaptopCode className="mb-2 text-xl text-black" />
              <p className="text-sm font-semibold text-black">Full-Stack Developer</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
              className="rounded-2xl border border-black/10 bg-white p-4"
            >
              <FaUsers className="mb-2 text-xl text-black" />
              <p className="text-sm font-semibold text-black">Client + Team Experience</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;