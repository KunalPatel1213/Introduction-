import Header from "../component/Header";
import Skill from "../component/Skill";

export default function SkillPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <Skill />
      </div>
    </main>
  );
}
