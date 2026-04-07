"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../../component/Header";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="flex min-h-[calc(100svh-4rem)] items-center justify-center px-4 py-0 sm:px-6 sm:py-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="w-full max-w-xl rounded-3xl border border-black/15 bg-white p-8 text-center"
        >
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-black/15 bg-black text-2xl text-white">
            ✓
          </div>
          <h1 className="text-3xl font-bold text-black sm:text-4xl">Thank You for Reaching Out</h1>
          <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-gray-700">
            Your message has been sent successfully. I will get back to you soon.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-black px-5 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
            >
              Go to Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Back to Contact
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
