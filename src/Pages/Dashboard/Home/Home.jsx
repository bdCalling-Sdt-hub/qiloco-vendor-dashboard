import React from "react";
import EarningOverview from "./EarningOverview";
import MonthlySale from "./MonthlySale";
import { PiCurrencyCircleDollarBold } from "react-icons/pi";
import { FaBoxOpen, FaCannabis } from "react-icons/fa6";
import TotalOrderList from "./TotalOrderList";

const stats = [
  {
    label: "Total Sell",
    value: "518",
    icon: <FaCannabis size={60} className="text-white" />,
    bg: "bg-quilocoS",
  },
  {
    label: "Total Order",
    value: "518",
    icon: <FaBoxOpen size={60} className="text-white" />,
    bg: "bg-quilocoS",
  },
  {
    label: "Total Earning",
    value: `$${78464}`,
    icon: <PiCurrencyCircleDollarBold size={60} className="text-white" />,
    bg: "bg-quilocoS",
  },
];

const Card = ({ item }) => (
  <div className="flex w-full items-center justify-start pl-10 h-32 rounded-xl bg-quilocoP gap-5">
    <div
      className={`${item.bg} w-20 h-20 flex items-center justify-center rounded-full`}
    >
      {item.icon}
    </div>
    <div className="flex flex-col">
      <h1 className="text-[24px] text-white font-normal mb-1">{item.label}</h1>
      <p className="text-[32px] text-white font-medium">{item.value}</p>
    </div>
  </div>
);

const Home = () => (
  <div className="px-3">
    <div className="flex flex-col flex-wrap items-end gap-5 justify-between w-full bg-transparent rounded-md">
      <div className="flex items-center justify-between flex-wrap lg:flex-nowrap gap-5 w-full">
        {stats.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
      <div className="flex items-center justify-between flex-wrap lg:flex-nowrap gap-5 w-full ">
        <div className="w-[50%] p-4 bg-quilocoP rounded-lg">
          <EarningOverview />
        </div>
        <div className="w-[50%] p-4 bg-quilocoP rounded-lg">
          <MonthlySale />
        </div>
      </div>
      <div className="w-full ">
        <div className="w-full flex items-center justify-between mb-2 text-white">
          <h3 className=" text-[24px] font-bold">Total Order List</h3>
          <a className="underline cursor-pointer">See all</a>
        </div>

        <div
          className="h-60 overflow-y-scroll rounded-lg bg-quilocoP [&::-webkit-scrollbar]:w-2
                    [&::-webkit-scrollbar-track]:rounded-full
                    [&::-webkit-scrollbar-track]:bg-gray-100
                    [&::-webkit-scrollbar-thumb]:rounded-full
                    [&::-webkit-scrollbar-thumb]:bg-gray-300
                    dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                    dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
        >
          <TotalOrderList />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
