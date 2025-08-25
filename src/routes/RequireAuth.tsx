import type { JSX } from "react";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const token = sessionStorage.getItem("accessToken");
  const location = useLocation();

  if (!token && false) {
    // Chưa login → chuyển hướng về /login và nhớ URL gốc
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
