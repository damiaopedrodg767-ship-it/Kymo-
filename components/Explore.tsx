
import React from 'react';
import { useTranslation } from '../App';

const Explore: React.FC = () => {
  const { t, lang } = useTranslation();
  const categories = ['Trending', 'Tech', 'Music', 'Travel', 'Fashion', 'Gaming', 'Fitness', 'Art'];
  
  return (
    <div className="max-w-6xl mx-auto py-8 px-6 space-y-12">
      <div className="flex gap-4 overflow-x-auto no-scrollbar">
        {categories.map((cat, i) => (
          <button key={i} className={`flex-shrink-0 px-6 py-2 rounded-full text-sm font-medium transition-all ${i === 0 ? 'bg-white text-black' : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'}`}>
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L9 9H1L7 14L4 22L12 17L20 22L17 14L23 9H15L12 1Z" /></svg>
              {t('featured')}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 aspect-[21/9] rounded-2xl overflow-hidden relative group">
                <img src="https://picsum.photos/seed/exp1/1200/500" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Exp" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold">The Evolution of Digital Connectivity</h3>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6">
            <h2 className="text-lg font-bold mb-4">{t('trending')}</h2>
            <button className="w-full mt-6 py-2 text-sm font-medium text-indigo-500 hover:text-indigo-400 border-t border-zinc-800 pt-4">{t('showMore')}</button>
          </div>

          <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-500/30 rounded-3xl p-6 relative overflow-hidden group">
            <h3 className="text-lg font-bold mb-2 relative z-10">Kymo AI Studio</h3>
            <p className="text-xs text-zinc-300 mb-4 relative z-10">{t('studioDesc')}</p>
            <button className="bg-white text-black w-full py-2 rounded-xl text-xs font-bold hover:bg-zinc-200 relative z-10">{t('launchStudio')}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
