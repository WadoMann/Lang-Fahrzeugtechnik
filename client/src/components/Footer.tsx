import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Logo from "./Logo";
import Modal from "./Modal";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const services = [
    "Fahrzeugdiagnose",
    "Motor & Getriebe",
    "Bremsenservice",
    "Klimaservice",
    "HU & AU"
  ];

  const contactInfo = [
    "Brückenstraße 10",
    "56457 Westerburg",
    "Tel: 0178 / 7646639",
    "E-Mail: lang.fahrzeugtechnik@gmail.com"
  ];

  return (
    <>
      <footer className="bg-neutral text-white py-12" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <Logo showText={false} />
                <h3 className="text-xl font-bold mt-3">Lang Fahrzeugtechnik</h3>
              </div>
              <p className="text-gray-300">
                Ihr vertrauensvoller Partner für professionellen KFZ-Service in Westerburg und Umgebung.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                {services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-gray-300">
                {contactInfo.map((info, index) => (
                  <li key={index}>{info}</li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p>&copy; 2024 Lang Fahrzeugtechnik. Alle Rechte vorbehalten.</p>
            <div className="mt-4 space-x-4">
              <button
                onClick={() => setActiveModal("impressum")}
                className="hover:text-white transition-colors"
              >
                Impressum
              </button>
              <button
                onClick={() => setActiveModal("datenschutz")}
                className="hover:text-white transition-colors"
              >
                Datenschutz
              </button>
              <button
                onClick={() => {
                  localStorage.removeItem('cookie-consent');
                  window.location.reload();
                }}
                className="hover:text-white transition-colors"
              >
                Cookie-Einstellungen
              </button>
            </div>
          </motion.div>
        </div>
      </footer>

      <Modal
        isOpen={activeModal === "impressum"}
        onClose={() => setActiveModal(null)}
        title="Impressum"
      >
        <div className="space-y-4 text-gray-700">
          <div>
            <h3 className="font-semibold text-lg mb-2">Angaben gemäß § 5 TMG</h3>
            <p>
              Lang Fahrzeugtechnik<br />
              Viktor Lang<br />
              Brückenstraße 10<br />
              56457 Westerburg
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Kontakt</h3>
            <p>
              Telefon: 0178 / 7646639<br />
              E-Mail: lang.fahrzeugtechnik@gmail.com
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Umsatzsteuer-ID</h3>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: [Wird bei
              Verfügbarkeit eingefügt]
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h3>
            <p>
              Viktor Lang<br />
              Brückenstraße 10<br />
              56457 Westerburg
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Haftung für Inhalte</h3>
            <p className="text-sm">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
              als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder
              gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === "datenschutz"}
        onClose={() => setActiveModal(null)}
        title="Datenschutzerklärung"
      >
        <div className="space-y-4 text-gray-700">
          <div>
            <h3 className="font-semibold text-lg mb-2">1. Datenschutz auf einen Blick</h3>
            <p className="text-sm">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">2. Allgemeine Hinweise und Pflichtinformationen</h3>
            <h4 className="font-medium mb-2">Datenschutz</h4>
            <p className="text-sm mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
              Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der
              gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">3. Datenerfassung auf dieser Website</h3>
            <h4 className="font-medium mb-2">Server-Log-Dateien</h4>
            <p className="text-sm">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so
              genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Diese
              Daten werden nicht mit anderen Datenquellen zusammengeführt.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">4. Kontakt</h3>
            <p className="text-sm">
              Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten,
              bei Auskünften, Berichtigung, Sperrung oder Löschung von Daten wenden Sie sich bitte
              an:
              <br />
              <br />
              Viktor Lang
              <br />
              Brückenstraße 10
              <br />
              56457 Westerburg
              <br />
              E-Mail: lang.fahrzeugtechnik@gmail.com
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}
