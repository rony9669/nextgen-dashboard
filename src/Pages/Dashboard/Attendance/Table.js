import React, { useState } from "react";
import { BsFileEarmarkWordFill } from "react-icons/bs";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import { FaEye } from "react-icons/fa";

export const Table = () => {
  const [paginationId, setPaginationId] = useState(2);
  return (
    <div class=" overflow-x-auto  lg:overflow-hidden w-full bg-white  rounded ">
      <table class="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-all-search" class="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Department
            </th>
            <th scope="col" class="px-10 py-3">
              Check In
            </th>
            <th scope="col" class="px-10 py-3">
              Check Out
            </th>
            <th scope="col" class="px-6 py-3">
              Remark
            </th>
            <th scope="col" class="px-6 py-3">
              Hours
            </th>
            <th scope="col" class="px-6 py-3">
              Overtime
            </th>

            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-1" class="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Jahid Hasan
            </th>
            <td class="px-6 py-4">HR & Admin</td>
            <td class="px-6 py-4">
              <span className="bg-green-600 text-white rounded-full">
                09:45 am
              </span>
            </td>
            <td class="px-6 py-4">
              <span className=" bg-green-600  text-white rounded-full ">
                06:05 pm
              </span>
            </td>

            <td class="px-6 py-4"></td>
            <td class="px-6 py-4"></td>
            <td class="px-6 py-4"></td>
            <td class="px-6 py-4">
              <span>
                <FaEye className="text-primary text-2xl" />
              </span>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-2"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-2" class="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Jahid Hasan
            </th>
            <td class="px-6 py-4">HR & Admin</td>
            <td class="px-6 py-4">
              <span className="bg-red-500 text-white p-[1px] rounded-full">
                09:45 am
              </span>
            </td>
            <td class="px-6 py-4">
              <span className="bg-red-500 text-white p-[1px] rounded-full">
                06:05 pm
              </span>
            </td>
            <td class="px-6 py-4">
              <span>
                <BsFileEarmarkWordFill className="text-primary text-xl" />
              </span>
            </td>
            <td class="px-6 py-4"></td>
            <td class="px-6 py-4"></td>
            <td class="px-6 py-4">
              <span>
                <FaEye className="text-primary text-2xl" />
              </span>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-3"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-3" class="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Jahid Hasan
            </th>
            <td class="px-6 py-4">HR & Admin</td>
            <td class="px-6 py-4">
              <span className="bg-green-600 text-white p-[2px] rounded-full">
                09:45 am
              </span>
            </td>
            <td class="px-6 py-4">
              <span className="bg-green-600 text-white p-[2px] rounded-full">
                06:05 pm
              </span>
            </td>
            <td class="px-6 py-4"></td>
            <td class="px-6 py-4"></td>
            <td class="px-6 py-4"></td>
            <td class="px-6 py-4">
              <span>
                <FaEye className="text-primary text-2xl" />
              </span>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-3"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-3" class="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Jahid Hasan
            </th>
            <td class="px-6 py-4">HR & Admin</td>
            <td class="px-6 py-4">
              <span className="bg-red-500 text-white p-[2px] rounded-full">
                09:45 am
              </span>
            </td>
            <td class="px-6 py-4">
              <span className="bg-red-500 text-white p-[2px] rounded-full">
                06:05 pm
              </span>
            </td>
            <td class="px-6 py-4">
              <span>
                <BsFileEarmarkWordFill className="text-primary text-xl" />
              </span>
            </td>
            <td class="px-6 py-4"></td>
            <td class="px-6 py-4"></td>
            <td class="px-6 py-4">
              <span>
                <FaEye className="text-primary text-2xl" />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-end mt-2 mb-2 ">
        <div></div>
        <div className="btn-group ">
          <button
            onClick={() =>
              paginationId > 1 ? setPaginationId(paginationId - 1) : ""
            }
            className="btn bg-white text-slate-900 border-0 btn-sm hover:bg-slate-400 hover:text-white"
          >
            <FaAngleLeft></FaAngleLeft>
          </button>
          {[...Array(5)].map((item, idx) => (
            <div key={idx}>
              <button
                onClick={() => setPaginationId(idx + 1)}
                className={` ${
                  paginationId === idx + 1
                    ? "bg-slate-300 rounded-[7px] text-white"
                    : "bg-white"
                }  btn-sm border-0 hover:rounded-[7px] hover:text-white hover:bg-slate-300`}
              >
                <span className="text-black ">{idx + 1}</span>
              </button>
            </div>
          ))}
          <button
            onClick={() =>
              paginationId < 5
                ? setPaginationId(paginationId + 1)
                : setPaginationId(5)
            }
            className="btn bg-white text-slate-900  border-0 btn-sm hover:bg-slate-400 hover:text-white"
          >
            <FaAngleRight></FaAngleRight>
          </button>
        </div>
      </div>
    </div>
  );
};
