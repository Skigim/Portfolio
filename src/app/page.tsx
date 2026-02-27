import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Approach from "@/components/Approach";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Approach />
      <Work />
      <Skills />
      <Contact />
    </main>
  );
}
