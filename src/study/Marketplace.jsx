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
    { id: 1, title: 'JEE Physics Cheatsheet', cost: 150, type: 'pdf', color: 'from-blue-500/20 to-blue-900/20', borderColor: 'border-blue-500/30' },
    { id: 2, title: '1-on-1 Mentorship Session', cost: 5000, type: 'live', color: 'from-purple-500/20 to-purple-900/20', borderColor: 'border-purple-500/30' },
    { id: 3, title: 'Mock Test Pack (Advanced)', cost: 800, type: 'test', color: 'from-red-500/20 to-red-900/20', borderColor: 'border-red-500/30' },
    { id: 4, title: 'Premium Dark Avatar', cost: 300, type: 'cosmetic', color: 'from-emerald-500/20 to-emerald-900/20', borderColor: 'border-emerald-500/30' }
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
      className="p-8 max-w-7xl mx-auto flex flex-col gap-8"
    >
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black text-white tracking-tight flex items-center gap-3">
            <ShoppingBag className="text-primary" size={32} />
            The Vault (Marketplace)
          </h1>
          <p className="text-gray-400 mt-2 text-lg">Spend your hard-earned PITS on premium rewards.</p>
        </div>
      </div>

      {purchaseMsg && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg font-bold text-center ${purchaseMsg.includes('Insufficient') ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-primary/20 text-primary border border-primary/30'}`}
        >
          {purchaseMsg}
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {rewards.map((reward) => (
          <div key={reward.id} className={`glass-panel p-6 rounded-2xl flex flex-col justify-between bg-gradient-to-br ${reward.color} border ${reward.borderColor} hover:scale-105 transition-transform duration-300 relative overflow-hidden group`}>
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white opacity-5 blur-3xl group-hover:opacity-10 transition-opacity"></div>
            
            <div>
              <div className="bg-black/40 w-10 h-10 rounded-full flex items-center justify-center mb-4 border border-white/10">
                {reward.type === 'pdf' && <ExternalLink size={18} className="text-blue-400" />}
                {reward.type === 'live' && <BrainCircuit size={18} className="text-purple-400" />}
                {reward.type === 'test' && <Lock size={18} className="text-red-400" />}
                {reward.type === 'cosmetic' && <span className="text-emerald-400">✨</span>}
              </div>
              <h3 className="text-lg font-bold text-white leading-tight mb-2">{reward.title}</h3>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="font-black text-gold flex items-center gap-1">
                {reward.cost} <span className="text-xs font-normal">PITS</span>
              </div>
              <button 
                onClick={() => handlePurchase(reward)}
                className="bg-white/10 hover:bg-primary/80 hover:text-white text-gray-300 px-4 py-2 rounded-lg text-sm font-bold transition-colors"
              >
                {entitlements[reward.id] ? 'Open' : 'Unlock'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 glass-panel p-8 rounded-3xl border-elite/30 bg-elite/5 flex flex-col lg:flex-row items-center gap-8 relative overflow-hidden">
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-elite opacity-20 blur-[100px]"></div>
        
        <div className="bg-black/50 p-6 rounded-full border border-elite/20">
          <BrainCircuit size={48} className="text-elite" />
        </div>
        
        <div className="flex-1">
          <h2 className="text-2xl font-black text-white mb-2">The Oracle (AI Insights)</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Your focus metrics indicate a 15% drop in attention during Physics derivations. The Oracle recommends purchasing the <strong className="text-white">Physics Cheatsheet</strong> from The Vault and spending 20 minutes in The Forge for review.
          </p>
          <div className="flex gap-4">
            <div className="bg-black/40 px-4 py-2 rounded-lg border border-white/5 flex flex-col">
              <span className="text-xs text-gray-500 font-bold uppercase">Focus Score</span>
              <span className="text-xl font-black text-white">84<span className="text-sm text-gray-500">/100</span></span>
            </div>
            <div className="bg-black/40 px-4 py-2 rounded-lg border border-white/5 flex flex-col">
              <span className="text-xs text-gray-500 font-bold uppercase">Burnout Risk</span>
              <span className="text-xl font-black text-primary">Low</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Marketplace;
