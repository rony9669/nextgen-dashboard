import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaCog, FaAngleDown } from "react-icons/fa";
import { Table } from "./Table";

const Attendance = () => {
  return (
    <div className="pl-4 mt-5 mb-5 mr-5">
      <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center mb-5 ">
        <h4 className=" lg:text-[26px] text-3xl font-bold"></h4>
        <div className="flex justify-end items-center">
          <button className="btn btn-sm btn-primary capitalize mr-8 text-white rounded">
            Download Report
          </button>
          <button className="btn bg-transparent border-0 hover:bg-transparent">
            <FaCog className="text-primary w-7 h-7"></FaCog>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-4  justify-center  w-9/12">
          <div className="flex justify-evenly p-3 rounded-md border border-slate-400 bg-white">
            <span>january 03, 2023 </span>
            <AiOutlineCalendar className="mt-1 " />
          </div>
          <div className=" p-3 rounded-md border border-slate-400 bg-white">
            <span>Department </span>
          </div>
          <div className="flex justify-evenly p-3 rounded-md border border-slate-400 bg-white">
            <span>Attendance </span>
            <FaAngleDown className="mt-1 " />
          </div>
          <div className="flex justify-evenly p-3 rounded-md border border-slate-400 bg-white">
            <span>Present </span>
            <FaAngleDown className="mt-1 " />
          </div>

          <div className="p-3 rounded-md border border-slate-400 bg-white">
            <span>Check In </span>
          </div>
          <div className=" p-3 rounded-md border border-slate-400 bg-white">
            <span>Location </span>
          </div>
          <div className="flex justify-evenly p-3 rounded-md border border-slate-400 bg-white">
            <span>Designation </span>
            <FaAngleDown className="mt-1 " />
          </div>
          <div className="flex  justify-evenly p-3 rounded-md border border-slate-400 bg-white">
            <div>
              <span>Department</span>
            </div>
            <div>
              <FaAngleDown className="mt-1" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 ">
        <Table />
      </div>
    </div>
  );
};

export default Attendance;
