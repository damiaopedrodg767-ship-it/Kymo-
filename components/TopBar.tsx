
import React from 'react';
import { NavItem } from '../types';
import { useTranslation } from '../App';

interface TopBarProps {
  activeTab: NavItem;
}

const TopBar: React.FC<TopBarProps> = ({ activeTab }) => {
  const { t } = useTranslation();
  
  return (
    <header className="h-16 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-10">
      <h1 className="text-lg font-semibold capitalize md:hidden flex items-center gap-2">
         <span className="text-indigo-500 font-black">K</span> {t(activeTab as any)}
      </h1>
      <div className="hidden md:flex items-center bg-zinc-900 border border-zinc-800 rounded-full px-4 py-1.5 w-96">
        <svg className="w-5 h-5 text-zinc-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        <input 
          type="text" 
          placeholder={t('search')} 
          className="bg-transparent border-none outline-none text-sm w-full text-zinc-300"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 text-zinc-400 hover:text-white transition-colors relative">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-zinc-950"></span>
        </button>
        <button className="hidden md:flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          {t('createPost')}
        </button>
      </div>
    </header>
  );
};

export default TopBar;
