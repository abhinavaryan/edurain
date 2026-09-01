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
          <Trophy className="text-yellow-400" size={32} />
          Proving Grounds
        </h1>
        <p className="text-green-400/70 mt-2 text-lg">Elite Gamification & Global Leaderboard</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Streak & Spin */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          
          {/* Daily Streak */}
          <div className="bg-[#0f2e21] backdrop-blur-md p-6 rounded-2xl border border-yellow-500/50 bg-yellow-500/10 shadow-sm relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-yellow-500 opacity-10 blur-3xl"></div>
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Flame className="text-yellow-400" size={24} fill="#EAB308" />
                  Daily Streak
                </h3>
                <p className="text-sm text-green-400/70 mt-1">Don't break the chain</p>
              </div>
              <div className="text-4xl font-black text-white">{streak}</div>
            </div>
            
            <div className="flex justify-between mt-6 relative z-10">
              {['M','T','W','T','F','S','S'].map((day, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    i < 5 ? 'bg-yellow-500 text-white shadow-sm' : 'bg-[#0f2e21] border border-green-800/50 text-green-500'
                  }`}>
                    {i < 5 ? <Zap size={14} fill="currentColor" /> : day}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lucky Spin */}
          <div className="bg-[#0f2e21] backdrop-blur-md p-6 rounded-2xl border border-green-800/50 shadow-sm flex flex-col items-center justify-center text-center py-10 relative overflow-hidden">
             <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-yellow-400 opacity-10 blur-3xl"></div>
             
             <motion.div 
               animate={{ rotate: spinning ? 3600 : 0 }}
               transition={{ duration: 2, ease: "circOut" }}
               className="mb-6 relative z-10"
             >
               <CircleDashed size={120} className="text-yellow-400 opacity-20" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-4xl">💎</span>
               </div>
             </motion.div>

             <h3 className="text-xl font-bold text-white mb-2 relative z-10">Oracle's Roulette</h3>
             <p className="text-sm text-green-400/70 mb-6 relative z-10">Spend 20 Pits to spin for a chance to win up to 500 Pits.</p>

             <button 
               onClick={handleSpin}
               disabled={spinning}
               className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-full hover:bg-yellow-500 shadow-md transition-colors disabled:opacity-50 w-full relative z-10"
             >
               {spinning ? 'Spinning...' : 'Spin (Cost: 20 PITS)'}
             </button>

             {spinResult !== null && (
               <motion.div 
                 initial={{ scale: 0, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 className={`mt-4 font-bold text-lg relative z-10 ${spinResult > 0 ? 'text-yellow-400' : 'text-gray-500'}`}
               >
                 {spinResult > 0 ? `+${spinResult} Pits Won!` : 'No luck this time.'}
               </motion.div>
             )}
          </div>
        </div>

        {/* Right Column: Global Leaderboard */}
        <div className="lg:col-span-2 bg-[#0f2e21] backdrop-blur-md border border-green-800/50 shadow-sm rounded-2xl overflow-hidden flex flex-col">
          <div className="p-6 border-b border-green-800/50 flex justify-between items-center bg-green-900/30">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Target className="text-yellow-400" size={24} />
              Global Leaderboard
            </h3>
            <select className="bg-[#0a1f16] border border-green-800/50 shadow-sm text-sm text-white rounded-md px-3 py-1.5 outline-none">
              <option>This Week</option>
              <option>All Time</option>
            </select>
          </div>
          
          <div className="flex-1 p-6">
            <div className="grid grid-cols-12 text-xs font-bold text-green-500 uppercase tracking-wider mb-4 px-4">
              <div className="col-span-2">Rank</div>
              <div className="col-span-5">Operative</div>
              <div className="col-span-3 text-right">Experience</div>
              <div className="col-span-2 text-right">Pits</div>
            </div>

            <div className="flex flex-col gap-2">
              {mockLeaderboard.map((user, i) => (
                <div key={i} className={`grid grid-cols-12 items-center p-4 rounded-xl border transition-colors ${
                  user.name === "You" ? 'bg-yellow-400/10 border-yellow-400/30 shadow-sm' : 'bg-[#0a1f16] border-green-800/50 hover:border-yellow-500/50'
                }`}>
                  <div className="col-span-2 font-black text-lg text-green-600/70">
                    #{user.rank}
                  </div>
                  <div className="col-span-5 flex items-center gap-3">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.avatar}`} alt="avatar" className="w-8 h-8 rounded-full bg-[#0f2e21] border border-green-800/50" />
                    <span className="font-bold text-white">{user.name}</span>
                  </div>
                  <div className="col-span-3 text-right font-mono font-medium text-green-400">
                    {user.xp.toLocaleString()} XP
                  </div>
                  <div className="col-span-2 text-right font-bold text-yellow-400 flex items-center justify-end gap-1">
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
