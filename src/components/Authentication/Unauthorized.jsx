import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Unauthorized = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  return user ? <Navigate to="/dashboard" replace /> : children;
};

export default Unauthorized;
