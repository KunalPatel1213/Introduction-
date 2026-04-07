import Header from "../component/Header";
import About from "../component/About";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <About />
      </div>
    </main>
  );
}