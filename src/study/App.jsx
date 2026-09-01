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
  Search,
  Menu
} from 'lucide-react';
import { default as TheForge } from './Forge.jsx';
import { default as Gamification } from './Gamification.jsx';
import { default as Marketplace } from './Marketplace.jsx';
import { useWallet } from './WalletContext.jsx';
import { useFreemium } from './FreemiumContext.jsx';
import { GoalModal } from './GoalModal.jsx';
import Profile from './Profile.jsx';
import Purchases from './Purchases.jsx';
import { SearchModal } from './SearchModal.jsx';
import LeaderboardDrawer from './LeaderboardDrawer.jsx';
import PiPage from './PiPage.jsx';
import Missions from './Missions.jsx';

const SidebarItem = ({ icon: Icon, text, to, isNew, isSidebarOpen }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} className="block relative" title={!isSidebarOpen ? text : undefined}>
      {isActive && (
        <motion.div
          layoutId="active-pill"
          className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-400 rounded-r-md"
          initial={false}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
      <div className={`flex items-center gap-3 py-3 transition-colors ${
        isSidebarOpen ? 'px-6' : 'px-0 justify-center'
      } ${
        isActive ? 'text-yellow-400 bg-yellow-400/10' : 'text-green-300 hover:text-yellow-200 hover:bg-green-800/50'
      }`}>
        <Icon size={24} className={isActive ? 'text-yellow-400' : 'text-green-500/70'} />
        {isSidebarOpen && (
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="font-semibold text-sm tracking-wide whitespace-nowrap"
          >
            {text}
          </motion.span>
        )}
        {isNew && isSidebarOpen && (
          <span className="ml-auto bg-yellow-400/20 text-yellow-400 text-[10px] px-2 py-0.5 rounded-full font-bold mr-6">
            NEW
          </span>
        )}
      </div>
    </Link>
  );
};

const TopNav = ({ isForge, toggleSidebar, isSidebarOpen }) => {
  const { pits, xp } = useWallet();
  const { goal, setShowGoalSelector, isSubscribed, upgradePlan } = useFreemium();
  const [profileOpen, setProfileOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [leaderboardOpen, setLeaderboardOpen] = React.useState(false);
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

  const navBg = isForge ? 'bg-black/80 backdrop-blur-md border-white/5' : 'bg-[#0a1f16]/90 backdrop-blur-md border-green-800/50 shadow-sm';
  const textTitle = isForge ? 'text-white' : 'text-white';
  const searchBg = isForge ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-[#0f2e21] border-green-700/50 hover:bg-green-800/50';
  const searchText = isForge ? 'text-gray-500' : 'text-green-400/70';
  const iconColor = isForge ? 'text-gray-400 hover:text-white' : 'text-green-400 hover:text-yellow-400';

  return (
    <nav className={`sticky top-0 z-50 h-16 flex items-center justify-between px-6 lg:px-8 border-b transition-colors ${navBg}`}>
      <div className="flex items-center gap-4 lg:gap-6">
        <button 
          onClick={toggleSidebar}
          className={`p-2 rounded-lg transition-colors ${isForge ? 'hover:bg-white/10 text-white' : 'hover:bg-green-800/50 text-green-400'}`}
        >
          <Menu size={24} />
        </button>
        
        <h2 className={`text-xl font-black tracking-tight flex items-center gap-2 ${textTitle}`}>
          Edu<span className="text-yellow-400">Rain</span>
        </h2>
        
        {!isForge && (
          <button 
            onClick={() => setShowGoalSelector(true)}
            className="hidden md:flex bg-[#0f2e21] hover:bg-green-800/50 transition-colors border border-green-700/50 shadow-sm rounded-full px-4 py-1.5 items-center gap-2 text-sm font-bold text-gray-200"
          >
            <span className="text-yellow-400">🪙</span>
            {goal}
            <ChevronRight size={14} className="text-green-500/70" />
          </button>
        )}
      </div>
      
      <div className="flex-1 max-w-xl mx-4 lg:mx-8 hidden lg:block">
        <div className="relative overflow-hidden flex items-center">
          <Search size={18} className="absolute left-4 z-10 text-green-500" />
          <div className="w-full relative cursor-text" onClick={() => setSearchOpen(true)}>
            <div className={`w-full border rounded-full py-2 pl-12 pr-4 h-10 transition-colors z-0 relative flex items-center ${searchBg}`}>
              <span className="sr-only">Search</span>
            </div>
            <div className="absolute inset-y-0 left-12 right-4 flex items-center pointer-events-none overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={placeholderIdx}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`${searchText} text-sm`}
                >
                  {placeholders[placeholderIdx]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-4 lg:gap-6">
        {!isForge && (
          <>
            <div className="flex items-center gap-4 border-r border-green-800/50 pr-4 lg:pr-6 hidden sm:flex">
              <button 
                onClick={() => setLeaderboardOpen(true)}
                className="flex items-center gap-2 bg-[#0f2e21] border border-green-700/50 px-3 py-1.5 rounded-full hover:bg-green-800/50 transition-colors shadow-sm"
              >
                <span className="text-[10px] font-black text-green-500">XP</span>
                <span className="text-white font-bold text-sm">{xp}</span>
              </button>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 px-4 py-1.5 rounded-full shadow-sm text-yellow-400"
              >
                <span className="text-lg">🪙</span>
                <span className="font-bold tracking-wide">{pits}</span>
              </motion.button>
            </div>

            {!isSubscribed && (
              <button 
                onClick={upgradePlan}
                className="hidden md:flex bg-transparent hover:bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-sm font-bold px-4 py-1.5 rounded-lg shadow-sm transition-colors items-center gap-2"
              >
                Upgrade to <span className="bg-yellow-400 text-black px-1.5 rounded text-[10px]">PRO</span>
              </button>
            )}
            
            <button className={`${iconColor} transition-colors relative`}>
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full shadow-sm"></span>
            </button>
          </>
        )}

        <div className="relative">
          <button 
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="text-right hidden md:block">
              <div className={`text-xs ${isForge ? 'text-gray-400' : 'text-green-500'}`}>Hi,</div>
              <div className={`text-sm font-bold uppercase ${isForge ? 'text-white' : 'text-yellow-400'}`}>ABHINAV</div>
            </div>
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className={`w-9 h-9 rounded-full ${isForge ? 'bg-white/10 border-white/20' : 'bg-[#0f2e21] border-green-600/50'} border`} />
          </button>

          {profileOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`absolute right-0 mt-4 w-48 border rounded-xl shadow-2xl py-2 flex flex-col ${isForge ? 'bg-[#111] border-white/10' : 'bg-[#0f2e21] border-green-700/50'}`}
            >
              <Link 
                to="/profile"
                onClick={() => setProfileOpen(false)}
                className={`px-4 py-2 text-left text-sm font-medium transition-colors flex items-center gap-2 ${isForge ? 'text-gray-300 hover:bg-white/5 hover:text-white' : 'text-green-100 hover:bg-green-800/50 hover:text-white'}`}
              >
                My Profile
              </Link>
              <Link 
                to="/purchases"
                onClick={() => setProfileOpen(false)}
                className={`px-4 py-2 text-left text-sm font-medium transition-colors flex items-center gap-2 ${isForge ? 'text-gray-300 hover:bg-white/5 hover:text-white' : 'text-green-100 hover:bg-green-800/50 hover:text-white'}`}
              >
                My Purchases
              </Link>
              <div className={`h-px my-2 ${isForge ? 'bg-white/10' : 'bg-green-800/50'}`}></div>
              <button 
                onClick={() => setProfileOpen(false)}
                className={`px-4 py-2 text-left text-sm font-medium transition-colors flex items-center gap-2 ${isForge ? 'text-red-400 hover:bg-red-500/10' : 'text-red-400 hover:bg-red-500/10'}`}
              >
                Logout
              </button>
            </motion.div>
          )}
        </div>
      </div>
      
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <LeaderboardDrawer isOpen={leaderboardOpen} onClose={() => setLeaderboardOpen(false)} />
    </nav>
  );
};

const MissionCard = ({ title, desc, icon: Icon, colorClass, gradientClass }) => (
  <motion.div 
    whileHover={{ y: -4, scale: 1.01 }}
    className={`relative overflow-hidden rounded-xl bg-[#0f2e21] border border-green-800/50 shadow-lg shadow-black/20 p-6 group cursor-pointer`}
  >
    <div className={`absolute top-0 left-0 w-1 h-full ${colorClass}`}></div>
    <div className={`absolute -right-10 -top-10 w-32 h-32 ${gradientClass} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500`}></div>
    
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-lg ${colorClass} bg-opacity-10`}>
        <Icon size={24} className={colorClass.replace('bg-', 'text-')} />
      </div>
      <ChevronRight size={20} className="text-green-600 group-hover:text-yellow-400 transition-colors" />
    </div>
    
    <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
    <p className="text-sm text-green-400/70">{desc}</p>
  </motion.div>
);

const VaultCard = ({ title, subtitle, icon: Icon, accent }) => (
  <div className="bg-[#0f2e21] shadow-lg shadow-black/20 rounded-xl p-5 border border-green-800/50 hover:border-yellow-500/50 transition-all cursor-pointer group flex flex-col items-center text-center">
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-3 bg-gradient-to-br ${accent}`}>
      <Icon size={20} className="text-white" />
    </div>
    <h4 className="text-sm font-bold text-white mb-1">{title}</h4>
    <p className="text-xs text-green-400/70">{subtitle}</p>
    <div className="mt-4 w-full flex items-center justify-center gap-2 text-xs font-semibold text-green-500 group-hover:text-yellow-400 transition-colors">
      Enter Vault <ChevronRight size={14} />
    </div>
  </div>
);

const CommandCenter = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-8 max-w-7xl mx-auto text-white"
    >
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">Command Center</h1>
        <p className="text-green-400/70 text-lg">Welcome back, operative. Continue your mission.</p>
      </div>

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <Cpu className="text-yellow-400" size={20} />
          <h2 className="text-xl font-bold text-white tracking-wide">Active Missions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MissionCard 
            title="My Missions" 
            desc="2 Active Enrollments" 
            icon={Swords} 
            colorClass="bg-yellow-400"
            gradientClass="bg-yellow-400"
          />
          <MissionCard 
            title="Recent Intel" 
            desc="Physics - Thermodynamics" 
            icon={BookOpen} 
            colorClass="bg-yellow-500"
            gradientClass="bg-yellow-500"
          />
          <MissionCard 
            title="Resolved Doubts" 
            desc="1 Resolved, 2 Pending" 
            icon={Crosshair} 
            colorClass="bg-green-400"
            gradientClass="bg-green-400"
          />
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Library className="text-yellow-400" size={20} />
            <h2 className="text-xl font-bold text-white tracking-wide">The Vault</h2>
          </div>
          <button className="text-sm font-semibold text-yellow-400 hover:text-yellow-300 transition-colors">View All Resources</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <VaultCard title="Physics Arsenal" subtitle="12 PDFs" icon={BookOpen} accent="from-green-500 to-emerald-700" />
          <VaultCard title="Chemistry Intel" subtitle="3 Books" icon={Library} accent="from-yellow-500 to-amber-700" />
          <VaultCard title="Combat Simulator" subtitle="LIVE NOW" icon={Swords} accent="from-red-500 to-rose-700" />
          <VaultCard title="Math Analytics" subtitle="Starts in 2 hrs" icon={Crosshair} accent="from-blue-500 to-indigo-700" />
        </div>
      </section>
    </motion.div>
  );
};

const Layout = ({ children }) => {
  const location = useLocation();
  const isForge = location.pathname === '/forge';
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  return (
    <div className={`min-h-screen flex ${isForge ? 'bg-black text-gray-100' : 'bg-[#0a1f16] text-white'}`}>
      {/* Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 256 : 80 }}
        className={`border-r flex flex-col shadow-xl z-40 overflow-hidden shrink-0 ${isForge ? 'bg-[#0a0a0a] border-white/10' : 'bg-[#0a1f16] border-green-800/50'}`}
      >
        <div className={`h-16 flex items-center ${isSidebarOpen ? 'px-6 lg:px-8' : 'justify-center'} border-b ${isForge ? 'border-white/10' : 'border-green-800/50'} shrink-0`}>
          {isSidebarOpen ? (
            <span className="text-2xl font-black tracking-tighter flex items-center gap-2">
              <span className="text-white">Edu</span><span className="text-yellow-400">Rain</span>
            </span>
          ) : (
            <span className="text-2xl font-black tracking-tighter text-yellow-400">E</span>
          )}
        </div>
        
        <div className={`flex-1 py-8 flex flex-col gap-1 overflow-y-auto ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
          {isSidebarOpen ? (
            <div className={`px-6 text-[10px] font-bold tracking-widest uppercase mb-2 ${isForge ? 'text-gray-500' : 'text-green-600'}`}>Operations</div>
          ) : (
            <div className={`text-center text-[10px] font-bold tracking-widest uppercase mb-2 ${isForge ? 'text-gray-500' : 'text-green-600'}`}>Ops</div>
          )}
          <SidebarItem icon={LayoutDashboard} text="Command Center" to="/" isSidebarOpen={isSidebarOpen} />
          <SidebarItem icon={Flame} text="The Forge" to="/forge" isSidebarOpen={isSidebarOpen} />
          <SidebarItem icon={LayoutDashboard} text="Pi" to="/pi" isNew isSidebarOpen={isSidebarOpen} />
          <SidebarItem icon={Library} text="The Vault" to="/vault" isSidebarOpen={isSidebarOpen} />
          
          {isSidebarOpen ? (
            <div className={`px-6 text-[10px] font-bold tracking-widest uppercase mt-8 mb-2 ${isForge ? 'text-gray-500' : 'text-green-600'}`}>Combat Readiness</div>
          ) : (
            <div className={`text-center text-[10px] font-bold tracking-widest uppercase mt-8 mb-2 ${isForge ? 'text-gray-500' : 'text-green-600'}`}>Combat</div>
          )}
          <SidebarItem icon={Crosshair} text="Missions" to="/missions" isSidebarOpen={isSidebarOpen} />
          <SidebarItem icon={Trophy} text="Proving Grounds" to="/proving-grounds" isSidebarOpen={isSidebarOpen} />
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col max-h-screen overflow-hidden relative">
        <TopNav isForge={isForge} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} isSidebarOpen={isSidebarOpen} />
        <div className="flex-1 overflow-y-auto relative">
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
        <Route path="/pi" element={<React.Suspense fallback={<div className="p-8">Loading Pi...</div>}><PiPage /></React.Suspense>} />
        <Route path="/proving-grounds" element={<Gamification />} />
        <Route path="/vault" element={<Marketplace />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="*" element={<div className="p-8 text-center text-gray-500">Route not found in Phase 1</div>} />
      </Routes>
    </Layout>
  );
}

export default App;
