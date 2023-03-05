import { useState, createContext } from "react";

import { useAuth } from "./useAuth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(() => {
    const storedUser = sessionStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const { fakeAuthProvider } = useAuth();

  let signin = (newUser, callback) => {
    return fakeAuthProvider.signin(() => {
      sessionStorage.setItem('user', JSON.stringify(newUser));
      setUser(newUser);
      callback();
    })
  };

  let signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      sessionStorage.removeItem('user');
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}