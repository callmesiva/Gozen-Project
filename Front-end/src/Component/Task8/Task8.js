import React, { useState } from "react";
import Child from "./Child";

const Task8 = () => {
  const [greet, setGreet] = useState("");
  const [visible, setVisible] = useState(false);

  function handleGreet(value, isVisible) {
    setVisible(isVisible);
    setGreet(value);
  }

  return (
    <>
      <h4 className="mt-10 text-center m-auto">
        State Lift-Up and Props Drilling
      </h4>
      <div className="m-auto mt-5 mb-5 size-56 flex flex-col items-center pt-10 border-2 rounded-lg">
        <Child
          name={"from props drill"}
          handleGreet={handleGreet}
          isVisible={visible}
        />
        {visible && <h4 className="text-center text-md mt-3">{greet}</h4>}
      </div>
    </>
  );
};

export default Task8;
