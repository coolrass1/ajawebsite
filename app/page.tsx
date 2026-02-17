import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";
import Values from "@/components/Values";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-off-white">
      <Navbar />
      <Hero />
      <PracticeAreas />
      <Values />
      <Team />
      <Footer />
    </main>
  );
}
