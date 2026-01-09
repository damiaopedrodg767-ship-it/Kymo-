
import React from 'react';
import { Post } from '../types';
import { useTranslation } from '../App';

const MOCK_POSTS: Post[] = [
  {
    id: '1',
    author: 'Sarah Jenkins',
    avatar: 'https://picsum.photos/seed/sarah/100/100',
    content: 'Kymo is now officially PWA-ready! Open this link in your browser menu and click "Add to Home Screen" to install it as a native app on your Android or iPhone. 📱🔥',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
    likes: 1240,
    comments: 89,
    timestamp: '2h ago'
  },
  {
    id: '2',
    author: 'Tech Daily',
    avatar: 'https://picsum.photos/seed/tech/100/100',
    content: 'The unification of social experiences is here. One app, all your connections. #Kymo #SuperApp',
    likes: 5600,
    comments: 342,
    timestamp: '5h ago'
  }
];

const Feed: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 space-y-8">
      {/* Stories Section */}
      <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
        {['You', 'John', 'Alice', 'Mark', 'Elena', 'Sam'].map((name, i) => (
          <div key={i} className="flex-shrink-0 flex flex-col items-center gap-2">
            <div className={`p-1 rounded-full border-2 ${i === 0 ? 'border-zinc-700' : 'border-indigo-500 shadow-lg shadow-indigo-500/20'}`}>
              <img src={`https://picsum.photos/seed/${name}/100/100`} className="w-16 h-16 rounded-full object-cover" alt={name} />
            </div>
            <span className="text-xs font-medium text-zinc-400">{i === 0 ? 'You' : name}</span>
          </div>
        ))}
      </div>

      {/* Post Creator */}
      <div className="bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-md rounded-2xl p-4 flex gap-4 shadow-xl">
        <img src="https://picsum.photos/seed/me/40/40" className="w-10 h-10 rounded-full border border-indigo-500/50" alt="Me" />
        <div className="flex-1 bg-zinc-800/30 rounded-xl px-4 py-2 text-zinc-400 cursor-pointer hover:bg-zinc-800/50 transition-colors border border-white/5">
          {t('mind')}
        </div>
      </div>

      {MOCK_POSTS.map((post) => (
        <article key={post.id} className="bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl transition-all hover:border-zinc-700/60">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={post.avatar} className="w-10 h-10 rounded-full border border-white/10" alt={post.author} />
              <div>
                <p className="font-bold text-sm tracking-tight">{post.author}</p>
                <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest">{post.timestamp}</p>
              </div>
            </div>
          </div>
          <div className="px-4 pb-4"><p className="text-sm leading-relaxed text-zinc-300 font-medium">{post.content}</p></div>
          {post.image && <div className="aspect-[4/3] w-full bg-zinc-800/50 overflow-hidden"><img src={post.image} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" alt="Post" /></div>}
          <div className="p-4 flex items-center justify-between border-t border-white/5">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-zinc-400 hover:text-red-500 transition-colors group">
                <svg className="w-6 h-6 group-active:scale-125 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                <span className="text-xs font-bold">{post.likes}</span>
              </button>
              <button className="flex items-center gap-2 text-zinc-400 hover:text-indigo-400 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                <span className="text-xs font-bold">{post.comments}</span>
              </button>
            </div>
            <button className="text-zinc-500 hover:text-white transition-colors"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg></button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Feed;
