import React, { createContext, useState } from "react";

// Create context
export const DataContext = createContext();

const Usercontext = ({ children }) => {
  // Example state for user
  const [user, setUser] = useState("Rishabh");

  // Define the value you want to share
  const value = { user, setUser };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export default Usercontext;
