import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Maximize, Clock, ShieldAlert, Lock } from 'lucide-react';
import { useWallet } from './WalletContext.jsx';
import { useFreemium } from './FreemiumContext.jsx';

const TheForge = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [watchTime, setWatchTime] = useState(0);
  const [pitsEarned, setPitsEarned] = useState(0);
  const { addPits, addXp } = useWallet();
  const { incrementWatchTime, isLimitReached, isSubscribed, upgradePlan } = useFreemium();
  const videoRef = useRef(null);
  const watchTimerRef = useRef(null);

  // Core Watch-Time Engine Logic
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && isPlaying) {
        setIsPlaying(false);
        if (videoRef.current) videoRef.current.pause();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    if (isPlaying && !isLimitReached) {
      watchTimerRef.current = setInterval(() => {
        setWatchTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(watchTimerRef.current);
    }

    return () => {
      clearInterval(watchTimerRef.current);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isPlaying, isLimitReached]);

  // Handle Freemium consumption & Gamification on watchTime change
  useEffect(() => {
    if (watchTime > 0) {
      const canContinue = incrementWatchTime(1);
      if (!canContinue) {
        setIsPlaying(false);
        if (videoRef.current) videoRef.current.pause();
      }

      if (watchTime % 60 === 0) {
        setPitsEarned((p) => p + 1);
        addPits(1);
        addXp(5); // 5 XP per minute
      }
    }
  }, [watchTime, incrementWatchTime, addPits, addXp]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const togglePlay = () => {
    if (isLimitReached) return;
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="p-8 max-w-7xl mx-auto h-full flex flex-col gap-6"
    >
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
            <span className="text-elite">The Forge</span>
            <span className="text-sm font-medium bg-elite/20 text-elite px-3 py-1 rounded-full border border-elite/30">
              Active Session
            </span>
          </h1>
          <p className="text-gray-400 mt-2">Advanced Thermodynamics - Lecture 04</p>
        </div>

        <div className="flex gap-4">
          <div className="glass-panel px-4 py-2 rounded-lg flex items-center gap-3">
            <Clock className="text-primary" size={20} />
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400 uppercase font-bold">Focus Time</span>
              <span className="text-white font-mono font-bold leading-none">{formatTime(watchTime)}</span>
            </div>
          </div>
          
          <div className="glass-panel px-4 py-2 rounded-lg flex items-center gap-3 border-gold/30">
            <span className="text-xl">🪙</span>
            <div className="flex flex-col">
              <span className="text-[10px] text-gold/70 uppercase font-bold">Pits Mined</span>
              <span className="text-gold font-black leading-none">+{pitsEarned}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex-1 bg-black rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center group">
        {/* Anti-Piracy Watermark Overlay */}
        <div className="absolute top-1/4 left-1/4 text-white/5 font-mono text-2xl rotate-12 pointer-events-none select-none">
          STU-99281-AUTH
        </div>
        
        {/* Placeholder for actual Video element */}
        <video 
          ref={videoRef}
          src="/temp_video.mp4" 
          className="w-full h-full object-cover"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
          loop
        />
        
        {/* Paywall Overlay */}
        {isLimitReached && !isSubscribed && (
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center z-20">
            <div className="bg-surface border border-white/10 p-8 rounded-3xl max-w-md text-center shadow-2xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 blur-3xl"></div>
              <Lock size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-black text-white mb-2">You reached your free plan limit</h3>
              <p className="text-gray-400 mb-6 text-sm">Upgrade for unlimited access to premium lectures, mock tests, and The Oracle AI.</p>
              
              <button 
                onClick={upgradePlan}
                className="w-full bg-gradient-to-r from-primary to-emerald-400 hover:from-emerald-400 hover:to-primary text-black font-black py-3 rounded-xl transition-all shadow-lg shadow-primary/20 mb-3"
              >
                Upgrade to Premium
              </button>
              
              <button 
                onClick={upgradePlan}
                className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold py-3 rounded-xl transition-all text-sm"
              >
                View Subscription Plans
              </button>
            </div>
          </div>
        )}

        {/* Custom Video Controls Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-4">
          <button 
            onClick={togglePlay}
            className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-transform hover:scale-105"
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
          </button>
          
          <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden cursor-pointer">
            <div className="h-full bg-primary w-1/3"></div>
          </div>
          
          <button 
            onClick={() => {
              if (document.fullscreenElement) {
                document.exitFullscreen();
              } else if (videoRef.current) {
                videoRef.current.requestFullscreen();
              }
            }}
            aria-label="Toggle Fullscreen"
            className="text-white hover:text-primary transition-colors"
          >
            <Maximize size={24} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="glass-panel p-5 rounded-xl">
          <h3 className="text-lg font-bold text-white mb-4">Lecture Intelligence</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            This module covers the second law of thermodynamics. The Oracle predicts a high probability of questions from this specific section in the upcoming JEE Advanced paper. 
            Maintain focus to earn maximum Pits.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TheForge;
