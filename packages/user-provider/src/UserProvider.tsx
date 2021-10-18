import React, { createContext, useContext } from "react";

const UserContext = createContext({ username: null });

interface UserProviderProps {
  children: React.ReactNode;
  username: string;
}
export const UserProvider = ({ children, username }: UserProviderProps) => (
  <UserContext.Provider value={{ username }}>{children}</UserContext.Provider>
);

export const useUsername = () => useContext(UserContext).username;
