import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Programs from "@/components/sections/Programs";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Gallery from "@/components/sections/Gallery";
import Franchise from "@/components/sections/Franchise";
import FranchiseCalculator from "@/components/FranchiseCalculator";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <WhyChooseUs />
        <Gallery />
        <Franchise />
        <FranchiseCalculator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
