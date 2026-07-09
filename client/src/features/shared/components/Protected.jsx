import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const Protected = () => {
  const user = useSelector((state) => state.auth.user);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default Protected;
