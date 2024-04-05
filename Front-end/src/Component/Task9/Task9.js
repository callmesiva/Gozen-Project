import React from "react";
import { useData } from "./Context";
import Child from "../Task9/Child";

const Task9 = () => {
  const { data } = useData();

  return (
    <div>
      <h4 className="mt-10 text-center m-auto">Context API</h4>
      <div className="m-auto mt-5 mb-5 size-56 flex flex-col items-center pt-10 border-2 rounded-lg">
        <div className="h-5 m-2">
          <h4>Parent Component</h4>
        </div>
        <div className="h-5">
          <h2>{data}</h2>
        </div>

        <Child />
      </div>
    </div>
  );
};

export default Task9;
