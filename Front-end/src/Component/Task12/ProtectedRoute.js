import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  let auth = localStorage.getItem("log");
  if (!auth) {
    return <h2 className="text-center m-5">Access Denied</h2>;
  }
  return <Outlet />;
};

export default ProtectedRoute;
