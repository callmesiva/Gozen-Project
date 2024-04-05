import React, { useState } from "react";

const Task2 = () => {
  const [counter, setCounter] = useState(0);

  function handleCount(action) {
    if (action === "plusOne") setCounter(counter + 1);
    else if (action === "minusOne") setCounter(counter - 1);
  }

  return (
    <>
      <h4 className="mt-10 text-center m-auto">State Management</h4>
      <div className="border-2 rounded-lg w-64 p-3 m-auto mt-5 flex justify-between">
        <button
          className="bg-green-200 p-1 rounded-md"
          onClick={() => handleCount("plusOne")}
        >
          Increase
        </button>
        <span>{counter}</span>
        <button
          className="bg-red-200 p-1 rounded-md"
          onClick={() => handleCount("minusOne")}
        >
          Decrease
        </button>
      </div>
    </>
  );
};

export default Task2;
