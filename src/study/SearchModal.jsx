import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Lock, PlayCircle } from 'lucide-react';
import { useFreemium } from './FreemiumContext.jsx';

const MOCK_RESULTS = [
  { id: 1, title: 'Ap class 10 - Maths', type: 'Playlist', count: '4 videos', author: 'Swetha Ma\'am', bg: 'bg-blue-900', img: 'https://images.unsplash.com/photo-1632559646974-9541b0b533a1?w=400&q=80' },
  { id: 2, title: 'Class 10 Trigonometry REVIEW', type: 'Video', count: '1 video', author: 'Ritik Mishra Sir', bg: 'bg-emerald-900', img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80' },
  { id: 3, title: 'Complete Mathematics FOR CLASS 10', type: 'Playlist', count: '2 videos', author: 'Ritik Mishra Sir', bg: 'bg-purple-900', img: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&q=80' },
  { id: 4, title: 'Complete SST for Class 10th', type: 'Playlist', count: '19 videos', author: 'SST Master', bg: 'bg-red-900', img: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&q=80' },
  { id: 5, title: 'Complete Physics for Class 10', type: 'Playlist', count: '4 videos', author: 'Rakshak Sir', bg: 'bg-indigo-900', img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&q=80' },
  { id: 6, title: 'Complete Hindi FOR CLASS 10', type: 'Playlist', count: '1 video', author: 'Garima Mishra', bg: 'bg-orange-900', img: 'https://images.unsplash.com/photo-1546410531-bea5acadb0a1?w=400&q=80' },
  { id: 7, title: 'COMPLETE ENGLISH FOR CLASS 10th', type: 'Playlist', count: '3 videos', author: 'Anurag Tyagi', bg: 'bg-sky-900', img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&q=80' },
  { id: 8, title: 'Complete Biology for Class 10', type: 'Playlist', count: '5 videos', author: 'Samridhi', bg: 'bg-pink-900', img: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400&q=80' },
];

export const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('class 10');
  const { isSubscribed, upgradePlan } = useFreemium();

  // Focus input on mount (simulated)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md p-4 md:p-10 flex justify-center"
        >
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="w-full max-w-6xl flex flex-col"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-black text-white">Search</h2>
              <button 
                onClick={onClose}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
              >
                <X size={24} />
              </button>
            </div>

            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                className="w-full bg-surface border border-primary/50 rounded-xl py-4 pl-12 pr-12 text-lg text-white focus:outline-none focus:border-primary transition-colors shadow-[0_0_15px_rgba(59,130,246,0.2)]"
              />
              {query && (
                <button 
                  onClick={() => setQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            <div className="flex-1 overflow-y-auto pr-2 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {MOCK_RESULTS.map((item) => (
                <motion.div 
                  key={item.id}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group cursor-pointer flex flex-col"
                >
                  <div className={`relative h-40 ${item.bg} rounded-t-xl overflow-hidden border border-white/10 border-b-0`}>
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-4 flex flex-col justify-center items-center text-center">
                      <h3 className="text-white font-black text-lg drop-shadow-md leading-tight uppercase tracking-wider">{item.title}</h3>
                    </div>

                    {/* Premium Lock */}
                    <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm p-1.5 rounded-lg border border-white/10">
                      {isSubscribed ? <PlayCircle size={14} className="text-green-400" /> : <Lock size={14} className="text-gray-300" />}
                    </div>

                    {/* Play Button overlay */}
                    <div className="absolute bottom-2 left-2 bg-rose-500 text-white p-1.5 rounded-full shadow-lg">
                      <PlayCircle size={16} />
                    </div>
                  </div>
                  
                  <div className="bg-surface border border-white/10 border-t-0 rounded-b-xl p-4 flex-1 flex flex-col justify-between">
                    <h4 className="text-white font-bold text-sm mb-2 line-clamp-1 group-hover:text-primary transition-colors">{item.title}</h4>
                    <div className="text-xs text-gray-400 flex items-center gap-1">
                      <span>{item.type}</span>
                      <span>•</span>
                      <span>{item.count}</span>
                      <span>•</span>
                      <span className="truncate">{item.author}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {!isSubscribed && (
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-xl border border-gold/30 p-4 rounded-2xl flex items-center gap-4 shadow-2xl">
                <span className="text-white text-sm font-semibold">Unlock all premium locked content</span>
                <button 
                  onClick={upgradePlan}
                  className="bg-gold text-black font-bold px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors shadow-[0_0_15px_rgba(250,204,21,0.3)]"
                >
                  Upgrade to PRO
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
