
import React, { useState, useEffect, createContext, useContext } from 'react';
import { NavItem } from './types';
import { Language, translations } from './translations';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Vision from './components/Vision';
import Connect from './components/Connect';
import Explore from './components/Explore';
import TopBar from './components/TopBar';
import GeminiAssistant from './components/GeminiAssistant';

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: keyof typeof translations['en']) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useTranslation must be used within LanguageProvider');
  return context;
};

// Global reference for PWA install prompt
let deferredPrompt: any = null;

const SplashScreen: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center">
      <div className="relative">
        <div className="w-24 h-24 rounded-2xl bg-indigo-600 flex items-center justify-center kymo-logo-animate shadow-2xl shadow-indigo-500/50">
          <span className="text-6xl font-black text-white italic select-none">K</span>
        </div>
      </div>
      <h1 className="mt-8 text-4xl font-bold tracking-[0.2em] text-white select-none">KYMO</h1>
      <p className="mt-2 text-zinc-500 text-sm font-medium tracking-widest uppercase">{t('nextEvolution')}</p>
      <div className="mt-12 w-48 h-1 bg-zinc-900 rounded-full overflow-hidden">
        <div className="h-full bg-indigo-500 w-1/2 animate-[progress_2s_ease-in-out_infinite]"></div>
      </div>
    </div>
  );
};

const AppContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavItem>(NavItem.FEED);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
    });

    return () => clearTimeout(timer);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case NavItem.FEED: return <Feed />;
      case NavItem.VISION: return <Vision />;
      case NavItem.CONNECT: return <Connect />;
      case NavItem.EXPLORE: return <Explore />;
      default: return <Feed />;
    }
  };

  if (loading) return <SplashScreen />;

  return (
    <div className="flex h-screen bg-zinc-950 text-zinc-100 overflow-hidden animate-in fade-in duration-700">
      <div className="hidden md:flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        <TopBar activeTab={activeTab} />
        <main className="flex-1 overflow-y-auto relative">
          {renderContent()}
        </main>

        <div className="md:hidden border-t border-zinc-800 bg-zinc-900/50 backdrop-blur-xl">
          <nav className="flex justify-around items-center h-16">
            {[NavItem.FEED, NavItem.VISION, NavItem.CONNECT, NavItem.EXPLORE].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`p-2 transition-colors ${activeTab === tab ? 'text-indigo-500' : 'text-zinc-500'}`}
              >
                {tab === NavItem.FEED && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>}
                {tab === NavItem.VISION && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>}
                {tab === NavItem.CONNECT && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>}
                {tab === NavItem.EXPLORE && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
              </button>
            ))}
          </nav>
        </div>
      </div>
      <GeminiAssistant />
    </div>
  );
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('pt');

  const t = (key: keyof typeof translations['en']) => {
    return translations[lang][key] || translations['en'][key];
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <AppContent />
    </LanguageContext.Provider>
  );
};

export default App;
export { deferredPrompt };
