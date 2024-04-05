import React from "react";

const Child = ({ name, handleGreet, isVisible }) => {
  return (
    <>
      <h5 className="text-md">Hello {name}</h5>
      <button
        className="w-24 p-1 mt-3 rounded-md bg-blue-500"
        onClick={() => {
          handleGreet("Hi from lift upped state", !isVisible);
        }}
      >
        Click me
      </button>
    </>
  );
};

export default Child;
