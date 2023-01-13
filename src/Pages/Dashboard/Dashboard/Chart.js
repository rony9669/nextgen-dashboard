import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";
import { TbCurrencyTaka } from "react-icons/tb";

const data = [
  {
    name: "Nov 1",
    uv: 2200,
    pv: 2200,
    amt: 2200,
  },
  {
    name: "Nov 4",
    uv: 1500,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Nov 8",
    uv: 2100,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Nov 12",
    uv: 1200,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Nov 16",
    uv: 2500,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Nov 20",
    uv: 2200,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Nov 24",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Nov 28",
    uv: 700,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Nov 30",
    uv: 3590,
    pv: 4300,
    amt: 2100,
  },
];

const Chart = () => {
  return (
    <div>
      <h5 className="mb-3 font-bold">Expense Report</h5>
      <div className="bg-white rounded p-[20px]">
        <div className="flex lg:flex-row md:flex-row flex-col-reverse justify-between items-center">
          <div>
            <ul className="flex text-sm justify-start items-center md:ml-12 lg:ml-12 text-slate-500">
              <li className="text-sm mr-2 text-black font-semibold cursor-pointer">
                Day
              </li>
              <li className="text-sm mr-2 cursor-pointer">week</li>
              <li className="text-sm mr-2 cursor-pointer">Month</li>
              <li className="text-sm mr-2 cursor-pointer">Year</li>
            </ul>
          </div>
          <button className="btn btn-sm btn-primary lg:mb-0 mb-2 text-white capitalize">
            Export Details
          </button>
        </div>
        <div className="text-[10px]">
          <p className="text-[26px] flex justify-start lg:ml-12 md:ml-12 text-center lg:text-start md:text-start lg:mb-0 mb-2 font-bold">
            <span className="text-3xl mt-1  font-bold">
              <TbCurrencyTaka />
            </span>
            <span>45,000</span>
          </p>
          <ResponsiveContainer height={230}>
            <AreaChart
              width={500}
              height={200}
              data={data}
              margin={{
                top: 0,
                right: 20,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4f48d8be" stopOpacity={1} />
                  <stop offset="95%" stopColor="#8884d873" stopOpacity={0.1} />
                </linearGradient>
              </defs>

              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#1509f0fd"
                fill="url(#colorUv)"
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Chart;
