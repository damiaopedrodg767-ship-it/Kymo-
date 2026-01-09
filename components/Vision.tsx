
import React, { useRef, useState } from 'react';
import { Video } from '../types';
import { useTranslation } from '../App';

const MOCK_VIDEOS: Video[] = [
  { id: '1', url: 'https://cdn.pixabay.com/video/2023/11/04/187806-880946153_tiny.mp4', author: '@mountain_explorer', description: 'Waking up to this view is priceless. ⛰️✨ #nature #adventure', likes: '1.2M', comments: '12K' },
  { id: '2', url: 'https://cdn.pixabay.com/video/2021/04/12/70874-537463765_tiny.mp4', author: '@urban_vibes', description: 'Night walks in the neon city. #cyberpunk #nexus', likes: '450K', comments: '5.2K' },
  { id: '3', url: 'https://cdn.pixabay.com/video/2020/09/24/50860-463878411_tiny.mp4', author: '@cook_with_me', description: 'Quickest pasta recipe you will ever see! 🍝 #foodie #nexuschef', likes: '890K', comments: '22K' },
];

const VisionCard: React.FC<{ video: Video }> = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useTranslation();

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause(); else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative h-full w-full snap-start bg-black flex items-center justify-center">
      <video ref={videoRef} loop playsInline onClick={togglePlay} className="h-full w-full object-cover cursor-pointer" src={video.url} />
      {!isPlaying && <div className="absolute inset-0 flex items-center justify-center pointer-events-none"><div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center"><svg className="w-10 h-10 text-white fill-white ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg></div></div>}
      <div className="absolute bottom-20 left-4 right-16 pointer-events-none">
        <h3 className="font-bold text-white mb-2">{video.author}</h3>
        <p className="text-sm text-zinc-100 line-clamp-2">{video.description}</p>
      </div>
      <div className="absolute bottom-20 right-4 flex flex-col gap-6 items-center">
        <div className="flex flex-col items-center">
           <button className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"><svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg></button>
           <span className="text-[10px] font-bold text-white mt-1">{video.likes}</span>
        </div>
        <div className="flex flex-col items-center">
           <button className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-indigo-500 transition-colors"><svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" /></svg></button>
           <span className="text-[10px] font-bold text-white mt-1">{video.comments}</span>
        </div>
        <div className="flex flex-col items-center">
           <button className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"><svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z" /></svg></button>
           <span className="text-[10px] font-bold text-white mt-1">{t('share')}</span>
        </div>
      </div>
    </div>
  );
};

const Vision: React.FC = () => {
  return (
    <div className="h-full w-full snap-y snap-mandatory overflow-y-scroll bg-black no-scrollbar">
      {MOCK_VIDEOS.map((video) => <VisionCard key={video.id} video={video} />)}
    </div>
  );
};

export default Vision;
