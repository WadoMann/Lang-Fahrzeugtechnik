import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { User, MapPin, Phone, Mail, Map, Clock } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (isInView && mapRef.current && !mapLoaded) {
      const loadLeafletMap = async () => {
        try {
          const L = (await import("leaflet")).default;
          
          // Initialize map
          const map = L.map(mapRef.current!, {
            center: [50.5659, 7.9885], // Approximate coordinates for Westerburg
            zoom: 15,
            zoomControl: true,
            scrollWheelZoom: false
          });

          // Add tile layer
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '© OpenStreetMap contributors'
          }).addTo(map);

          // Add marker
          const marker = L.marker([50.5659, 7.9885]).addTo(map);
          marker.bindPopup(`
            <div style="text-align: center; font-family: 'Inter', sans-serif;">
              <strong>Lang Fahrzeugtechnik</strong><br>
              Brückenstraße 10<br>
              56457 Westerburg<br>
              <a href="tel:017876466390" style="color: #1E40AF;">0178 / 7646639</a>
            </div>
          `);

          setMapLoaded(true);
        } catch (error) {
          console.error("Error loading map:", error);
        }
      };

      loadLeafletMap();
    }
  }, [isInView, mapLoaded]);

  const contactInfo = [
    {
      icon: User,
      title: "Inhaber",
      content: "Viktor Lang",
      color: "bg-primary"
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "Brückenstraße 10\n56457 Westerburg",
      color: "bg-primary"
    },
    {
      icon: Phone,
      title: "Telefon",
      content: "0178 / 7646639",
      href: "tel:017876466390",
      color: "bg-primary"
    },
    {
      icon: Mail,
      title: "E-Mail",
      content: "lang.fahrzeugtechnik@gmail.com",
      href: "mailto:lang.fahrzeugtechnik@gmail.com",
      color: "bg-primary"
    },
    {
      icon: Map,
      title: "Google Maps",
      content: "Route planen",
      href: "https://maps.google.com/?q=Brückenstraße+10,+56457+Westerburg",
      color: "bg-success"
    }
  ];

  const openingHours = [
    { day: "Montag - Freitag:", hours: "8:00 - 17:00 Uhr" },
    { day: "Samstag:", hours: "Nach Vereinbarung" },
    { day: "Sonntag:", hours: "Geschlossen" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-100 to-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral mb-6">Kontakt</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Erreichen Sie uns für Termine, Fragen oder eine unverbindliche Beratung
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl lg:text-4xl font-bold text-neutral mb-8">Lang Fahrzeugtechnik</h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className={`w-12 h-12 ${info.color} rounded-lg flex items-center justify-center`}>
                    <info.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-neutral">{info.title}</h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-primary hover:text-blue-700 transition-colors whitespace-pre-line"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 p-6 bg-gray-50 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center mb-4">
                <Clock className="text-primary mr-2" size={24} />
                <h4 className="text-lg font-semibold text-neutral">Öffnungszeiten</h4>
              </div>
              <div className="space-y-2 text-gray-600">
                {openingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{schedule.day}</span>
                    <span>{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gray-200 h-80 lg:h-96 xl:h-[500px] rounded-xl overflow-hidden shadow-lg">
              <div ref={mapRef} className="w-full h-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
