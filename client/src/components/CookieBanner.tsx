import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Settings, Check } from "lucide-react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [cookieSettings, setCookieSettings] = useState({
    necessary: true, // Immer aktiviert
    analytics: false,
    marketing: false,
    preferences: false
  });

  useEffect(() => {
    // Prüfen ob Cookie-Einstellungen bereits gespeichert sind
    const savedConsent = localStorage.getItem('cookie-consent');
    if (!savedConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    setShowBanner(false);
  };

  const acceptNecessaryOnly = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookie-consent', JSON.stringify(necessaryOnly));
    setShowBanner(false);
  };

  const saveSettings = () => {
    const settings = {
      ...cookieSettings,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookie-consent', JSON.stringify(settings));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleSettingChange = (setting: keyof typeof cookieSettings) => {
    if (setting === 'necessary') return; // Notwendige Cookies können nicht deaktiviert werden
    setCookieSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-2xl border-t border-gray-200"
      >
        <div className="container mx-auto px-4 py-6">
          {!showSettings ? (
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
              <div className="flex items-start gap-3 flex-1">
                <Cookie className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg text-neutral mb-2">
                    Wir verwenden Cookies
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base">
                    Diese Website verwendet Cookies, um Ihnen die bestmögliche Nutzererfahrung zu bieten. 
                    Notwendige Cookies sind für die Grundfunktionen der Website erforderlich. Weitere Cookies 
                    helfen uns dabei, die Website zu verbessern und personalisierte Inhalte anzuzeigen.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex items-center justify-center gap-2 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm lg:text-base"
                >
                  <Settings size={16} />
                  Einstellungen
                </button>
                <button
                  onClick={acceptNecessaryOnly}
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm lg:text-base"
                >
                  Nur Notwendige
                </button>
                <button
                  onClick={acceptAll}
                  className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors text-sm lg:text-base font-semibold"
                >
                  Alle akzeptieren
                </button>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-neutral">Cookie-Einstellungen</h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-6">
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-neutral mb-2">Notwendige Cookies</h4>
                    <p className="text-gray-600 text-sm">
                      Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
                    </p>
                  </div>
                  <div className="flex items-center ml-4">
                    <div className="w-12 h-6 bg-primary rounded-full flex items-center justify-end px-1">
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-neutral mb-2">Analytische Cookies</h4>
                    <p className="text-gray-600 text-sm">
                      Helfen uns zu verstehen, wie Besucher mit der Website interagieren, um die Benutzererfahrung zu verbessern.
                    </p>
                  </div>
                  <button
                    onClick={() => handleSettingChange('analytics')}
                    className="flex items-center ml-4"
                  >
                    <div className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                      cookieSettings.analytics ? 'bg-primary justify-end' : 'bg-gray-300 justify-start'
                    }`}>
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </div>
                  </button>
                </div>

                <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-neutral mb-2">Marketing Cookies</h4>
                    <p className="text-gray-600 text-sm">
                      Werden verwendet, um Besuchern relevante Werbung und Marketingkampagnen anzuzeigen.
                    </p>
                  </div>
                  <button
                    onClick={() => handleSettingChange('marketing')}
                    className="flex items-center ml-4"
                  >
                    <div className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                      cookieSettings.marketing ? 'bg-primary justify-end' : 'bg-gray-300 justify-start'
                    }`}>
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </div>
                  </button>
                </div>

                <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-neutral mb-2">Präferenz Cookies</h4>
                    <p className="text-gray-600 text-sm">
                      Speichern Ihre Einstellungen und Präferenzen für zukünftige Besuche.
                    </p>
                  </div>
                  <button
                    onClick={() => handleSettingChange('preferences')}
                    className="flex items-center ml-4"
                  >
                    <div className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                      cookieSettings.preferences ? 'bg-primary justify-end' : 'bg-gray-300 justify-start'
                    }`}>
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </div>
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={acceptNecessaryOnly}
                  className="px-6 py-3 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Nur Notwendige
                </button>
                <button
                  onClick={saveSettings}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  <Check size={16} />
                  Einstellungen speichern
                </button>
                <button
                  onClick={acceptAll}
                  className="px-6 py-3 bg-success text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  Alle akzeptieren
                </button>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 text-xs text-gray-500">
                <p>
                  Weitere Informationen finden Sie in unserer{" "}
                  <button className="text-primary hover:underline">Datenschutzerklärung</button>.
                  Sie können Ihre Einstellungen jederzeit in der Fußzeile ändern.
                </p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}