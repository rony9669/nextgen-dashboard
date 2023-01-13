import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FiLayout, FiLogOut, FiChevronDown } from "react-icons/fi";
import { AiTwotoneSetting } from "react-icons/ai";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import "../App";

import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const [currentLink, setCurrentLink] = useState(1);
  const [show, setShow] = useState(false);
  const handleSetting = () => {
    setShow(!show);
  };
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content bg-secondary  ">
          <Navbar></Navbar>

          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu w-9/12 lg:w-80 md:w-80 bg-primary text-base-content">
            <img
              src="https://i.postimg.cc/1XY2gfqs/Next-Gen-logo-1.png"
              alt="/"
              className="w-30 h-40"
            />

            <li
              className={currentLink === 1 ? "active" : "none"}
              onClick={() => setCurrentLink(1)}
            >
              <Link
                to="/dashboard"
                className="text-white pl-10 text-sm font-semibold"
              >
                <FiLayout /> Dashboard
              </Link>
            </li>
            <li
              className={currentLink === 2 ? "active" : "none"}
              onClick={() => setCurrentLink(2)}
            >
              <Link
                to="/dashboard/attendance"
                className="text-white pl-10 pl-10 text-sm font-semibold"
              >
                <FiLayout /> Attendance
              </Link>
            </li>
            <li
              className={currentLink === 3 ? "active" : "none"}
              onClick={() => setCurrentLink(3)}
            >
              <Link
                to="/dashboard/employees"
                className="text-white pl-10 pl-10 text-sm font-semibold"
              >
                <FiLayout /> Employees
              </Link>
            </li>
            <li
              className={currentLink === 4 ? "active" : "none"}
              onClick={() => setCurrentLink(4)}
            >
              <Link
                to="/dashboard/leaves"
                className="text-white pl-10 pl-10 text-sm font-semibold"
              >
                <FiLayout /> Leaves
              </Link>
            </li>
            <li
              className={currentLink === 5 ? "active" : "none"}
              onClick={() => setCurrentLink(5)}
            >
              <Link
                to="/dashboard/expense"
                className="text-white pl-10 pl-10 text-sm font-semibold"
              >
                <FiLayout /> Expense
              </Link>
            </li>
            <li
              className={currentLink === 6 ? "active" : "none"}
              onClick={() => setCurrentLink(6)}
            >
              <Link
                to="/dashboard/notice"
                className="text-white pl-10 pl-10 text-sm font-semibold"
              >
                <FiLayout /> Notice
              </Link>
            </li>
            <li
              className={currentLink === 7 ? "active" : "none"}
              onClick={() => setCurrentLink(7)}
            >
              <Link
                to="/dashboard/departments"
                className="text-white pl-10 pl-10 text-sm font-semibold"
              >
                <FiLayout /> Departments
              </Link>
            </li>
            <li
              className={currentLink === 8 ? "active" : "none"}
              onClick={() => setCurrentLink(8)}
            >
              <Link
                onClick={handleSetting}
                className="text-white pl-10 pl-10 text-sm font-semibold"
              >
                {show && (
                  <span className="absolute ml-[-1.50rem] text-xl">
                    <MdOutlineKeyboardArrowUp />
                  </span>
                )}
                {!show && (
                  <span className="absolute ml-[-1.50rem] text-xl">
                    <FiChevronDown />
                  </span>
                )}
                <AiTwotoneSetting /> Settings
              </Link>
            </li>
            {show && (
              <ul className="text-white text-sm font-semibold ">
                <li
                  className={currentLink === 9 ? "active" : "none"}
                  onClick={() => setCurrentLink(9)}
                >
                  <span>
                    <BsDot className="text-white ml-11 font-semibold text-lg  " />
                    Approval
                  </span>
                </li>
                <li
                  className={currentLink === 10 ? "active" : "none"}
                  onClick={() => setCurrentLink(10)}
                >
                  <span>
                    <BsDot className="text-white ml-11 font-semibold text-lg  " />
                    Leave
                  </span>
                </li>
                <li
                  className={currentLink === 11 ? "active" : "none"}
                  onClick={() => setCurrentLink(11)}
                >
                  <span>
                    <BsDot className="text-white ml-11 font-semibold text-lg  " />
                    Office Setting
                  </span>
                </li>
                <li
                  className={currentLink === 12 ? "active" : "none"}
                  onClick={() => setCurrentLink(12)}
                >
                  <span>
                    <BsDot className="text-white ml-11 font-semibold text-lg  " />
                    My Subscriptions
                  </span>
                </li>
              </ul>
            )}
            <li
              className={currentLink === 13 ? "active" : "none"}
              onClick={() => setCurrentLink(13)}
            >
              <Link className="text-white pl-10 pl-10 text-sm font-semibold">
                <FiLogOut /> Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
