import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [people, setPeople] = useState(1);
  const [custom, setCustom] = useState("");
  const [percent, setPercent] = useState(null);

  const handleReset = () => {
    setValue("");
    setCustom("");
    setPeople(1);
    setPercent(null);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handlePeople = (event) => {
    setPeople(event.target.value);
  };

  const handleCustom = (event) => {
    setCustom(`${event.target.value}`);
  };
  return (
    <div className="flex w-screen h-screen items-end md:items-center justify-center">
      <div className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-2 items-center w-full h-[90%] md:w-[55%] md:h-[55%] bg-white rounded-2xl p-4 pb-0 md:pr-4">
        <LeftSide
          value={value}
          people={people}
          custom={custom}
          handleChange={handleChange}
          handlePeople={handlePeople}
          handleCustom={handleCustom}
          setPercent={setPercent}
        />
        <RightSide
          value={value}
          people={people}
          custom={custom}
          percent={percent}
          handleReset={handleReset}
        />
      </div>
    </div>
  );
}

export default App;
