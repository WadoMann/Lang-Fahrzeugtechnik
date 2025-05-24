import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Stefan M.",
    rating: 5,
    text: "Sehr professioneller Service! Herr Lang hat mein Auto schnell und zuverlässig repariert. Faire Preise und ehrliche Beratung. Kann ich nur weiterempfehlen!",
    date: "vor 2 Monaten"
  },
  {
    name: "Andrea K.", 
    rating: 5,
    text: "Top Werkstatt! Termine werden eingehalten, Arbeiten werden sauber ausgeführt und die Preise sind fair. Bin sehr zufrieden mit dem Service.",
    date: "vor 1 Monat"
  },
  {
    name: "Michael R.",
    rating: 5,
    text: "Kompetente Beratung und schnelle Reparatur. Das Team ist sehr freundlich und hilfsbereit. Mein Vertrauen ist zu 100% da.",
    date: "vor 3 Wochen"
  },
  {
    name: "Julia W.",
    rating: 5,
    text: "Excellent service! Very professional and reliable. The repair was completed quickly and at a fair price. Highly recommended!",
    date: "vor 1 Woche"
  },
  {
    name: "Thomas B.",
    rating: 5,
    text: "Beste Werkstatt in der Region! Herr Lang ist sehr kompetent und ehrlich. Ich bringe mein Auto nur noch hierher.",
    date: "vor 4 Tagen"
  },
  {
    name: "Sabine H.",
    rating: 5,
    text: "Sehr zufrieden mit der Arbeit. Pünktlich, sauber und zu einem fairen Preis. Die Kommunikation war immer transparent und verständlich.",
    date: "vor 1 Woche"
  }
];

export default function Reviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-slate-800">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral dark:text-white mb-6">
            Kundenbewertungen
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-neutral dark:text-white ml-2">
              {averageRating.toFixed(1)}
            </span>
            <span className="text-gray-600 dark:text-gray-300 ml-2">
              ({reviews.length} Bewertungen)
            </span>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Das sagen unsere zufriedenen Kunden über Lang Fahrzeugtechnik
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{review.date}</span>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                "{review.text}"
              </p>
              
              <div className="border-t dark:border-gray-600 pt-4">
                <p className="font-semibold text-neutral dark:text-white">{review.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Google Bewertung</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="https://www.google.de/maps/place/KFZ+Meisterbetrieb+Lang+Fahrzeugtechnik/@50.5635198,7.9584823,1184m/data=!3m3!1e3!4b1!5s0x47bc2f51d389d92d:0x132586bcae642ae1!4m6!3m5!1s0x47bc2f903ae64169:0xeb30a49ab1f772be!8m2!3d50.5635165!4d7.9633478!16s%2Fg%2F11q1j947fh?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Star className="w-5 h-5" />
            Bewertung auf Google abgeben
          </a>
        </motion.div>
      </div>
    </section>
  );
}