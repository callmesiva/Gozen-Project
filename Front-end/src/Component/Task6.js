import React, { useState, useEffect } from "react";

const Task6 = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setTime(time + 1), 1000);
    return () => clearTimeout(timer);
  }, [time]);

  return (
    <>
      <h4 className="mt-10 text-center m-auto">useEffect Hook</h4>
      <h2 className="my-5 border-2 p-1 w-40 m-auto text-center rounded-lg">
        Timer: {time} seconds
      </h2>
    </>
  );
};

export default Task6;
