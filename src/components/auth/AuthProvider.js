import { useState } from "react";

import { Auth } from "./Auth";

const AuthProvider = ({ children, AuthContext}) => {

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const { fakeAuthProvider } = Auth();

  let signin = (newUser, callback) => {
    return fakeAuthProvider.signin(() => {
      localStorage.setItem('user', JSON.stringify(newUser));
      setUser(newUser);
      callback();
    })
  };

  let signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      localStorage.removeItem('user');
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;