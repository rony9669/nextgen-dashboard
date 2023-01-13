import React from "react";
import { IoIosPeople } from "react-icons/io";
import Chart from "./Chart";
import { Summary } from "./Summary";

const Dashboard = () => {
  return (
    <div className="m-8 ">
      <h4 className="text-[30px] font-bold leading-8">Dashboard</h4>
      <h5 className="mb-3 mt-7 font-bold">Company Status</h5>
      <div className=" grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-7  justify-center ">
        <div className="card p-4 h-[190px] w-[220px] bg-base-100 shadow-xl">
          <div>
            <div className="flex flex-1 mb-2">
              <div>
                <IoIosPeople className="text-2xl" />
              </div>
              <div className="ml-2">Total Employee</div>
            </div>
          </div>
          <div className="flex justify-evenly">
            <div className="text-3xl font-bold">450</div>
            <div className="card-actions">
              <button className="btn btn-primary btn-sm text-white mt-1">
                View All
              </button>
            </div>
          </div>
          <div className="divider"></div>

          <div class="flex -space-x-4">
            <img
              class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://placeimg.com/192/192/people"
              alt=""
            />
            <img
              class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://placeimg.com/192/192/people"
              alt=""
            />
            <img
              class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://placeimg.com/192/192/people"
              alt=""
            />
            <img
              class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://placeimg.com/192/192/people"
              alt=""
            />
            <img
              class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://placeimg.com/192/192/people"
              alt=""
            />
            <a
              class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
              href="/"
            >
              <span className=" text-2xl mb-1">+</span>
            </a>
          </div>
        </div>
        <div className="card p-4 h-[190px] w-[220px] bg-base-100 shadow-xl">
          <div>
            <div className="flex flex-1 mb-2">
              <div>
                <IoIosPeople className="text-2xl" />
              </div>
              <div className="ml-2">Attend Today</div>
            </div>
          </div>
          <div className="flex justify-evenly">
            <div className="text-3xl font-bold">420</div>
            <div className="card-actions">
              <button className="btn btn-primary btn-sm mt-1 text-white">
                View All
              </button>
            </div>
          </div>
          <div className="divider"></div>

          <div class="flex -space-x-4">
            <img
              class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://placeimg.com/192/192/people"
              alt=""
            />
            <img
              class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://placeimg.com/192/192/people"
              alt=""
            />
            <img
              class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://placeimg.com/192/192/people"
              alt=""
            />
            <img
              class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://placeimg.com/192/192/people"
              alt=""
            />
            <img
              class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://placeimg.com/192/192/people"
              alt=""
            />
            <a
              class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
              href="/"
            >
              <span className=" text-2xl mb-1">+</span>
            </a>
          </div>
        </div>
        <div className="card p-4 h-[190px] w-[220px] bg-base-100 shadow-xl">
          <div>
            <div className="flex flex-1 mb-2">
              <div>
                <IoIosPeople className="text-2xl" />
              </div>
              <div className="ml-2">Employees on Leave</div>
            </div>
          </div>
          <div className="flex justify-evenly">
            <div className="text-3xl font-bold">15</div>
            <div className="card-actions">
              <button className="btn btn-primary btn-sm mt-1 text-white">
                View All
              </button>
            </div>
          </div>
          <div className="divider"></div>

          <div class="flex -space-x-4">
            <img
              class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://placeimg.com/192/192/people"
              alt=""
            />
            <img
              class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://placeimg.com/192/192/people"
              alt=""
            />
            <img
              class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://placeimg.com/192/192/people"
              alt=""
            />
            <img
              class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://placeimg.com/192/192/people"
              alt=""
            />
            <img
              class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://placeimg.com/192/192/people"
              alt=""
            />
            <a
              class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
              href="/"
            >
              <span className=" text-2xl mb-1">+</span>
            </a>
          </div>
        </div>
        <div className="card p-4 h-[190px] w-[220px] bg-base-100 shadow-xl">
          <div>
            <div className="flex flex-1 mb-2">
              <div>
                <IoIosPeople className="text-2xl" />
              </div>
              <div className="ml-2">New Expense Request</div>
            </div>
          </div>
          <div className="flex justify-evenly">
            <div className="text-3xl font-bold">5</div>
            <div className="card-actions">
              <button className="btn btn-primary btn-sm mt-1 text-white">
                View All
              </button>
            </div>
          </div>
          <div className="divider"></div>

          <div class="flex -space-x-4">
            <img
              class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://placeimg.com/192/192/people"
              alt=""
            />
            <img
              class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://placeimg.com/192/192/people"
              alt=""
            />
            <img
              class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://placeimg.com/192/192/people"
              alt=""
            />
            <img
              class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://placeimg.com/192/192/people"
              alt=""
            />
            <img
              class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://placeimg.com/192/192/people"
              alt=""
            />
            <a
              class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
              href="/"
            >
              <span className=" text-2xl mb-1">+</span>
            </a>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-12 mb-5">
        <Chart />
        <Summary />
      </div>
    </div>
  );
};

export default Dashboard;
