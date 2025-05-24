import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Klimaservice from "@/components/Klimaservice";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-50 to-blue-50">
      <Navigation />
      <Hero />
      <Services />
      <Klimaservice />
      <Contact />
      <Footer />
    </div>
  );
}
