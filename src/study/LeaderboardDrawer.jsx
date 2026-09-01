import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Info, X, ChevronLeft, ChevronRight, PlayCircle, ListChecks, ShieldCheck, TrendingDown, Lock } from 'lucide-react';
import { useWallet } from './WalletContext';

const slides = [
  {
    id: 1,
    title: "What is XP?",
    content: "XP, which stands for Experience Points, is like a special currency you earn by doing different things on our app.",
    icon: <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center transform rotate-45 shadow-[0_0_50px_rgba(255,255,255,0.2)] mb-8"><span className="transform -rotate-45 text-4xl font-black text-black">XP</span></div>
  },
  {
    id: 2,
    title: "How can you earn XP in lectures?",
    content: "You can get XP by watching videos, solving DPPs, or taking tests.",
    detail: "• You will earn 2 XP for every minute you watch in Live Lectures, Recorded Lectures and Khazana Videos.\n• XPs earned during videos depend on the actual watch time.",
    icon: <PlayCircle size={80} className="text-primary mb-8 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
  },
  {
    id: 3,
    title: "How can you earn XP in DPP?",
    content: "In DPPs, you earn XP for each correct answer. The XP varies based on your attempt number:",
    detail: "First Attempt: 3 XP\nRe-Attempt: 1 XP",
    icon: <ListChecks size={80} className="text-green-400 mb-8 drop-shadow-[0_0_20px_rgba(74,222,128,0.5)]" />
  },
  {
    id: 4,
    title: "You earn XP for each correct answer...",
    content: "The amount depends on your attempts and whether the test is Live or Non-Live -",
    detail: "Live Test: 5 XP for every correct answer.\nNon-Live First Attempt: 3 XP\nNon-Live Reattempt: 1 XP",
    icon: <Trophy size={80} className="text-gold mb-8 drop-shadow-[0_0_20px_rgba(250,204,21,0.5)]" />
  },
  {
    id: 5,
    title: "10 levels in the leaderboard",
    content: "Every student starts at the base level which is Honhar Level and has to get promoted to climb up the ladder.",
    detail: "From Bronze to Ruby, climb through 10 distinct tiers of achievement.",
    icon: (
      <div className="grid grid-cols-5 gap-4 mb-8">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-xs font-bold text-white border border-white/20">
            {i + 1}
          </div>
        ))}
      </div>
    )
  },
  {
    id: 6,
    title: "How does the leaderboard work?",
    content: "The leaderboard resets every 14 days. During this time, the XP you earn gets used up in determining your rank...",
    detail: "Safe Zone: No promotion or demotion.\nDemotion Zone: You drop down a level.",
    icon: (
      <div className="flex gap-4 mb-8 w-full px-8">
        <div className="flex-1 bg-green-500/10 border border-green-500/30 p-4 rounded-xl text-center">
          <ShieldCheck className="mx-auto text-green-400 mb-2" />
          <span className="text-green-400 font-bold text-sm">Safe Zone</span>
        </div>
        <div className="flex-1 bg-red-500/10 border border-red-500/30 p-4 rounded-xl text-center">
          <TrendingDown className="mx-auto text-red-400 mb-2" />
          <span className="text-red-400 font-bold text-sm">Demotion</span>
        </div>
      </div>
    )
  }
];

const LeaderboardDrawer = ({ isOpen, onClose }) => {
  const { xp } = useWallet();
  const [view, setView] = useState('main'); // 'main' or 'info'
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(s => s + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(s => s - 1);
    }
  };

  const drawerVariants = {
    closed: { x: '100%', opacity: 0 },
    open: { x: 0, opacity: 1, transition: { type: 'spring', damping: 25, stiffness: 200 } }
  };

  const fadeVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />
          
          {/* Drawer */}
          <motion.div
            variants={drawerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 h-full w-[450px] max-w-[100vw] bg-[#0a1f16] shadow-[-10px_0_50px_rgba(0,0,0,0.5)] z-[101] border-l border-green-800/50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-green-800/50">
              <div className="flex items-center gap-3">
                {view === 'info' && (
                  <button onClick={() => setView('main')} className="text-gray-400 hover:text-white transition-colors">
                    <ChevronLeft size={20} />
                  </button>
                )}
                <h2 className="text-xl font-bold text-white tracking-wide flex items-center gap-2">
                  {view === 'main' ? 'Leaderboard' : 'Information'}
                  {view === 'main' && <Trophy size={18} className="text-yellow-400" />}
                </h2>
              </div>
              <div className="flex items-center gap-4">
                {view === 'main' && (
                  <button onClick={() => setView('info')} className="text-gray-400 hover:text-white transition-colors">
                    <Info size={20} />
                  </button>
                )}
                <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden relative">
              <AnimatePresence mode="wait">
                {view === 'main' ? (
                  <motion.div 
                    key="main"
                    variants={fadeVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="p-8 flex flex-col items-center justify-center h-full text-center"
                  >
                    {xp < 10 ? (
                      // Locked State
                      <>
                        <div className="text-yellow-400 text-sm font-bold tracking-[0.2em] mb-4">~ INTRODUCING ~</div>
                        <h1 className="text-5xl font-black text-white mb-6">Level UP!</h1>
                        <p className="text-gray-400 text-sm mb-12">
                          Earn XP by watching videos, doing DPPs, and taking tests. Compete with friends and climb the leaderboard!
                        </p>
                        
                        <div className="bg-[#0f2e21] border border-green-800/50 w-full p-6 rounded-2xl">
                          <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center transform rotate-45 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                              <span className="transform -rotate-45 text-2xl font-black text-black">XP</span>
                            </div>
                          </div>
                          <h3 className="text-white font-bold mb-2 flex items-center justify-center gap-2">
                            <Lock size={16} className="text-yellow-400" /> Leaderboard Locked
                          </h3>
                          <p className="text-sm text-gray-400 mb-6">Collect 10 XP to unlock leaderboard!</p>
                          <button className="w-full py-3 bg-yellow-400/20 text-yellow-400 font-bold rounded-xl hover:bg-yellow-400/30 transition-colors border border-yellow-400/30">
                            Earn XP Now
                          </button>
                        </div>
                      </>
                    ) : (
                      // Unlocked State (Demoted Example)
                      <>
                        <div className="w-48 h-48 rounded-full border border-red-500/30 flex items-center justify-center relative mb-8 group shadow-[0_0_30px_rgba(239,68,68,0.1)] mt-[-40px]">
                          <div className="absolute inset-0 bg-red-500/5 rounded-full blur-xl"></div>
                          <div className="w-24 h-28 bg-[#8b4513] rounded-xl flex flex-col items-center justify-center border-4 border-[#cd7f32] shadow-[0_0_20px_rgba(0,0,0,0.5)] z-10">
                            <span className="text-4xl font-black text-white drop-shadow-md">1</span>
                          </div>
                        </div>
                        
                        <h2 className="text-3xl font-black text-white mb-4">You were demoted!</h2>
                        <p className="text-gray-400 text-sm max-w-xs mx-auto leading-relaxed mb-12">
                          A step backwards, two steps forward! Stay positive, learn, and soon you'll do even better. You've got this!
                        </p>

                        <div className="w-full">
                          <div className="flex text-xs font-bold uppercase tracking-wider mb-2">
                            <span className="flex-1 text-red-400">Demote</span>
                            <span className="flex-1 text-yellow-400">Safe</span>
                            <span className="flex-1 text-green-400">Promo</span>
                          </div>
                          <div className="flex h-2 rounded-full overflow-hidden bg-white/5">
                            <div className="flex-1 bg-red-500 relative">
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg"></div>
                            </div>
                            <div className="flex-1 bg-yellow-500"></div>
                            <div className="flex-1 bg-green-500"></div>
                          </div>
                        </div>
                      </>
                    )}
                  </motion.div>
                ) : (
                  <motion.div 
                    key="info"
                    variants={fadeVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="p-8 h-full flex flex-col"
                  >
                    {/* Progress Bar */}
                    <div className="flex gap-2 mb-12">
                      {slides.map((_, i) => (
                        <div key={i} className="h-1 flex-1 bg-green-800/50 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-yellow-400"
                            initial={{ width: 0 }}
                            animate={{ width: i <= currentSlide ? '100%' : '0%' }}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center text-center mt-[-40px]">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentSlide}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                          className="flex flex-col items-center w-full"
                        >
                          {slides[currentSlide].icon}
                          <h3 className="text-xl font-bold text-white mb-4">{slides[currentSlide].title}</h3>
                          <p className="text-gray-300 text-sm leading-relaxed mb-4">{slides[currentSlide].content}</p>
                          {slides[currentSlide].detail && (
                            <p className="text-green-500/70 text-xs leading-relaxed whitespace-pre-line bg-green-900/30 p-4 rounded-xl border border-green-800/50 w-full">
                              {slides[currentSlide].detail}
                            </p>
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4 mt-8 pt-6 border-t border-green-800/50">
                      <button 
                        onClick={handlePrev}
                        disabled={currentSlide === 0}
                        className="flex-1 py-3 bg-[#0f2e21] hover:bg-green-800/50 text-white font-bold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed border border-green-800/50"
                      >
                        &lt; Previous
                      </button>
                      <button 
                        onClick={currentSlide === slides.length - 1 ? () => setView('main') : handleNext}
                        className="flex-1 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-xl transition-colors"
                      >
                        {currentSlide === slides.length - 1 ? 'Close' : 'Next >'}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default LeaderboardDrawer;
