import React, { useContext, useEffect } from "react";
import { Route, Navigate, useNavigate } from "react-router-dom";

// import { Context } from "../../../context";

export default function ProtectedRoute({ children }) {
//   const navigate = useNavigate()
  const token = localStorage.getItem("token");
//   const {globalUrl} = useContext(Context)

//   return token ? <>{children}</> : <Navigate replace to="/login" />;
  return token ? <>{children}</> : <Navigate replace to="/egamnazar-login" />;
}