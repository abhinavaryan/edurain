import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search,
  Lock,
  ChevronDown,
  ChevronRight,
  Play,
  Bookmark,
  Clock,
  FileText
} from 'lucide-react';
import { useFreemium } from './FreemiumContext.jsx';

// --- Components ---

const TabButton = ({ isActive, label, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 font-bold text-sm tracking-wide transition-colors relative ${
      isActive ? 'text-white' : 'text-green-400/70 hover:text-white'
    }`}
  >
    {label}
    {isActive && (
      <motion.div
        layoutId="pi-tab"
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full"
        initial={false}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    )}
  </button>
);

const CategoryPill = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
      isActive 
        ? 'bg-[#0f2e21] text-white border-green-500/50' 
        : 'bg-[#0a1f16] border border-green-800/50 text-green-300 hover:bg-green-800/50 hover:text-white'
    }`}
  >
    {label}
  </button>
);

// --- Content Panels ---

const PiHome = () => {
  const { isSubscribed, upgradePlan } = useFreemium();
  
  return (
    <div className="flex flex-col gap-8 pb-20">
      
      {/* Category Selection */}
      <div className="flex items-center gap-4">
        <button className="bg-[#0a1f16] border border-green-800/50 shadow-sm hover:bg-green-800/50 px-4 py-2 rounded-lg text-sm font-semibold text-green-100 flex items-center gap-2 transition-colors">
          All Categories <ChevronDown size={16} />
        </button>
        <CategoryPill label="UPSC - Hinglish" isActive={true} />
        <CategoryPill label="UPSC - English" isActive={false} />
        <CategoryPill label="UPSC - Hindi" isActive={false} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Content Area (Left 2/3) */}
        <div className="lg:col-span-2 flex flex-col gap-12">
          
          {/* Top 10 This Week */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Top 10 this Week</h2>
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x hide-scrollbar">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="relative min-w-[200px] h-[280px] snap-center group cursor-pointer flex-shrink-0">
                  <div className="absolute -left-4 -bottom-6 text-8xl font-black text-transparent stroke-text opacity-50 group-hover:opacity-100 group-hover:text-white transition-all z-0">
                    {num}
                  </div>
                  <div className="absolute inset-0 bg-[#0f2e21] rounded-xl overflow-hidden border border-green-800/50 shadow-sm z-10">
                    <img 
                      src={`https://images.unsplash.com/photo-${1500000000000 + num}?auto=format&fit=crop&w=400&q=80`} 
                      alt="Cover" 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    {!isSubscribed && num > 1 && (
                      <div className="absolute top-3 left-3 bg-[#0a1f16]/80 p-1.5 rounded-lg backdrop-blur-md shadow-sm border border-green-800/50">
                        <Lock size={16} className="text-green-300" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Complete Prelims Mock Test Series */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Complete Prelims Mock Test Series</h2>
            <div className="bg-[#0f2e21]/90 backdrop-blur-md p-6 rounded-2xl flex items-center justify-between border border-green-800/50 shadow-sm hover:shadow-md hover:border-yellow-500/50 transition-all cursor-pointer group">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-[#0a1f16] rounded-2xl flex items-center justify-center border border-green-800/30">
                  <span className="text-3xl">🏛️</span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">Test Yourself Now ---&gt;</h3>
              </div>
              <ChevronRight className="text-green-500/70 group-hover:text-yellow-400 transition-colors" />
            </div>
          </section>
          
          {/* Daily Current Affairs Quiz */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Daily Current Affairs Quiz</h2>
              <button className="text-sm font-semibold text-green-400/70 hover:text-yellow-400 flex items-center gap-1 transition-colors">
                View All <ChevronRight size={16} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2].map((i) => (
                <div key={i} className="bg-[#0f2e21]/90 backdrop-blur-md border border-green-800/50 shadow-sm p-5 rounded-2xl flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-[#0a1f16] rounded-xl flex items-center justify-center relative shadow-inner border border-green-800/30">
                       <span className="absolute -top-2 left-2 bg-yellow-500 text-black text-[10px] font-black px-1.5 rounded-full">OBJ</span>
                       <span className="text-green-400 font-bold text-xs">TEST</span>
                    </div>
                    <div>
                      <p className="text-xs text-green-400/70 mb-1">29 Aug 6 PM</p>
                      <h4 className="text-sm font-bold text-white leading-snug">Daily CA Quiz : 29th August, 2026</h4>
                      <p className="text-xs text-green-500/50 mt-2">10 mins • 10 marks • Earn 15 XP</p>
                    </div>
                  </div>
                  <button className="w-full py-2 bg-[#0a1f16] hover:bg-green-800/50 border border-green-800/50 rounded-lg text-sm font-semibold text-green-100 transition-colors flex items-center justify-center gap-2">
                    <Play size={14} /> Attempt
                  </button>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Sticky Sidebar (Right 1/3) */}
        <div className="hidden lg:block relative">
          <div className="sticky top-24 bg-[#0f2e21]/90 backdrop-blur-md p-6 rounded-2xl border border-green-800/50 shadow-sm flex flex-col items-center text-center">
            <h3 className="text-xl font-bold text-white mb-2">Upgrade to PRO</h3>
            <p className="text-sm text-green-400/70 mb-6">Unlock unlimited access to all courses, mock tests, and The Oracle.</p>
            
            <div className="w-full space-y-3 mb-6">
              <label className="flex items-center justify-between p-4 rounded-xl border border-yellow-400 bg-yellow-400/5 cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-yellow-400 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                  </div>
                  <span className="font-bold text-white">Yearly Plan</span>
                </div>
                <span className="font-black text-yellow-400">₹2399</span>
              </label>
              
              <label className="flex items-center justify-between p-4 rounded-xl border border-green-800/50 bg-[#0a1f16] cursor-pointer hover:bg-green-800/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-green-600 flex items-center justify-center">
                  </div>
                  <span className="font-bold text-green-100">Monthly Plan</span>
                </div>
                <span className="font-black text-green-100">₹299</span>
              </label>
            </div>
            
            <button 
              onClick={upgradePlan}
              className="w-full bg-primary hover:bg-emerald-500 text-white font-black py-4 rounded-xl text-lg transition-all shadow-[0_4px_14px_0_rgba(16,185,129,0.39)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.23)] hover:-translate-y-0.5"
            >
              Subscribe Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

const PiLibrary = () => {
  return (
    <div className="flex flex-col gap-8 pb-20">
      <h2 className="text-2xl font-bold text-white">My Library</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Saved Videos (Empty) */}
        <div className="bg-[#0f2e21]/90 backdrop-blur-md p-6 rounded-2xl flex flex-col justify-between min-h-[220px] group cursor-pointer border border-green-800/50 shadow-sm hover:shadow-md hover:border-yellow-500/50 transition-all">
          <div className="w-full h-32 bg-[#0a1f16] rounded-xl flex items-center justify-center mb-4 border border-green-800/30">
             <Bookmark size={48} className="text-green-500/30" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-white">Saved Videos</h3>
              <p className="text-xs text-green-400/70">0 videos</p>
            </div>
            <ChevronRight size={18} className="text-green-500/70 group-hover:text-yellow-400 transition-colors" />
          </div>
        </div>

        {/* Watch History (Populated) */}
        <div className="bg-[#0f2e21]/90 backdrop-blur-md p-6 rounded-2xl flex flex-col justify-between min-h-[220px] group cursor-pointer border border-yellow-400/30 shadow-[0_4px_14px_0_rgba(234,179,8,0.1)] hover:shadow-[0_6px_20px_rgba(234,179,8,0.2)] transition-all">
          <div className="w-full h-32 bg-[#0a1f16] rounded-xl overflow-hidden mb-4 relative">
             <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&q=80" alt="History" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-3">
               <span className="text-white font-bold text-sm drop-shadow-md">Basic Concepts (Part-1)</span>
             </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-white text-lg">Watch History</h3>
              <p className="text-xs text-yellow-400 mt-1 font-semibold">Last Updated Today, 3:58 pm</p>
            </div>
            <ChevronRight size={18} className="text-yellow-400" />
          </div>
        </div>

        {/* Tests (Empty) */}
        <div className="bg-[#0f2e21]/90 backdrop-blur-md p-6 rounded-2xl flex flex-col justify-between min-h-[220px] group cursor-pointer border border-green-800/50 shadow-sm hover:shadow-md hover:border-yellow-500/50 transition-all">
          <div className="w-full h-32 bg-[#0a1f16] rounded-xl flex items-center justify-center mb-4 border border-green-800/30">
             <FileText size={48} className="text-green-500/30" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-white">Tests</h3>
              <p className="text-xs text-green-400/70">0 tests attempted</p>
            </div>
            <ChevronRight size={18} className="text-green-500/70 group-hover:text-yellow-400 transition-colors" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default function PiPage() {
  const [activeTab, setActiveTab] = useState('home');
  const [searchPlaceholder, setSearchPlaceholder] = useState('Search for a Teacher');
  
  return (
    <div className="min-h-full flex flex-col">
      {/* Pi Header */}
      <div className="sticky top-0 z-40 bg-[#0a1f16]/90 backdrop-blur-md border-b border-green-800/50 px-8 pt-4 shadow-sm">
        <div className="flex items-center gap-12 mb-4">
          <h1 className="text-3xl font-black tracking-tighter text-white flex items-center gap-1">
            pi
            <span className="text-yellow-400 text-[40px] leading-none -mt-1">.</span>
          </h1>
          
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-green-500" />
              <input 
                type="text"
                placeholder={searchPlaceholder}
                className="w-full bg-[#0f2e21] border border-green-800/50 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-colors placeholder:text-green-500/70"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <TabButton 
            isActive={activeTab === 'home'} 
            label="Home" 
            onClick={() => { setActiveTab('home'); setSearchPlaceholder('Search for a Teacher'); }} 
          />
          <TabButton 
            isActive={activeTab === 'library'} 
            label="Library" 
            onClick={() => { setActiveTab('library'); setSearchPlaceholder('Search for a Subject'); }} 
          />
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'home' ? <PiHome /> : <PiLibrary />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .stroke-text {
          -webkit-text-stroke: 2px rgba(0, 0, 0, 0.05);
          color: transparent;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
