import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Search, Settings, AlertTriangle, ClipboardCheck, Wrench, Zap } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Fahrzeugdiagnose",
    description: "Computergestützte Diagnose aller Fahrzeugsysteme mit modernster Technik für präzise Fehlererkennung",
    video: "/assets/Video11.mp4",
    color: "text-primary"
  },
  {
    icon: Settings,
    title: "Motor & Getriebe",
    description: "Wartung und Reparatur von Motor- und Getriebetechnik für optimale Fahrleistung und Langlebigkeit",
    video: "/assets/Video 4.mp4",
    color: "text-secondary"
  },
  {
    icon: AlertTriangle,
    title: "Bremsenservice",
    description: "Sicherheitsprüfung und Wartung des Bremssystems für maximale Fahrsicherheit bei allen Witterungsbedingungen",
    video: "/assets/Video 2.mp4",
    color: "text-accent"
  },
  {
    icon: Wrench,
    title: "Reifen & Räder",
    description: "Reifenwechsel, Auswuchten, Spureinstellung und Beratung für optimalen Fahrkomfort und Sicherheit",
    image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    color: "text-primary"
  }
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Video autoplay effect for mobile
  useEffect(() => {
    const videos = document.querySelectorAll('video');
    
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Silent fail for autoplay restrictions
          });
        } else {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3
    });

    videos.forEach((video) => {
      observer.observe(video);
    });

    return () => {
      observer.disconnect();
    };
  }, [isInView]);

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-blue-900 to-slate-800" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Fahrzeug Service</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professionelle Wartung und Reparatur für alle Fahrzeugtypen mit modernster Technik und jahrelanger Erfahrung
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card bg-white rounded-xl shadow-lg p-6 lg:p-8 border border-gray-100 h-full"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {service.video ? (
                <video
                  muted
                  loop
                  playsInline
                  className="w-full h-48 lg:h-64 object-cover rounded-lg mb-6"
                  style={{ objectPosition: 'center 20%' }}
                  onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                  onMouseLeave={(e) => (e.target as HTMLVideoElement).pause()}
                  onLoadStart={() => console.log('Video started loading')}
                  onCanPlay={() => console.log('Video can play')}
                  onError={(e) => console.error('Video error:', e)}
                >
                  <source src={service.video} type="video/mp4" />
                  Ihr Browser unterstützt das Video-Format nicht.
                </video>
              ) : (
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 lg:h-64 object-cover rounded-lg mb-6"
                />
              )}
              <div className="text-center">
                <service.icon className={`mx-auto mb-4 ${service.color}`} size={48} />
                <h3 className="text-2xl font-bold text-neutral mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
