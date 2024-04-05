import React, { useState } from "react";
import { useData } from "./Context";

const ChildComponent = () => {
  const { data, setData } = useData();
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible(!visible);
    if (visible) setData("Data sent from child");
    else setData("");
  };

  return (
    <div>
      <h2 className="text-center mt-5">Child Component</h2>
      <button
        className="w-40 p-1 mt-2 rounded-md bg-blue-500"
        onClick={handleClick}
      >
        Send Data to Parent
      </button>
    </div>
  );
};

export default ChildComponent;
