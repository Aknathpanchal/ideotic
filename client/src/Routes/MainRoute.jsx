import React from "react";
import { Route, Routes } from "react-router-dom";
import Breeds from "../pages/Breeds";
import Login from "../pages/Login";
import Details from "../pages/Details";
import Navbar from "../components/Navbar";
 import PrivateRoute from "./PrivateRoute";
import Register from "../pages/Register";

const MainRoute = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
             <PrivateRoute>
              <Breeds />
           </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
};

export default MainRoute;
