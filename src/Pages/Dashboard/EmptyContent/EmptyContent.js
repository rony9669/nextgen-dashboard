import React from "react";
import { MdOutlineUpcoming } from "react-icons/md";

const EmptyContent = () => {
  return (
    <div
      className=" flex flex-col justify-center items-center 
     mt-12"
    >
      <MdOutlineUpcoming className="text-2xl text-primary" />
      <h2 className="text-5xl font-extrabold">Und Processing</h2>
    </div>
  );
};

export default EmptyContent;
