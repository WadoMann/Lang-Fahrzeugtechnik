import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
        onError={() => console.log("Video failed to load")}
        onLoadStart={() => console.log("Video started loading")}
        onCanPlay={() => console.log("Video can play")}
      >
        <source src="/assets/Lng_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Fallback background if video doesn't load */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral via-gray-700 to-gray-900 -z-10" />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-20" />

      <div className="relative z-30 text-center text-white px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold mb-6 lg:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Lang <span className="text-accent">Fahrzeugtechnik</span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl xl:text-3xl mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ihr vertrauensvoller Partner für professionellen KFZ-Service in Westerburg
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-blue-700 text-white px-8 lg:px-12 py-4 lg:py-6 rounded-lg font-semibold text-lg lg:text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Termin vereinbaren
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="bg-white/20 hover:bg-white/30 text-white px-8 lg:px-12 py-4 lg:py-6 rounded-lg font-semibold text-lg lg:text-xl backdrop-blur-sm transition-all duration-300 border border-white/30"
            >
              Unsere Services
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
