import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, BrainCircuit, Lock, ExternalLink } from 'lucide-react';
import { useWallet } from './WalletContext.jsx';

const Marketplace = () => {
  const { pits, spendPits } = useWallet();
  const [purchaseMsg, setPurchaseMsg] = useState(null);
  const [entitlements, setEntitlements] = useState(() => {
    try {
      const saved = localStorage.getItem('eduRain_entitlements');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const rewards = [
    { id: 1, title: 'JEE Physics Cheatsheet', cost: 150, type: 'pdf', color: 'from-blue-900/20 to-transparent', borderColor: 'border-blue-800/50' },
    { id: 2, title: '1-on-1 Mentorship Session', cost: 5000, type: 'live', color: 'from-purple-900/20 to-transparent', borderColor: 'border-purple-800/50' },
    { id: 3, title: 'Mock Test Pack (Advanced)', cost: 800, type: 'test', color: 'from-red-900/20 to-transparent', borderColor: 'border-red-800/50' },
    { id: 4, title: 'Premium Dark Avatar', cost: 300, type: 'cosmetic', color: 'from-emerald-900/20 to-transparent', borderColor: 'border-emerald-800/50' }
  ];

  const handlePurchase = (item) => {
    if (entitlements[item.id]) {
      setPurchaseMsg(`${item.title} is already owned.`);
      setTimeout(() => setPurchaseMsg(null), 3000);
      return;
    }

    if (spendPits(item.cost)) {
      const nextEntitlements = { ...entitlements, [item.id]: true };
      setEntitlements(nextEntitlements);
      try {
        localStorage.setItem('eduRain_entitlements', JSON.stringify(nextEntitlements));
      } catch (e) {}
      setPurchaseMsg(`Successfully unlocked: ${item.title}`);
    } else {
      setPurchaseMsg(`Insufficient PITS for ${item.title}`);
    }
    setTimeout(() => setPurchaseMsg(null), 3000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="p-8 max-w-7xl mx-auto flex flex-col gap-8 text-white"
    >
      <div className="flex justify-between items-end border-b border-green-800/50 pb-6">
        <div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <ShoppingBag className="text-yellow-400" size={32} />
            The Vault
          </h1>
          <p className="text-green-400/70 mt-2 text-lg">Spend your hard-earned PITS on premium resources.</p>
        </div>
      </div>

      {purchaseMsg && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg font-bold text-center shadow-sm ${purchaseMsg.includes('Insufficient') ? 'bg-red-900/20 text-red-400 border border-red-800/50' : 'bg-green-900/20 text-green-400 border border-green-800/50'}`}
        >
          {purchaseMsg}
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {rewards.map((reward) => (
          <div key={reward.id} className={`bg-[#0f2e21] p-6 rounded-2xl flex flex-col justify-between bg-gradient-to-br ${reward.color} border ${reward.borderColor} shadow-lg shadow-black/20 hover:border-yellow-500/50 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group`}>
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white opacity-5 blur-3xl group-hover:opacity-10 transition-opacity"></div>
            
            <div className="relative z-10">
              <div className="bg-black/30 w-10 h-10 rounded-full flex items-center justify-center mb-4 border border-white/10 shadow-sm">
                {reward.type === 'pdf' && <ExternalLink size={18} className="text-blue-400" />}
                {reward.type === 'live' && <BrainCircuit size={18} className="text-purple-400" />}
                {reward.type === 'test' && <Lock size={18} className="text-red-400" />}
                {reward.type === 'cosmetic' && <span className="text-emerald-400">✨</span>}
              </div>
              <h3 className="text-lg font-bold text-white leading-tight mb-2 group-hover:text-yellow-400 transition-colors">{reward.title}</h3>
            </div>

            <div className="mt-6 pt-4 border-t border-green-800/50 flex items-center justify-between relative z-10">
              <div className="font-black text-yellow-400 flex items-center gap-1">
                {reward.cost} <span className="text-xs font-bold">PITS</span>
              </div>
              <button 
                onClick={() => handlePurchase(reward)}
                className="bg-yellow-400/10 hover:bg-yellow-400 hover:text-black border border-yellow-400/30 text-yellow-400 px-4 py-2 rounded-lg text-sm font-bold transition-colors shadow-sm"
              >
                {entitlements[reward.id] ? 'Open' : 'Unlock'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-[#0f2e21] p-8 rounded-3xl border border-green-800/50 shadow-lg shadow-black/20 bg-gradient-to-br from-green-900/20 to-transparent flex flex-col lg:flex-row items-center gap-8 relative overflow-hidden">
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-yellow-400 opacity-5 blur-[100px]"></div>
        
        <div className="bg-black/40 p-6 rounded-full border border-green-800/50 shadow-sm relative z-10">
          <BrainCircuit size={48} className="text-yellow-400" />
        </div>
        
        <div className="flex-1 relative z-10">
          <h2 className="text-2xl font-black text-white mb-2">The Oracle (AI Insights)</h2>
          <p className="text-green-400/70 leading-relaxed mb-4">
            Your focus metrics indicate a 15% drop in attention during Physics derivations. The Oracle recommends purchasing the <strong className="text-white">Physics Cheatsheet</strong> from The Vault and spending 20 minutes in The Forge for review.
          </p>
          <div className="flex gap-4">
            <div className="bg-black/30 px-4 py-2 rounded-lg border border-green-800/50 shadow-sm flex flex-col">
              <span className="text-xs text-green-500 font-bold uppercase">Focus Score</span>
              <span className="text-xl font-black text-white">84<span className="text-sm text-green-500 font-bold">/100</span></span>
            </div>
            <div className="bg-black/30 px-4 py-2 rounded-lg border border-green-800/50 shadow-sm flex flex-col">
              <span className="text-xs text-green-500 font-bold uppercase">Burnout Risk</span>
              <span className="text-xl font-black text-green-400">Low</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Marketplace;
