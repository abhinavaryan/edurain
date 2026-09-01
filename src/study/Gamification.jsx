import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Flame, Target, Zap, CircleDashed } from 'lucide-react';
import { useWallet } from './WalletContext.jsx';

const Gamification = () => {
  const { addPits, spendPits, pits } = useWallet();
  const [spinning, setSpinning] = useState(false);
  const [spinResult, setSpinResult] = useState(null);
  const [streak] = useState(12);

  const mockLeaderboard = [
    { rank: 1, name: "Rahul S.", xp: 14500, pits: 2300, avatar: "Felix" },
    { rank: 2, name: "Priya M.", xp: 13200, pits: 2100, avatar: "Aneka" },
    { rank: 3, name: "Arjun K.", xp: 12800, pits: 1950, avatar: "Jocelyn" },
    { rank: 4, name: "Sneha R.", xp: 11500, pits: 1800, avatar: "Liam" },
    { rank: 5, name: "You", xp: 10200, pits: pits, avatar: "Felix" },
  ];

  const handleSpin = () => {
    if (spinning) return;
    
    if (!spendPits(20)) return;

    setSpinning(true);
    setSpinResult(null);
    
    // Mock RNG logic
    setTimeout(() => {
      const rewards = [10, 50, 100, 500, 0];
      const win = rewards[Math.floor(Math.random() * rewards.length)];
      setSpinResult(win);
      if (win > 0) addPits(win);
      setSpinning(false);
    }, 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-8 max-w-7xl mx-auto flex flex-col gap-8"
    >
      <div>
        <h1 className="text-4xl font-black text-white tracking-tight flex items-center gap-3">
          <Trophy className="text-gold" size={32} />
          Proving Grounds
        </h1>
        <p className="text-gray-400 mt-2 text-lg">Elite Gamification & Global Leaderboard</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Streak & Spin */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          
          {/* Daily Streak */}
          <div className="glass-panel p-6 rounded-2xl border-warning/20 bg-warning/5 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-warning opacity-20 blur-3xl"></div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Flame className="text-warning" size={24} fill="#F97316" />
                  Daily Streak
                </h3>
                <p className="text-sm text-gray-400 mt-1">Don't break the chain</p>
              </div>
              <div className="text-4xl font-black text-white">{streak}</div>
            </div>
            
            <div className="flex justify-between mt-6">
              {['M','T','W','T','F','S','S'].map((day, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    i < 5 ? 'bg-warning text-white' : 'bg-surface border border-white/10 text-gray-500'
                  }`}>
                    {i < 5 ? <Zap size={14} fill="currentColor" /> : day}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lucky Spin */}
          <div className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center py-10 relative overflow-hidden">
             <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-elite opacity-20 blur-3xl"></div>
             
             <motion.div 
               animate={{ rotate: spinning ? 3600 : 0 }}
               transition={{ duration: 2, ease: "circOut" }}
               className="mb-6 relative"
             >
               <CircleDashed size={120} className="text-elite opacity-50" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-4xl">💎</span>
               </div>
             </motion.div>

             <h3 className="text-xl font-bold text-white mb-2">Oracle's Roulette</h3>
             <p className="text-sm text-gray-400 mb-6">Spend 20 Pits to spin for a chance to win up to 500 Pits.</p>

             <button 
               onClick={handleSpin}
               disabled={spinning}
               className="bg-elite text-white font-bold py-3 px-8 rounded-full hover:bg-purple-500 transition-colors disabled:opacity-50 w-full"
             >
               {spinning ? 'Spinning...' : 'Spin (Cost: 20 PITS)'}
             </button>

             {spinResult !== null && (
               <motion.div 
                 initial={{ scale: 0, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 className={`mt-4 font-bold text-lg ${spinResult > 0 ? 'text-gold' : 'text-gray-500'}`}
               >
                 {spinResult > 0 ? `+${spinResult} Pits Won!` : 'No luck this time.'}
               </motion.div>
             )}
          </div>
        </div>

        {/* Right Column: Global Leaderboard */}
        <div className="lg:col-span-2 glass-panel rounded-2xl overflow-hidden flex flex-col">
          <div className="p-6 border-b border-white/10 flex justify-between items-center bg-surface/50">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Target className="text-primary" size={24} />
              Global Leaderboard
            </h3>
            <select className="bg-surface border border-white/10 text-sm text-white rounded-md px-3 py-1.5 outline-none">
              <option>This Week</option>
              <option>All Time</option>
            </select>
          </div>
          
          <div className="flex-1 p-6">
            <div className="grid grid-cols-12 text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 px-4">
              <div className="col-span-2">Rank</div>
              <div className="col-span-5">Operative</div>
              <div className="col-span-3 text-right">Experience</div>
              <div className="col-span-2 text-right">Pits</div>
            </div>

            <div className="flex flex-col gap-2">
              {mockLeaderboard.map((user, i) => (
                <div key={i} className={`grid grid-cols-12 items-center p-4 rounded-xl border transition-colors ${
                  user.name === "You" ? 'bg-primary/10 border-primary/30' : 'bg-surface border-white/5 hover:border-white/20'
                }`}>
                  <div className="col-span-2 font-black text-lg text-gray-400">
                    #{user.rank}
                  </div>
                  <div className="col-span-5 flex items-center gap-3">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.avatar}`} alt="avatar" className="w-8 h-8 rounded-full bg-white/10" />
                    <span className="font-bold text-gray-200">{user.name}</span>
                  </div>
                  <div className="col-span-3 text-right font-mono font-medium text-gray-400">
                    {user.xp.toLocaleString()} XP
                  </div>
                  <div className="col-span-2 text-right font-bold text-gold flex items-center justify-end gap-1">
                    {user.pits.toLocaleString()} <span className="text-xs">🪙</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Gamification;
