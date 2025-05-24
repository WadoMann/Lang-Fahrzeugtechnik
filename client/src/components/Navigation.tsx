import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import Modal from "./Modal";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Fahrzeug Service", id: "services" },
    { name: "Klimaservice", id: "klimaservice" },
    { name: "Kontakt", id: "contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/98 backdrop-blur-sm shadow-lg" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-6">
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-10">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="nav-link text-neutral hover:text-primary font-semibold text-lg transition-all duration-300 hover:scale-105"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => setActiveModal("impressum")}
                className="nav-link text-neutral hover:text-primary font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                Impressum
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-neutral p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden pb-4 overflow-hidden"
              >
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-neutral hover:text-primary font-medium text-left"
                    >
                      {item.name}
                    </button>
                  ))}
                  <button
                    onClick={() => {
                      setActiveModal("impressum");
                      setIsMenuOpen(false);
                    }}
                    className="text-neutral hover:text-primary font-medium text-left"
                  >
                    Impressum
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

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
