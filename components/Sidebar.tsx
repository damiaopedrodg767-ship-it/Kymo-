
import React, { useState } from 'react';
import { NavItem } from '../types';
import { useTranslation } from '../App';
import { Language } from '../translations';

interface SidebarProps {
  activeTab: NavItem;
  setActiveTab: (tab: NavItem) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const { t, lang, setLang } = useTranslation();
  
  const navItems = [
    { id: NavItem.FEED, label: t('feed'), icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg> },
    { id: NavItem.VISION, label: t('vision'), icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    { id: NavItem.CONNECT, label: t('connect'), icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg> },
    { id: NavItem.EXPLORE, label: t('explore'), icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" /></svg> },
  ];

  const langs: { code: Language; label: string }[] = [
    { code: 'pt', label: 'PT' },
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
    { code: 'fr', label: 'FR' },
    { code: 'zh', label: 'ZH' },
  ];

  return (
    <div className="w-64 h-full border-r border-zinc-800 bg-zinc-950/50 backdrop-blur-xl flex flex-col p-4">
      <div className="flex items-center gap-3 px-2 mb-10 group cursor-pointer">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
          <span className="text-2xl font-black text-white italic">K</span>
        </div>
        <span className="text-xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">Kymo</span>
      </div>

      <nav className="space-y-2 flex-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 group ${
              activeTab === item.id 
                ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 shadow-lg shadow-indigo-500/5' 
                : 'text-zinc-500 hover:bg-zinc-900/50 hover:text-white border border-transparent'
            }`}
          >
            <span className={`transition-transform duration-300 ${activeTab === item.id ? 'scale-110' : 'group-hover:scale-110'}`}>
              {item.icon}
            </span>
            <span className="font-bold text-sm">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="pt-4 border-t border-zinc-800 space-y-4">
        <div className="flex justify-around bg-zinc-900/30 p-1 rounded-xl border border-white/5">
          {langs.map((l) => (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              className={`px-2 py-1 text-[10px] font-black rounded-lg transition-all ${
                lang === l.code ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20' : 'text-zinc-600 hover:text-zinc-300'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3 px-2 py-2 rounded-2xl bg-white/5 border border-white/5">
          <img src="https://picsum.photos/seed/me/40/40" className="w-10 h-10 rounded-full border border-indigo-500/30" alt="Avatar" />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-black truncate">Alex Rivera</p>
            <p className="text-[10px] text-zinc-500 font-medium truncate">@alex_kymo</p>
          </div>
          <div className="w-2 h-2 bg-green-500 rounded-full shadow-lg shadow-green-500/40"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
