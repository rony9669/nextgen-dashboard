import React from "react";
import { SlCalender } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 flex justify-between ">
      <div className="flex-1">
        <div className="form-control w-2/4 h-1/4 ">
          <input
            type="search"
            placeholder="&#xf002;   SEARCH"
            className="pl-9 pt-1 hidden lg:block md:block pb-1 pr-2 rounded-l-md focus:outline-none text-[12px] lg:w-[300px] text-sm border-2   "
            spellcheck="false"
            data-ms-editor="true"
            autocomplete="off"
          />
          <span className=" block lg:hidden md:hidden pl-5">
            <BsSearch />
          </span>
        </div>
      </div>
      <div className="flex-none gap-2">
        <div>
          <SlCalender className="text-xl" />
        </div>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs mt-3.5 mr-0.5 bg-red-600 border-b-red-600 indicator-item"></span>
          </div>
        </button>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt="" />
            </div>
          </label>
        </div>
      </div>

      <label
        htmlFor="dashboard-drawer"
        tabIndex={2}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
