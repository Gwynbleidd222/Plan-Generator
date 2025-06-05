import React from "react";
import {  Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Nav from "./PrivateLayout/Nav";


export default function PrivateRoute() {
  const { currentUser } = useAuth();

  // return currentUser ? <Outlet/> : <Navigate to="/login" />;

  if (!currentUser) {
    return <Navigate to='/login'/>
  }

  return (
    <>
      <Nav/>
      <Outlet/>
    </>
  )
}


