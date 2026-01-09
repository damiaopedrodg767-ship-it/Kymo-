
import React from 'react';
import { useTranslation } from '../App';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">{t('installTitle')}</h2>
            <button onClick={onClose} className="p-2 text-zinc-500 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          
          <p className="text-zinc-400 text-sm mb-8">{t('installDesc')}</p>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.523 15.3414C17.0267 15.3414 16.6231 14.9378 16.6231 14.4415C16.6231 13.9452 17.0267 13.5416 17.523 13.5416C18.0193 13.5416 18.4229 13.9452 18.4229 14.4415C18.4229 14.9378 18.0193 15.3414 17.523 15.3414ZM6.477 15.3414C5.98072 15.3414 5.57712 14.9378 5.57712 14.4415C5.57712 13.9452 5.98072 13.5416 6.477 13.5416C6.97328 13.5416 7.37688 13.9452 7.37688 14.4415C7.37688 14.9378 6.97328 15.3414 6.477 15.3414ZM17.8465 11.201L19.4975 8.34142C19.6053 8.15467 19.5413 7.91572 19.3546 7.80789C19.1678 7.70006 18.9289 7.76403 18.821 7.95078L17.1423 10.8584C15.6843 10.1983 14.0044 9.83359 12.2312 9.83359C10.4581 9.83359 8.77817 10.1983 7.32014 10.8584L5.64141 7.95078C5.53358 7.76403 5.29463 7.70006 5.10788 7.80789C4.92113 7.91572 4.85716 8.15467 4.96499 8.34142L6.61592 11.201C3.65584 12.7214 1.63696 15.6882 1.50366 19.1664H22.9588C22.8255 15.6882 20.8066 12.7214 17.8465 11.201Z" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1">Android</h4>
                <p className="text-xs text-zinc-500">{t('androidInstr')}</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-zinc-200" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.89 1.22-2.14 1.08-3.38-1.06.04-2.34.71-3.1 1.6-.68.79-1.28 2.06-1.12 3.27 1.18.09 2.39-.6 3.14-1.49" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1">iOS / iPhone</h4>
                <p className="text-xs text-zinc-500">{t('iosInstr')}</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1">PC / Mac</h4>
                <p className="text-xs text-zinc-500">{t('pcInstr')}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 bg-zinc-800/30 flex justify-center">
          <button onClick={onClose} className="bg-indigo-600 text-white px-8 py-2 rounded-xl text-sm font-bold hover:bg-indigo-700 transition-colors">
            {t('close')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;
