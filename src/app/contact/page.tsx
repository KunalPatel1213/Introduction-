import { Suspense } from "react";
import Header from "../component/Header";
import Contact from "../component/Contact";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Suspense fallback={<div className="min-h-[calc(100svh-4rem)]" />}>
        <Contact />
      </Suspense>
    </main>
  );
}