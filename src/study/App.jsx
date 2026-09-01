import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Library, 
  Swords, 
  Crosshair, 
  Bell, 
  Flame, 
  Trophy,
  ChevronRight,
  BookOpen,
  Cpu,
  Search
} from 'lucide-react';
import { default as TheForge } from './Forge.jsx';
import { default as Gamification } from './Gamification.jsx';
import { default as Marketplace } from './Marketplace.jsx';
import { useWallet } from './WalletContext.jsx';
import { useFreemium } from './FreemiumContext.jsx';
import { GoalModal } from './GoalModal.jsx';

const SidebarItem = ({ icon: Icon, text, to, isNew }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} className="block relative">
      {isActive && (
        <motion.div
          layoutId="active-pill"
          className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-md"
          initial={false}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
      <div className={`flex items-center gap-3 px-6 py-3 transition-colors ${
        isActive ? 'text-primary bg-primary/10' : 'text-gray-400 hover:text-gray-100 hover:bg-surfaceHover'
      }`}>
        <Icon size={20} className={isActive ? 'text-primary' : 'text-gray-400'} />
        <span className="font-semibold text-sm tracking-wide">{text}</span>
        {isNew && (
          <span className="ml-auto bg-warning/20 text-warning text-[10px] px-2 py-0.5 rounded-full font-bold">
            NEW
          </span>
        )}
      </div>
    </Link>
  );
};

const TopNav = () => {
  const { pits, xp } = useWallet();
  const { goal, setShowGoalSelector, isSubscribed, upgradePlan } = useFreemium();
  const [profileOpen, setProfileOpen] = React.useState(false);
  const [placeholderIdx, setPlaceholderIdx] = React.useState(0);
  
  const placeholders = [
    "Search for a Subject",
    "Search for a Teacher",
    "Search for a Batch",
    "Search for a Course"
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIdx((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="sticky top-0 z-50 glass-panel h-16 flex items-center justify-between px-8 border-b border-white/5">
      <div className="flex items-center gap-6">
        <h2 className="text-xl font-black tracking-tight text-white flex items-center gap-2">
          Edu<span className="text-primary">Rain</span>
        </h2>
        
        <button 
          onClick={() => setShowGoalSelector(true)}
          className="bg-surface hover:bg-white/10 transition-colors border border-white/10 rounded-full px-4 py-1.5 flex items-center gap-2 text-sm font-bold text-gray-200"
        >
          <span className="text-gold">🪙</span>
          {goal}
          <ChevronRight size={14} className="text-gray-500" />
        </button>
      </div>
      
      <div className="flex-1 max-w-xl mx-8 hidden lg:block">
        <div className="relative overflow-hidden flex items-center">
          <Search size={18} className="absolute left-4 z-10 text-gray-500" />
          <div className="w-full relative">
            <input 
              type="text" 
              className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-white/20 transition-colors z-0 relative"
            />
            {/* Animated Placeholder Text */}
            <div className="absolute inset-y-0 left-12 right-4 flex items-center pointer-events-none overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={placeholderIdx}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-500 text-sm absolute"
                >
                  {placeholders[placeholderIdx]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 border-r border-white/10 pr-6">
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
            <span className="text-[10px] font-black text-gray-400">XP</span>
            <span className="text-white font-bold text-sm">{xp}</span>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gold/10 border border-gold/30 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.2)]"
          >
            <span className="text-lg">🪙</span>
            <span className="text-gold font-bold tracking-wide">{pits}</span>
          </motion.button>
        </div>

        {!isSubscribed && (
          <button 
            onClick={upgradePlan}
            className="bg-white/10 hover:bg-gold/20 border border-gold/30 text-gold text-sm font-bold px-4 py-1.5 rounded-lg transition-colors flex items-center gap-2"
          >
            Upgrade to <span className="bg-gold text-black px-1.5 rounded text-[10px]">PRO</span>
          </button>
        )}
        
        <button className="text-gray-400 hover:text-white transition-colors relative">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-warning rounded-full"></span>
        </button>

        <div className="relative">
          <button 
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="text-right hidden md:block">
              <div className="text-xs text-gray-400">Hi,</div>
              <div className="text-sm font-bold text-white uppercase">ABHINAV</div>
            </div>
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-9 h-9 rounded-full bg-white/10 border border-white/20" />
          </button>

          {profileOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute right-0 mt-4 w-48 bg-surface border border-white/10 rounded-xl shadow-2xl py-2 flex flex-col"
            >
              <button className="px-4 py-2 text-left text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white transition-colors flex items-center gap-2">
                My Profile
              </button>
              <button className="px-4 py-2 text-left text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white transition-colors flex items-center gap-2">
                My Purchases
              </button>
              <div className="h-px bg-white/10 my-2"></div>
              <button className="px-4 py-2 text-left text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors flex items-center gap-2">
                Logout
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

const MissionCard = ({ title, desc, icon: Icon, colorClass, gradientClass }) => (
  <motion.div 
    whileHover={{ y: -4, scale: 1.01 }}
    className={`relative overflow-hidden rounded-xl bg-surface border border-white/5 p-6 group cursor-pointer`}
  >
    <div className={`absolute top-0 left-0 w-1 h-full ${colorClass}`}></div>
    <div className={`absolute -right-10 -top-10 w-32 h-32 ${gradientClass} opacity-10 blur-3xl group-hover:opacity-30 transition-opacity duration-500`}></div>
    
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-lg ${colorClass} bg-white/10`}>
        <Icon size={24} className={colorClass.replace('bg-', 'text-')} />
      </div>
      <ChevronRight size={20} className="text-gray-600 group-hover:text-white transition-colors" />
    </div>
    
    <h3 className="text-lg font-bold text-gray-100 mb-1">{title}</h3>
    <p className="text-sm text-gray-400">{desc}</p>
  </motion.div>
);

const VaultCard = ({ title, subtitle, icon: Icon, accent }) => (
  <div className="bg-surface rounded-xl p-5 border border-white/5 hover:border-white/20 transition-all cursor-pointer group flex flex-col items-center text-center">
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-3 bg-gradient-to-br ${accent}`}>
      <Icon size={20} className="text-white" />
    </div>
    <h4 className="text-sm font-bold text-gray-200 mb-1">{title}</h4>
    <p className="text-xs text-gray-500">{subtitle}</p>
    <div className="mt-4 w-full flex items-center justify-center gap-2 text-xs font-semibold text-gray-400 group-hover:text-white transition-colors">
      Enter Vault <ChevronRight size={14} />
    </div>
  </div>
);

const CommandCenter = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-8 max-w-7xl mx-auto"
    >
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">Command Center</h1>
        <p className="text-gray-400 text-lg">Welcome back, operative. Continue your mission.</p>
      </div>

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <Cpu className="text-primary" size={20} />
          <h2 className="text-xl font-bold text-white tracking-wide">Active Missions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MissionCard 
            title="My Missions" 
            desc="2 Active Enrollments" 
            icon={Swords} 
            colorClass="bg-elite"
            gradientClass="bg-elite"
          />
          <MissionCard 
            title="Recent Intel" 
            desc="Physics - Thermodynamics" 
            icon={BookOpen} 
            colorClass="bg-warning"
            gradientClass="bg-warning"
          />
          <MissionCard 
            title="Resolved Doubts" 
            desc="1 Resolved, 2 Pending" 
            icon={Crosshair} 
            colorClass="bg-primary"
            gradientClass="bg-primary"
          />
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Library className="text-primary" size={20} />
            <h2 className="text-xl font-bold text-white tracking-wide">The Vault</h2>
          </div>
          <button className="text-sm font-semibold text-primary hover:text-white transition-colors">View All Resources</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <VaultCard title="Physics Arsenal" subtitle="12 PDFs" icon={BookOpen} accent="from-green-500 to-emerald-700" />
          <VaultCard title="Chemistry Intel" subtitle="3 Books" icon={Library} accent="from-blue-500 to-indigo-700" />
          <VaultCard title="Combat Simulator" subtitle="LIVE NOW" icon={Swords} accent="from-red-500 to-rose-700" />
          <VaultCard title="Math Analytics" subtitle="Starts in 2 hrs" icon={Crosshair} accent="from-purple-500 to-fuchsia-700" />
        </div>
      </section>
    </motion.div>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background flex text-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-surface border-r border-white/5 flex flex-col">
        <div className="h-20 flex items-center px-8 border-b border-white/5">
          <span className="text-2xl font-black tracking-tighter flex items-center gap-2">
            <span className="text-white">Edu</span><span className="text-primary">Rain</span>
          </span>
        </div>
        
        <div className="flex-1 py-8 flex flex-col gap-1">
          <div className="px-6 text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-2">Operations</div>
          <SidebarItem icon={LayoutDashboard} text="Command Center" to="/" />
          <SidebarItem icon={Flame} text="The Forge" to="/forge" isNew />
          <SidebarItem icon={Library} text="The Vault" to="/vault" />
          
          <div className="px-6 text-[10px] font-bold text-gray-500 tracking-widest uppercase mt-8 mb-2">Combat Readiness</div>
          <SidebarItem icon={Crosshair} text="Missions" to="/missions" />
          <SidebarItem icon={Trophy} text="Proving Grounds" to="/proving-grounds" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col max-h-screen overflow-hidden">
        <TopNav />
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

function App() {
  return (
    <Layout>
      <GoalModal />
      <Routes>
        <Route path="/" element={<CommandCenter />} />
        <Route path="/forge" element={<TheForge />} />
        <Route path="/proving-grounds" element={<Gamification />} />
        <Route path="/vault" element={<Marketplace />} />
        <Route path="/missions" element={<div className="p-8 text-center text-gray-500">Missions page coming soon</div>} />
        {/* Add more routes here as we build them */}
        <Route path="*" element={<div className="p-8 text-center text-gray-500">Route not found in Phase 1</div>} />
      </Routes>
    </Layout>
  );
}

export default App;
