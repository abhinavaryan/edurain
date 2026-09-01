import React, { createContext, useContext, useState } from 'react';

const WalletContext = createContext();

export const useWallet = () => useContext(WalletContext);

export const WalletProvider = ({ children }) => {
  const [pits, setPits] = useState(120); // Initial balance
  const [xp, setXp] = useState(0); // Experience points
  const pendingPits = React.useRef(120);

  const addPits = (amount) => {
    pendingPits.current += amount;
    setPits((prev) => prev + amount);
  };

  const addXp = (amount) => {
    setXp((prev) => prev + amount);
  };

  const spendPits = (amount) => {
    if (amount <= 0) return false;
    if (pendingPits.current >= amount) {
      pendingPits.current -= amount;
      setPits((prev) => (prev >= amount ? prev - amount : prev));
      return true;
    }
    return false;
  };

  return (
    <WalletContext.Provider value={{ pits, addPits, spendPits, xp, addXp }}>
      {children}
    </WalletContext.Provider>
  );
};
