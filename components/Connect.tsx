
import React, { useState } from 'react';
import { Chat, Message } from '../types';
import { useTranslation } from '../App';

const MOCK_CHATS: Chat[] = [
  { id: '1', name: 'Design Team', avatar: 'https://picsum.photos/seed/dgn/100/100', lastMessage: 'The new assets are ready!', unread: 2 },
  { id: '2', name: 'Marcus Aurelius', avatar: 'https://picsum.photos/seed/marcus/100/100', lastMessage: 'See you at the gym soon?', unread: 0 },
  { id: '3', name: 'Project X', avatar: 'https://picsum.photos/seed/px/100/100', lastMessage: 'Status update please.', unread: 5 },
  { id: '4', name: 'Elena Gilbert', avatar: 'https://picsum.photos/seed/elena/100/100', lastMessage: 'Haha that was so funny!', unread: 0 },
];

const MOCK_MESSAGES: Message[] = [
  { id: '1', sender: 'Design Team', text: 'Hey guys, did you check the latest Kymo Figma?', timestamp: '10:05 AM', isMe: false },
  { id: '2', sender: 'Me', text: 'Yeah, it looks stunning. Love the dark mode.', timestamp: '10:07 AM', isMe: true },
  { id: '3', sender: 'Design Team', text: 'Great! I will start exporting the icons now.', timestamp: '10:08 AM', isMe: false },
  { id: '4', sender: 'Design Team', text: 'The new assets are ready!', timestamp: '10:10 AM', isMe: false },
];

const Connect: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>('1');
  const { t } = useTranslation();

  return (
    <div className="flex h-full">
      <div className={`w-full md:w-96 flex flex-col border-r border-zinc-800 bg-zinc-950 ${selectedChat ? 'hidden md:flex' : 'flex'}`}>
        <div className="p-4 border-b border-zinc-800">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">{t('chats')}</h2>
            <button className="p-2 text-indigo-500 bg-indigo-500/10 rounded-lg hover:bg-indigo-500/20">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
            </button>
          </div>
          <div className="relative">
             <input type="text" placeholder={t('search')} className="w-full bg-zinc-900 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50" />
             <svg className="w-4 h-4 text-zinc-500 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {MOCK_CHATS.map((chat) => (
            <div key={chat.id} onClick={() => setSelectedChat(chat.id)} className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-zinc-900 transition-colors ${selectedChat === chat.id ? 'bg-zinc-900 border-l-4 border-indigo-500' : ''}`}>
              <img src={chat.avatar} className="w-12 h-12 rounded-full" alt={chat.name} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-sm truncate">{chat.name}</h3>
                  <span className="text-[10px] text-zinc-500">10:10 AM</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-zinc-400 truncate">{chat.lastMessage}</p>
                  {chat.unread > 0 && <span className="bg-indigo-600 text-[10px] font-bold text-white px-1.5 py-0.5 rounded-full min-w-[1.2rem] text-center">{chat.unread}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`flex-1 flex flex-col bg-zinc-900/20 ${!selectedChat ? 'hidden md:flex' : 'flex'}`}>
        {selectedChat ? (
          <>
            <div className="h-16 border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-md px-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button onClick={() => setSelectedChat(null)} className="md:hidden p-2 -ml-2 text-zinc-400"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></button>
                <img src={MOCK_CHATS.find(c => c.id === selectedChat)?.avatar} className="w-10 h-10 rounded-full" alt="Active" />
                <div>
                  <h3 className="font-semibold text-sm">{MOCK_CHATS.find(c => c.id === selectedChat)?.name}</h3>
                  <p className="text-[10px] text-green-500 font-medium">{t('online')}</p>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {MOCK_MESSAGES.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[70%] px-4 py-2 rounded-2xl text-sm ${msg.isMe ? 'bg-indigo-600 text-white rounded-tr-none' : 'bg-zinc-800 text-zinc-100 rounded-tl-none'}`}>
                    <p>{msg.text}</p>
                    <p className={`text-[10px] mt-1 text-right ${msg.isMe ? 'text-indigo-200' : 'text-zinc-500'}`}>{msg.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-zinc-950/50 backdrop-blur-md">
              <div className="flex items-center gap-3 bg-zinc-900 rounded-2xl px-4 py-2">
                <input type="text" placeholder={t('typeMessage')} className="flex-1 bg-transparent border-none outline-none py-2 text-sm text-zinc-100" />
                <button className="bg-indigo-600 text-white p-2 rounded-xl hover:bg-indigo-700"><svg className="w-5 h-5 rotate-90" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg></button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-zinc-500 p-8 text-center">
            <h2 className="text-xl font-bold text-zinc-300 mb-2">{t('connect')}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Connect;
