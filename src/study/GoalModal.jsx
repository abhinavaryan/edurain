import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFreemium } from './FreemiumContext.jsx';
import { X, Trophy, Briefcase, HeartPulse, GraduationCap, Globe, BookOpen } from 'lucide-react';

const goals = [
  { id: 'upskilling', label: 'Earners (Upskilling)', icon: <Briefcase className="text-blue-400" size={24} /> },
  { id: 'chessmate', label: 'Chessmate', icon: <Trophy className="text-emerald-400" size={24} /> },
  { id: 'intern', label: 'Skills (Intern/Job Assistance)', icon: <GraduationCap className="text-purple-400" size={24} /> },
  { id: 'english', label: 'Spoken English', icon: <Globe className="text-sky-400" size={24} /> },
  { id: 'gyaane', label: 'Gyaan-E (Short Courses)', icon: <BookOpen className="text-red-400" size={24} /> },
  { id: 'degree', label: 'Online Degree', icon: <GraduationCap className="text-yellow-400" size={24} /> },
  { id: 'health', label: 'Health & Lifestyle', icon: <HeartPulse className="text-pink-400" size={24} /> },
  { id: 'abroad', label: 'Study Abroad & Career Abroad', icon: <Globe className="text-indigo-400" size={24} /> },
  { id: 'semester', label: 'Semester Prep', icon: <BookOpen className="text-orange-400" size={24} /> },
  { id: 'mad', label: 'M.A.D (Music, Art & Dance)', icon: <Trophy className="text-fuchsia-400" size={24} /> }
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
          className="bg-surface border border-white/10 rounded-3xl w-full max-w-4xl max-h-[85vh] overflow-y-auto shadow-2xl relative"
        >
          <div className="sticky top-0 bg-surface/90 backdrop-blur-md p-6 border-b border-white/5 flex justify-between items-center z-10">
            <h2 className="text-2xl font-black text-white">Select your Goal</h2>
            <button 
              onClick={() => setShowGoalSelector(false)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {goals.map((g) => (
              <button
                key={g.id}
                onClick={() => {
                  setGoal(g.label);
                  setShowGoalSelector(false);
                }}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-left group"
              >
                <div className="p-3 bg-black/40 rounded-lg shadow-inner group-hover:scale-110 transition-transform">
                  {g.icon}
                </div>
                <span className="text-gray-200 font-bold group-hover:text-white transition-colors">
                  {g.label}
                </span>
              </button>
            ))}
          </div>
        </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
