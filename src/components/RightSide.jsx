import React from "react";

function RightSide({ value, people, custom, percent, handleReset }) {
  const total = () => {
    if (custom > 0 && people && value && !percent) {
      return totalPerPerson(value, people) + tipAmount(value, custom) / people;
    } else if (value && people) {
      return totalPerPerson(value, people) + tipAmount(value, percent) / people;
    } else {
      return "0.00";
    }
  };

  const totalPerPerson = (value, people) => {
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

  return (
    <div className="bg-[hsl(183,100%,15%)] h-[90%] w-full flex flex-col justify-between rounded-lg ">
      <div className="flex flex-col items-start justify-between w-full h-[40%] ml-10 mt-10">
        <div className="flex items-center justify-between w-full pr-20">
          <div className="w-full">
            <h3 className="text-white">Tip Amount</h3>
            <p className="text-gray-400 text-sm">/ total</p>
          </div>
          <h1 className="text-4xl text-[hsl(172,67%,45%)]">
            $
            {custom > 0 && value
              ? tipAmount(value, custom)
              : percent && value && custom < 1
              ? tipAmount(value, percent)
              : value && custom < 1 && !percent
              ? value
              : "0.00"}
          </h1>
        </div>
        <div className="flex items-center justify-between w-full pr-20">
          <div className="w-full">
            <h3 className="text-white">Total</h3>
            <p className="text-gray-400 text-sm">/ person</p>
          </div>
          <h1 className="text-4xl text-[hsl(172,67%,45%)]">${total()}</h1>
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
