import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Snowflake, Wrench, Leaf } from "lucide-react";

export default function Klimaservice() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    {
      icon: Snowflake,
      title: "Klimaanlagen-Wartung",
      description: "Regelmäßige Inspektion und Wartung für optimale Kühlleistung",
      color: "bg-primary"
    },
    {
      icon: Wrench,
      title: "Reparatur & Austausch",
      description: "Professionelle Reparatur defekter Komponenten und Ersatzteilservice",
      color: "bg-secondary"
    },
    {
      icon: Leaf,
      title: "Umweltfreundlich",
      description: "Fachgerechte Entsorgung von Kältemitteln nach Umweltstandards",
      color: "bg-success"
    }
  ];

  return (
    <section id="klimaservice" className="py-20 bg-gradient-to-b from-gray-50 to-slate-100" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral mb-6">Klimaservice</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professionelle Klimaanlagenwartung für optimales Raumklima in Ihrem Fahrzeug
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Klimaservice"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-3xl font-bold text-neutral mb-6">
                Ihre Klimaanlage in besten Händen
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Eine funktionierende Klimaanlage ist essentiell für Ihren Fahrkomfort. Wir bieten
                umfassenden Service für alle Klimaanlagen-Systeme.
              </p>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <feature.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-neutral mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-block"
                >
                  Klimaservice anfragen
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
