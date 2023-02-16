import { useState, useContext } from "react";

import { Auth } from "./Auth";
import { Context } from "./AuthContext";

const AuthProvider = ({ children, AuthContext}) => {

  const [user, setUser] = useState(null);

  const { fakeAuthProvider } = Auth();

  let signin = (newUser, callback) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;