import React from "react";

function RightSide({ value, people, custom, percent, handleReset }) {
  const tipPerPerson = (value, people) => {
    const tip = value / people;
    if (Math.floor(tip) === tip) {
      return tip;
    } else {
      return tip.toFixed(2);
    }
  };

  const tipAmount = (value, percent) => {
    const tip = (percent / 100) * value;
    if (Math.floor(tip) === tip) {
      return tip;
    } else {
      return tip.toFixed(2);
    }
  };

  const totalPerPeson = (value, people, percent) => {
    if (
      Math.floor(
        tipPerPerson(value, people) + tipAmount(value, percent) / people
      ) ===
      tipPerPerson(value, people) + tipAmount(value, percent) / people
    ) {
      return tipPerPerson(value, people) + tipAmount(value, percent) / people;
    } else {
      return (
        tipPerPerson(value, people) +
        tipAmount(value, percent) / people
      ).toFixed(2);
    }
  };

  return (
    <div className="bg-[hsl(183,100%,15%)] h-[90%] w-full flex flex-col justify-between rounded-lg ">
      <div className="flex flex-col items-start justify-between w-full h-[40%] ml-10 mt-10">
        <div className="flex items-center justify-between w-full pr-20">
          <div className="w-full">
            <h3 className="text-white">Tip Amount</h3>
            <p className="text-gray-400 text-sm">/ person</p>
          </div>
          <h1 className="text-4xl text-[hsl(172,67%,45%)]">
            $
            {custom && value
              ? tipAmount(value, custom)
              : percent && value && !custom
              ? tipAmount(value, percent)
              : value && !custom && !percent
              ? value
              : "0.00"}
          </h1>
        </div>
        <div className="flex items-center justify-between w-full pr-20">
          <div className="w-full">
            <h3 className="text-white">Total</h3>
            <p className="text-gray-400 text-sm">/ person</p>
          </div>
          <h1 className="text-4xl text-[hsl(172,67%,45%)]">
            $
            {custom && people && value
              ? tipPerPerson(value, people) + tipAmount(value, custom) + people
              : value && percent && people
              ? tipPerPerson(value, people) + tipAmount(value, percent) / people
              : "0.00"}
          </h1>
        </div>
      </div>
      <button
        onClick={handleReset}
        className="bg-[hsl(172,67%,45%)] mb-8 mx-auto w-[80%] h-10 rounded-md hover:bg-[hsl(172,67%,75%)]"
      >
        RESET
      </button>
    </div>
  );
}

export default RightSide;
