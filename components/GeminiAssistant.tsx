
import React, { useState } from 'react';
import { generateSmartReply } from '../services/gemini';
import { useTranslation } from '../App';

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const handleAsk = async () => {
    if (!query) return;
    setLoading(true);
    const result = await generateSmartReply(query);
    setResponse(result || "Error processing request.");
    setLoading(false);
  };

  return (
    <div className="fixed bottom-20 md:bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-80 shadow-2xl overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-indigo-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
                 <span className="text-indigo-600 font-bold text-xs">G</span>
              </div>
              <h3 className="font-bold text-sm">{t('aiAssistant')}</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
          </div>
          <div className="p-4 flex-1 min-h-[150px] max-h-[400px] overflow-y-auto bg-zinc-950/50">
            {response ? (
              <div className="space-y-4">
                <div className="bg-zinc-800/50 p-3 rounded-xl border border-zinc-700 text-sm whitespace-pre-wrap">{response}</div>
                <button onClick={() => {setResponse(null); setQuery('');}} className="text-xs text-indigo-400 hover:text-indigo-300 font-medium">{t('anotherQuestion')}</button>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <p className="text-xs text-zinc-400">{t('aiHelp')}</p>
                <textarea value={query} onChange={(e) => setQuery(e.target.value)} className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs outline-none focus:ring-1 focus:ring-indigo-500 resize-none h-24" />
                <button onClick={handleAsk} disabled={loading} className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded-xl text-xs font-bold transition-colors disabled:opacity-50">
                  {loading ? t('thinking') : t('processAi')}
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center shadow-xl shadow-indigo-500/30 hover:scale-110 transition-transform active:scale-95 group">
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-zinc-950 rounded-full"></div>
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        </button>
      )}
    </div>
  );
};

export default GeminiAssistant;
