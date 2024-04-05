import React, { useState } from "react";

const Task3 = () => {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState("");

  function handleLoad() {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
      setData("Loaded successfully");
    }, 2000);
  }
  return (
    <>
      <h4 className="mt-10 text-center m-auto">Conditional Rendering</h4>
      <div className="flex justify-center mt-5">
        <div className="size-60 border-2 p-5 rounded-lg flex flex-col items-center ">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
            onClick={() => handleLoad(load)}
          >
            Click to load
          </button>
          {load ? <h2>Loading...</h2> : <h2>{data}</h2>}
        </div>
      </div>
    </>
  );
};

export default Task3;
