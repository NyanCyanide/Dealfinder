import React from "react";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

function Header() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000 * 60); // Update the date every minute
    return () => clearInterval(interval);
  }, []);

  const getFormattedDate = () => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day = daysOfWeek[currentDate.getDay()];
    const month = months[currentDate.getMonth()];
    const date = currentDate.getDate();

    return `${day} ${month} ${date}`;
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row pt-8 md:pt-5 px-4 md:px-20  items-center justify-between ">
          <div className="">
            <p className="text-5xl md:text-6xl font-smg font-bold">
              Dealfinder
            </p>
          </div>
          <div className="">
            <img src={logo} alt="" className="h-12 md:h-20" />
          </div>
        </div>
        <div className="px-4 md:px-20">
          <p className="font-bold text-xl md:text-2xl font-smg">
            {getFormattedDate()}
          </p>
        </div>
        <div className="flex flex-row space-x-4 py-2 md:py-5 px-4 md:px-20">
          <button className="pt-1 px-3 md:pt-2 md:pb-1 md:px-6 font-semibold text-base md:text-xl bg-c1 shadow-xl hover:bg-rose-700 hover:text-white font-smg duration-500 rounded-lg">
            Amazon
          </button>
          <button
            className="pt-1 px-3 md:pt-2 md:pb-1 md:px-6 font-semibold text-base md:text-xl bg-c1 shadow-xl hover:bg-rose-700 hover:text-white font-smg duration-500 rounded-lg"
            disabled
          >
            Ebay
          </button>
          <button
            className="pt-1 px-3 md:pt-2 md:pb-1 md:px-6 font-semibold text-base md:text-xl bg-c1 shadow-xl hover:bg-rose-700 hover:text-white font-smg duration-500 rounded-lg"
            disabled
          >
            Alibaba
          </button>
          <button
            className="pt-1 px-3 md:pt-2 md:pb-1 md:px-6 font-semibold text-base md:text-xl bg-c1 shadow-xl hover:bg-rose-700 hover:text-white font-smg duration-500 rounded-lg"
            disabled
          >
            Flipkart
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
