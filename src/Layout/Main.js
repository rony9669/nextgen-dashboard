import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import DashboardLayout from "./DashboardLayout";

const Main = () => {
  return (
    <div>
      <DashboardLayout></DashboardLayout>
    </div>
  );
};

export default Main;
