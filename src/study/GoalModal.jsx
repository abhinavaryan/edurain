import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFreemium } from './FreemiumContext.jsx';
import { X, Trophy, Briefcase, HeartPulse, GraduationCap, Globe, BookOpen, Atom, Stethoscope, Landmark, Medal, Building, ShieldCheck, Calculator, BookText } from 'lucide-react';

const TOP_GOALS = [
  { id: 'iit-jee', label: 'IIT-JEE', icon: <Atom className="text-blue-400" size={24} />, bgClass: 'bg-blue-500/10 border-blue-500/30 hover:bg-blue-500/20' },
  { id: 'neet', label: 'NEET', icon: <Stethoscope className="text-emerald-400" size={24} />, bgClass: 'bg-emerald-500/10 border-emerald-500/30 hover:bg-emerald-500/20' },
  { id: 'upsc', label: 'UPSC', icon: <Landmark className="text-yellow-400" size={24} />, bgClass: 'bg-yellow-500/10 border-yellow-500/30 hover:bg-yellow-500/20' },
  { id: 'govt', label: 'Govt. Exams', icon: <Medal className="text-orange-400" size={24} />, bgClass: 'bg-orange-500/10 border-orange-500/30 hover:bg-orange-500/20' }
];

const ALL_EXAMS = [
  { id: 'eng-med', label: 'Engineering & Medical Exams (College & Job)', icon: <Atom className="text-teal-400" size={20} /> },
  { id: 'col-ent', label: 'College Entrance Exams (UG & PG)', icon: <Building className="text-indigo-400" size={20} /> },
  { id: 'school', label: 'Schools, Boards & Olympiads', icon: <Trophy className="text-green-400" size={20} /> },
  { id: 'gov-job', label: 'All Government Job Exams', icon: <ShieldCheck className="text-red-400" size={20} /> },
  { id: 'finance', label: 'CA, CS, Banking & Finance Courses', icon: <Calculator className="text-orange-400" size={20} /> },
  { id: 'teaching', label: 'NET Exams & Teacher Training', icon: <BookText className="text-yellow-400" size={20} /> }
];

const OTHER_OFFERINGS = [
  { id: 'upskilling', label: 'Earners (Upskilling)', icon: <Briefcase className="text-blue-400" size={20} /> },
  { id: 'english', label: 'Spoken English', icon: <Globe className="text-sky-400" size={20} /> },
  { id: 'health', label: 'Health & Lifestyle', icon: <HeartPulse className="text-pink-400" size={20} /> },
  { id: 'abroad', label: 'Study Abroad & Career Abroad', icon: <Globe className="text-indigo-400" size={20} /> }
];

export const GoalModal = () => {
  const { showGoalSelector, setShowGoalSelector, setGoal } = useFreemium();

  return (
    <AnimatePresence>
      {showGoalSelector && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
        >
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-[#0f2e21] border border-green-800/50 rounded-3xl w-full max-w-4xl max-h-[85vh] overflow-y-auto shadow-2xl relative"
        >
          <div className="sticky top-0 bg-[#0f2e21]/90 backdrop-blur-md p-6 border-b border-green-800/50 flex justify-between items-center z-20">
            <h2 className="text-2xl font-black text-white">Select your Goal</h2>
            <button 
              onClick={() => setShowGoalSelector(false)}
              className="p-2 hover:bg-green-800/50 rounded-full transition-colors text-green-400/70 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-8">
            {/* Top Goals */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {TOP_GOALS.map((g) => (
                <button
                  key={g.id}
                  onClick={() => { setGoal(g.label); setShowGoalSelector(false); }}
                  className={`flex flex-col items-center justify-center gap-3 p-4 rounded-2xl border transition-all cursor-pointer group ${g.bgClass}`}
                >
                  <div className="p-3 bg-black/40 rounded-xl group-hover:scale-110 transition-transform">
                    {g.icon}
                  </div>
                  <span className="text-white font-bold tracking-wide">{g.label}</span>
                </button>
              ))}
            </div>

            {/* All Exams */}
            <h3 className="text-lg font-bold text-white mb-4">All Exams</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
              {ALL_EXAMS.map((g) => (
                <button
                  key={g.id}
                  onClick={() => { setGoal(g.label); setShowGoalSelector(false); }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-green-800/50 bg-[#0a1f16] hover:bg-green-800/50 hover:border-yellow-500/50 transition-all text-left group"
                >
                  <div className="p-2 bg-black/40 rounded-lg group-hover:scale-110 transition-transform">
                    {g.icon}
                  </div>
                  <span className="text-green-100 font-semibold group-hover:text-yellow-400 transition-colors">
                    {g.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Other Offerings */}
            <h3 className="text-lg font-bold text-white mb-4">Other Offerings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {OTHER_OFFERINGS.map((g) => (
                <button
                  key={g.id}
                  onClick={() => { setGoal(g.label); setShowGoalSelector(false); }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-green-800/50 bg-[#0a1f16] hover:bg-green-800/50 hover:border-yellow-500/50 transition-all text-left group"
                >
                  <div className="p-2 bg-black/40 rounded-lg group-hover:scale-110 transition-transform">
                    {g.icon}
                  </div>
                  <span className="text-green-100 font-semibold group-hover:text-yellow-400 transition-colors">
                    {g.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
