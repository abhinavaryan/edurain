import React, { useEffect, useRef } from 'react';
import { Target, Search, Filter, PlayCircle } from 'lucide-react';
import anime from 'animejs';

const Missions = () => {
  const containerRef = useRef(null);

  // Generate 60 missions with images
  const missionsList = Array.from({ length: 60 }, (_, i) => ({
    id: i + 1,
    title: `Mission Protocol ${i + 1}`,
    category: i % 3 === 0 ? 'Physics' : i % 3 === 1 ? 'Chemistry' : 'Math',
    difficulty: i % 4 === 0 ? 'Extreme' : i % 2 === 0 ? 'Hard' : 'Normal',
    progress: Math.floor(Math.random() * 100),
    imageUrl: `https://picsum.photos/seed/mission${i + 1}/400/250`,
    xpReward: (Math.floor(Math.random() * 10) + 1) * 50
  }));

  useEffect(() => {
    // "Ralph Loop" with Intersection Observer using AnimeJS
    const cards = containerRef.current?.querySelectorAll('.mission-card');
    
    if (cards) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: entry.target,
              translateY: [50, 0],
              opacity: [0, 1],
              scale: [0.9, 1],
              easing: 'easeOutElastic(1, .8)',
              duration: 800,
            });
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      cards.forEach((card) => {
        // Initial state before animation
        card.style.opacity = '0';
        observer.observe(card);
      });

      return () => observer.disconnect();
    }
  }, []);

  return (
    <div className="p-8 max-w-7xl mx-auto w-full text-white">
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-green-800/50 pb-6">
        <div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">Combat Missions</h1>
          <p className="text-green-400/70 text-lg">Complete all 60 active missions to rank up.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500/50" size={18} />
            <input 
              type="text" 
              placeholder="Search missions..." 
              className="pl-10 pr-4 py-2 bg-[#0f2e21] border border-green-700/50 rounded-lg text-sm focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 w-64 shadow-sm text-white placeholder:text-green-500/50"
            />
          </div>
          <button className="p-2 bg-[#0f2e21] border border-green-700/50 rounded-lg text-green-400 hover:bg-green-800/50 hover:text-yellow-400 shadow-sm transition-colors">
            <Filter size={18} />
          </button>
        </div>
      </div>

      {/* Grid of 60 images/missions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" ref={containerRef}>
        {missionsList.map((mission) => (
          <div 
            key={mission.id}
            className="mission-card bg-[#0f2e21] border border-green-800/50 shadow-lg shadow-black/20 rounded-2xl overflow-hidden group flex flex-col transition-all cursor-pointer hover:border-yellow-500/50"
          >
            {/* Mission Image */}
            <div className="relative h-40 overflow-hidden bg-[#0a1f16]">
              <div className="absolute inset-0 bg-green-900/40 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
              <img 
                src={mission.imageUrl} 
                alt={mission.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute top-3 right-3 z-20 bg-black/80 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                <Target size={12} className="text-yellow-400" />
                {mission.xpReward} XP
              </div>
            </div>

            {/* Mission Content */}
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded border ${
                  mission.category === 'Physics' ? 'bg-blue-900/20 text-blue-400 border-blue-800/50' :
                  mission.category === 'Chemistry' ? 'bg-purple-900/20 text-purple-400 border-purple-800/50' :
                  'bg-orange-900/20 text-orange-400 border-orange-800/50'
                }`}>
                  {mission.category}
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                  mission.difficulty === 'Extreme' ? 'bg-red-900/30 text-red-400' :
                  mission.difficulty === 'Hard' ? 'bg-yellow-900/30 text-yellow-500' :
                  'bg-green-900/30 text-green-400'
                }`}>
                  {mission.difficulty}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-1 line-clamp-1 group-hover:text-yellow-400 transition-colors">{mission.title}</h3>
              
              <div className="mt-auto pt-4">
                <div className="flex justify-between text-xs text-green-400/70 mb-1 font-medium">
                  <span>Progress</span>
                  <span className="text-white">{mission.progress}%</span>
                </div>
                <div className="h-1.5 w-full bg-green-950 rounded-full overflow-hidden border border-green-900/30">
                  <div 
                    className="h-full bg-gradient-to-r from-green-500 to-yellow-400 rounded-full relative"
                    style={{ width: `${mission.progress}%` }}
                  >
                    <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/30 blur-sm"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hover Action */}
            <div className="px-5 py-3 bg-[#0a1f16] border-t border-green-800/50 flex items-center justify-between group-hover:bg-yellow-400/10 transition-colors">
              <span className="text-sm font-bold text-green-500 group-hover:text-yellow-400 transition-colors">
                {mission.progress === 100 ? 'Review Mission' : 'Continue Mission'}
              </span>
              <PlayCircle size={18} className="text-green-600 group-hover:text-yellow-400 transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Missions;
