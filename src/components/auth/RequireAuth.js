import { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";

import { AuthContext } from "../auth/AuthProvider";

function RequireAuth({ children }) {

  let {user} = useContext(AuthContext);
  let location = useLocation();
  
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;