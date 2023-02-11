import { cloneElement } from "react";
import { useLocation, Navigate } from "react-router-dom";

function RequireAuth({ children, useAuth }) {

  let auth = useAuth();
  let location = useLocation();
  
  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return cloneElement(children, { useAuth });
}

export default RequireAuth;