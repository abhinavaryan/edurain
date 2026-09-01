import React from 'react';
import { motion } from 'framer-motion';
import { useFreemium } from './FreemiumContext.jsx';
import { ShoppingBag, ChevronRight } from 'lucide-react';

const Purchases = () => {
  const { isSubscribed, upgradePlan } = useFreemium();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-8 max-w-5xl mx-auto w-full"
    >
      <div className="mb-10 border-b border-slate-200 pb-6">
        <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight mb-6">My Purchases</h1>
        
        <div className="flex gap-4">
          <button className="px-6 py-2 bg-green-500/10 text-green-700 border border-green-500/20 shadow-sm rounded-lg font-bold text-sm tracking-wide">
            EduRain Orders
          </button>
          <button className="px-6 py-2 bg-white/80 hover:bg-white border border-slate-200 shadow-sm rounded-lg text-slate-500 font-semibold text-sm transition-colors tracking-wide">
            Store Orders
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {!isSubscribed ? (
          // Empty State
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6 border border-slate-200 shadow-sm">
              <ShoppingBag size={40} className="text-slate-400" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">No active purchases yet</h2>
            <p className="text-slate-500 mb-8 max-w-md">Upgrade to PRO to unlock premium batches, unlimited pits, and exclusive features across all your devices.</p>
            
            <button 
              onClick={upgradePlan}
              className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold px-8 py-3 rounded-full transition-all hover:scale-105 shadow-lg shadow-yellow-400/30 flex items-center gap-2"
            >
              Explore PRO Plans <ChevronRight size={18} />
            </button>
          </motion.div>
        ) : (
          // Active PRO Subscription Display
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/80 backdrop-blur-md border border-yellow-400/30 shadow-xl shadow-black/5 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between group overflow-hidden relative gap-6"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 blur-3xl rounded-full pointer-events-none"></div>
            
            <div className="flex items-center gap-6 relative z-10 w-full md:w-auto">
              <div className="w-32 h-20 bg-yellow-50 rounded-lg border border-yellow-200 flex items-center justify-center overflow-hidden shrink-0">
                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-yellow-300">
                  PRO
                </span>
              </div>
              <div>
                <span className="inline-block bg-green-500/10 text-green-600 border border-green-500/20 px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest mb-2 shadow-sm">
                  Active
                </span>
                <h3 className="text-xl font-bold text-slate-800 mb-1">EduRain PRO Unlimited Access</h3>
                <p className="text-sm text-slate-500">Purchased Today • <span className="text-yellow-600 font-medium">₹ Unlimited PITS</span></p>
              </div>
            </div>
            
            <button className="relative z-10 px-6 py-2 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm rounded-lg text-slate-700 font-bold transition-colors w-full md:w-auto">
              Manage
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Purchases;
