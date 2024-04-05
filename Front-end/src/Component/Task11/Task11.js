import React, { useState } from "react";

const Task11 = () => {
  const [count, setCount] = useState(0);

  if (count == 1) throw new Error("Limit Exists");

  return (
    <>
      <h4 className="mt-10 text-center m-auto">
        Error Boundary Implementation
      </h4>

      <button
        className="block mx-auto mt-5 w-32  h-7 bg-blue-500 rounded-md"
        onClick={() => setCount(count + 1)}
      >
        Throw an error
      </button>
    </>
  );
};

export default Task11;
