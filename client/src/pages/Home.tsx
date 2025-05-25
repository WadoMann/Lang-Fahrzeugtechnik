import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Klimaservice from "../components/Klimaservice";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-gray-700 to-slate-900">
      <Navigation />
      <Hero />
      <Services />
      <Klimaservice />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}
