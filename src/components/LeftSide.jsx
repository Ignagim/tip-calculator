import { IconButton } from "@mui/material";
import React from "react";
import { BsCurrencyDollar, BsFillPersonFill } from "react-icons/bs";

function LeftSide({
  value,
  people,
  custom,
  handleChange,
  handlePeople,
  handleCustom,
  setPercent,
}) {
  return (
    <div className="bg-white w-full flex flex-col gap-6 lg:gap-0 mt-2 md:mx-4 ">
      <div className="flex flex-col md:p-4 md:pt-0 pt-0 justify-between">
        <h3>Bill</h3>
        <form
          className="flex items-center h-[3em] w-full bg-[hsl(189,41%,95%)] rounded-md border-2 hover:border-[#26c0ab]"
          placeholder="0"
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <BsCurrencyDollar />
          </IconButton>
          <input
            className="ml-1 text-right w-full focus:outline-none mr-4 bg-[hsl(189,41%,95%)] text-[24px] "
            value={value}
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="flex flex-col pt-2 md:p-4 gap-2 w-full">
        <h3>Select Tip %</h3>
        <div className="grid grid-cols-2 grid-rows-3 w-full h-full gap-4">
          <div
            onClick={() => setPercent("5")}
            className="text-white text-2xl bg-[hsl(183,100%,15%)] w-fulll h-[50px] flex justify-center items-center rounded-lg hover:bg-[hsl(172,67%,45%)] focus:bg-[hsl(172,67%,45%)] cursor-pointer"
          >
            5%
          </div>
          <div
            onClick={() => setPercent("10")}
            className="text-white text-2xl bg-[hsl(183,100%,15%)] w-fulll h-[50px] flex justify-center items-center rounded-lg hover:bg-[hsl(172,67%,45%)] focus:bg-[hsl(172,67%,45%)] cursor-pointer"
          >
            10%
          </div>
          <div
            onClick={() => setPercent("15")}
            className="text-white text-2xl bg-[hsl(183,100%,15%)] w-fulll h-[50px] flex justify-center items-center rounded-lg hover:bg-[hsl(172,67%,45%)] focus:bg-[hsl(172,67%,45%)] cursor-pointer"
          >
            15%
          </div>
          <div
            onClick={() => setPercent("25")}
            className="text-white text-2xl bg-[hsl(183,100%,15%)] w-fulll h-[50px] flex justify-center items-center rounded-lg hover:bg-[hsl(172,67%,45%)] focus:bg-[hsl(172,67%,45%)] cursor-pointer"
          >
            25%
          </div>
          <div
            onClick={() => setPercent("50")}
            className="text-white text-2xl bg-[hsl(183,100%,15%)] w-fulll h-[50px] flex justify-center items-center rounded-lg hover:bg-[hsl(172,67%,45%)] focus:bg-[hsl(172,67%,45%)] cursor-pointer"
          >
            50%
          </div>
          <div className="w-fulll h-full flex justify-center items-center rounded-lg">
            <input
              type="number"
              className=" text-2xl text-[hsl(183,100%,15%)] placeholder:tracking-tighter placeholder:text-[hsl(183,100%,15%)] w-full h-full text-center focus:outline-none focus:outline-[hsl(172,67%,45%)] rounded-lg"
              placeholder="Custom"
              value={custom}
              onChange={handleCustom}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-2 md:p-4 md:pt-0 md:mt-6">
        <div className="flex justify-between w-full">
          <h3>Number of People</h3>
          {people < 1 ? <p className="text-[#f00]">Can't be zero</p> : null}
        </div>
        <form
          className={`flex items-center w-full h-[3em] bg-[hsl(189,41%,95%)] rounded-md border-2 ${
            people < 1 ? "border-[#f00]" : null
          }`}
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <BsFillPersonFill />
          </IconButton>
          <input
            type="number"
            className="ml-1 text-right w-full focus:outline-none mr-4 bg-[hsl(189,41%,95%)] text-[24px]"
            value={people}
            onChange={handlePeople}
          />
        </form>
      </div>
    </div>
  );
}

export default LeftSide;
