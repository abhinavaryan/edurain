import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Edit2, Save, X, Camera, Loader2 } from 'lucide-react';

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  
  // Simulated Network Request
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const [details, setDetails] = useState({
    name: 'ABHINAV CHAUHAN',
    mobile: '8707875454',
    email: '',
    city: 'N/A',
    gender: 'Male', // Default to male
    class: '12',
    board: 'CBSE',
    exams: 'IIT-JEE',
    language: 'English'
  });

  const [avatarPreview, setAvatarPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatarPreview(url);
    }
  };

  const handleSave = () => setIsEditing(false);

  // Dynamic default avatar logic
  const defaultAvatar = details.gender.toLowerCase() === 'female' 
    ? "https://api.dicebear.com/7.x/avataaars/svg?seed=Jocelyn&hair=long01"
    : "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix";

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <Loader2 size={48} className="text-yellow-400 animate-spin" />
        <p className="text-green-400/70 font-medium tracking-widest uppercase text-sm">Loading....</p>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-8 max-w-5xl mx-auto w-full text-white"
    >
      <div className="mb-10 flex items-center gap-8">
        <div className="relative group">
          <div className="w-32 h-32 rounded-full bg-[#0a1f16] border-4 border-green-800/50 overflow-hidden flex items-center justify-center relative shadow-lg shadow-black/20 group-hover:border-yellow-400/50 transition-colors">
            <div className="absolute inset-0 bg-yellow-400/5 blur-md group-hover:bg-yellow-400/10 transition-colors"></div>
            <img 
              src={avatarPreview || defaultAvatar} 
              alt="User" 
              className="w-full h-full object-cover z-10 bg-[#0f2e21]" 
            />
          </div>
          
          {/* Camera Upload Button */}
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="absolute bottom-0 right-0 p-2 bg-yellow-400 hover:bg-yellow-300 text-black rounded-full shadow-lg transition-transform hover:scale-110 border-2 border-[#0a1f16] z-20"
          >
            <Camera size={16} />
          </button>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleImageUpload} 
            accept="image/*" 
            className="hidden" 
          />
        </div>

        <div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">{details.name}</h1>
          <div className="flex items-center gap-3">
            <span className="bg-green-900/40 text-green-400 border border-green-800/50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
              PW Student Master
            </span>
            <span className="bg-[#0f2e21] text-gray-400 border border-green-800/50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
              NA
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* Profile Detail Block */}
        <section className="bg-[#0f2e21] border border-green-800/50 shadow-xl shadow-black/20 rounded-2xl p-8 relative overflow-hidden group">
          <div className="absolute right-0 top-0 w-64 h-64 bg-green-500/5 blur-3xl rounded-full pointer-events-none"></div>
          
          <div className="flex items-center justify-between border-b border-green-800/50 pb-4 mb-6">
            <h2 className="text-2xl font-bold text-white">Profile Detail</h2>
            {!isEditing ? (
              <button 
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2 text-sm font-semibold text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                <Edit2 size={16} /> Edit
              </button>
            ) : (
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setIsEditing(false)}
                  className="flex items-center gap-1 text-sm font-semibold text-gray-400 hover:text-red-400 transition-colors"
                >
                  <X size={16} /> Cancel
                </button>
                <button 
                  onClick={handleSave}
                  className="flex items-center gap-1 text-sm font-bold bg-yellow-400 text-black px-4 py-1.5 rounded-lg hover:bg-yellow-300 transition-colors shadow-lg shadow-yellow-400/20"
                >
                  <Save size={16} /> Save
                </button>
              </div>
            )}
          </div>

          <div className="space-y-8 relative z-10">
            {/* Personal Details */}
            <div>
              <h3 className="text-[10px] font-bold text-green-500 uppercase tracking-widest mb-4">Personal Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                <div className="flex flex-col gap-1">
                  <span className="text-green-400/70 text-sm">Name</span>
                  {isEditing ? (
                    <input type="text" value={details.name} onChange={e => setDetails({...details, name: e.target.value})} className="bg-[#0a1f16] border border-green-700/50 rounded-md px-3 py-1.5 text-white text-sm focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors" />
                  ) : (
                    <span className="text-white font-medium">{details.name}</span>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-green-400/70 text-sm">Mobile No</span>
                  {isEditing ? (
                    <input type="text" value={details.mobile} onChange={e => setDetails({...details, mobile: e.target.value})} className="bg-[#0a1f16] border border-green-700/50 rounded-md px-3 py-1.5 text-white text-sm focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors" />
                  ) : (
                    <span className="text-white font-medium">{details.mobile}</span>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-green-400/70 text-sm">Email</span>
                  {isEditing ? (
                    <input type="email" value={details.email} onChange={e => setDetails({...details, email: e.target.value})} className="bg-[#0a1f16] border border-green-700/50 rounded-md px-3 py-1.5 text-white text-sm focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors" placeholder="user@example.com" />
                  ) : (
                    <span className="text-white font-medium">{details.email || 'N/A'}</span>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-green-400/70 text-sm">Living City/Village/Town</span>
                  {isEditing ? (
                    <input type="text" value={details.city} onChange={e => setDetails({...details, city: e.target.value})} className="bg-[#0a1f16] border border-green-700/50 rounded-md px-3 py-1.5 text-white text-sm focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors" />
                  ) : (
                    <span className="text-white font-medium">{details.city}</span>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-green-400/70 text-sm">Gender</span>
                  {isEditing ? (
                    <select 
                      value={details.gender} 
                      onChange={e => setDetails({...details, gender: e.target.value})}
                      className="bg-[#0a1f16] border border-green-700/50 rounded-md px-3 py-1.5 text-white text-sm focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  ) : (
                    <span className="text-white font-medium">{details.gender}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="h-px bg-green-800/50 w-full"></div>

            {/* Academic Details */}
            <div>
              <h3 className="text-[10px] font-bold text-green-500 uppercase tracking-widest mb-4">Academic Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                <div className="flex flex-col gap-1">
                  <span className="text-green-400/70 text-sm">Class</span>
                  {isEditing ? (
                    <input type="text" value={details.class} onChange={e => setDetails({...details, class: e.target.value})} className="bg-[#0a1f16] border border-green-700/50 rounded-md px-3 py-1.5 text-white text-sm focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors" />
                  ) : (
                    <span className="text-white font-medium">{details.class}</span>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-green-400/70 text-sm">Board/State Board</span>
                  {isEditing ? (
                    <input type="text" value={details.board} onChange={e => setDetails({...details, board: e.target.value})} className="bg-[#0a1f16] border border-green-700/50 rounded-md px-3 py-1.5 text-white text-sm focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors" />
                  ) : (
                    <span className="text-white font-medium">{details.board}</span>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-green-400/70 text-sm">Exams</span>
                  {isEditing ? (
                    <input type="text" value={details.exams} onChange={e => setDetails({...details, exams: e.target.value})} className="bg-[#0a1f16] border border-green-700/50 rounded-md px-3 py-1.5 text-white text-sm focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors" />
                  ) : (
                    <span className="text-white font-medium">{details.exams}</span>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-green-400/70 text-sm">Language</span>
                  {isEditing ? (
                    <input type="text" value={details.language} onChange={e => setDetails({...details, language: e.target.value})} className="bg-[#0a1f16] border border-green-700/50 rounded-md px-3 py-1.5 text-white text-sm focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors" />
                  ) : (
                    <span className="text-white font-medium">{details.language}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gamification Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-white">Performance as Doubt Solver</h2>
            <button className="text-yellow-400 text-sm font-semibold hover:text-yellow-300 transition-colors">Know more</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#0f2e21] border border-green-800/50 shadow-xl shadow-black/20 rounded-xl p-6 relative overflow-hidden group">
              <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-green-500/10 blur-2xl rounded-full group-hover:bg-green-500/20 transition-colors pointer-events-none"></div>
              <h3 className="text-green-400/70 text-xs font-bold uppercase tracking-widest mb-2 relative z-10">Total Doubts Solved</h3>
              <div className="text-3xl font-black text-white relative z-10">0</div>
            </div>
            
            <div className="bg-[#0f2e21] border border-green-800/50 shadow-xl shadow-black/20 rounded-xl p-6 relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-yellow-400/10 blur-2xl rounded-full group-hover:bg-yellow-400/20 transition-colors pointer-events-none"></div>
              <h3 className="text-green-400/70 text-xs font-bold uppercase tracking-widest mb-2 relative z-10">Satisfactory Rate</h3>
              <div className="text-3xl font-black text-white relative z-10">0%</div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Profile;
