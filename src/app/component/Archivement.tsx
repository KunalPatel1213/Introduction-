"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart } from "react-icons/fa";

type Achievement = {
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  primaryImage: string;
  proofImages: string[];
  proofLabel: string;
};

const achievements: Achievement[] = [
  {
    title: "Hack with UttarPradesh 2025",
    subtitle: "Participation Certificate",
    description:
      "This certificate shows active participation in the hackathon and represents the event experience.",
    badge: "Participation",
    primaryImage: "/certificate-a245586dd78ec926ea984e945fc2d479.png",
    proofImages: ["/WhatsApp%20Image%202025-11-04%20at%2010.35.41%20PM.jpeg"],
    proofLabel: "Certificate Proof",
  },
  {
    title: "SMSOTSAV 2026",
    subtitle: "Hackathon Winner",
    description:
      "This achievement highlights the winning hackathon result with prize money and event recognition.",
    badge: "Winner",
    primaryImage: "/WhatsApp%20Image%202026-02-23%20at%2010.02.49%20AM%20(1).jpeg",
    proofImages: [
      "/WhatsApp%20Image%202026-02-23%20at%2010.02.49%20AM%20(1).jpeg",
      "/WhatsApp%20Image%202026-02-23%20at%2010.02.48%20AM.jpeg",
    ],
    proofLabel: "Winner Proof",
  },
];

const Archivement = () => {
  const [activeProof, setActiveProof] = useState<Achievement | null>(null);

  return (
    <section id="achievement" className="scroll-mt-24 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl space-y-7">
        <div className="space-y-4 text-center lg:text-left">
          <span className="inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black">
            Achievements
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-black sm:text-3xl md:text-4xl">
            Hackathon Certificates
          </h2>
          <p className="mx-auto max-w-3xl text-sm leading-7 text-gray-700 lg:mx-0 sm:text-base">
            Two separate hackathon achievements are shown below. One is a participation certificate and the other is a winning certificate with prize recognition.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
          {achievements.map((achievement) => (
            <motion.article
              key={achievement.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_6px_18px_rgba(0,0,0,0.06)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-black">
                <Image
                  src={achievement.primaryImage}
                  alt={achievement.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 inline-flex rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-black shadow-sm">
                  {achievement.badge}
                </div>
              </div>

              <div className="space-y-3 p-4 sm:p-5 lg:p-5">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-black sm:text-xl">{achievement.title}</h3>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
                    {achievement.subtitle}
                  </p>
                  <p className="text-sm leading-6 text-gray-700">
                    {achievement.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveProof(achievement)}
                  className="inline-flex items-center rounded-full bg-black px-4 py-2 text-xs font-semibold text-white transition hover:bg-gray-800"
                >
                  View Proof
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <footer className="mx-auto mt-8 w-full max-w-6xl border-t border-black/10 pt-5 text-center">
        <p className="inline-flex items-center gap-2 text-sm font-medium text-gray-700">
          Thankyou for reaching out
          <FaHeart className="text-red-500" aria-hidden="true" />
        </p>
      </footer>

      <AnimatePresence>
        {activeProof ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
            onClick={() => setActiveProof(null)}
          >
            <motion.div
              initial={{ scale: 0.96, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 12 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-black/10 px-5 py-4 sm:px-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                    {activeProof.proofLabel}
                  </p>
                  <h3 className="text-lg font-bold text-black sm:text-xl">{activeProof.title}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveProof(null)}
                  className="rounded-full border border-black/10 px-3 py-1.5 text-sm font-semibold text-black transition hover:bg-gray-100"
                >
                  Close
                </button>
              </div>

              <div className="bg-black p-3 sm:p-4">
                <div className={`grid gap-3 ${activeProof.proofImages.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                  {activeProof.proofImages.map((imageSource, index) => (
                    <div
                      key={imageSource}
                      className="relative h-[56vh] w-full overflow-hidden rounded-2xl bg-black"
                    >
                      <Image
                        src={imageSource}
                        alt={`${activeProof.proofLabel} ${index + 1}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
};

export default Archivement;
