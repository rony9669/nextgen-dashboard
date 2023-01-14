import React from "react";
import "./Summary.css";

export const Summary = () => {
  return (
    <div className="">
      <h5 className="mb-3 font-bold">Task Summary</h5>
      <div className=" border-dashed border-2 border-primary rounded lg:w-1/2 p-[16px]">
        <p>Total task</p>
        <p className="font-bold">112</p>

        <div className="mb-5">
          <div className="mt-[28px]">
            <p className="mb-1">Completed</p>
            <div className="progress">
              <p className={`after:w-[60%] `}>
                {" "}
                <span className="text-slate-400">50</span>/80
              </p>
            </div>
          </div>
          <div className="mt-[28px]">
            <p className="mb-1">In Progress</p>
            <div className="progress">
              <p className="after:w-[5%] ">15/112</p>
            </div>
          </div>
          <div className="mt-[28px]">
            <p className="mb-1">Pending</p>
            <div className="progress">
              <p className="after:w-[30%]">30/80</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
