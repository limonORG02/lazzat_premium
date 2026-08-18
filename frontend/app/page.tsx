import Intro from "@/components/intro/Intro";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ProductShowcase from "@/components/sections/ProductShowcase";
import Features from "@/components/sections/Features";
import About from "@/components/sections/About/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Intro />
      <Navbar />
      <Hero />
      <ProductShowcase />
      <Features />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
