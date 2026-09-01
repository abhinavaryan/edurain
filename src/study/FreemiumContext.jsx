import React, { createContext, useContext, useState, useEffect } from 'react';

const FreemiumContext = createContext();

export const useFreemium = () => useContext(FreemiumContext);

export const FreemiumProvider = ({ children }) => {
  const [goal, setGoal] = useState('12th - IIT JEE');
  const [showGoalSelector, setShowGoalSelector] = useState(false);
  const [freeWatchTimeAllowed] = useState(30); // 30 seconds for demo purposes
  const [watchTimeUsed, setWatchTimeUsed] = useState(0);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const isLimitReached = !isSubscribed && watchTimeUsed >= freeWatchTimeAllowed;

  const incrementWatchTime = (seconds = 1) => {
    if (isSubscribed) return true; // Unlimited
    
    let nextLimit = false;
    setWatchTimeUsed(prev => {
      const next = prev + seconds;
      nextLimit = next >= freeWatchTimeAllowed;
      return next;
    });
    
    return !nextLimit;
  };

  const upgradePlan = () => {
    setIsSubscribed(true);
  };

  return (
    <FreemiumContext.Provider value={{
      goal, setGoal,
      showGoalSelector, setShowGoalSelector,
      watchTimeUsed, isLimitReached, isSubscribed,
      incrementWatchTime, upgradePlan
    }}>
      {children}
    </FreemiumContext.Provider>
  );
};
