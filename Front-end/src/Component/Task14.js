import React, { useState } from "react";

const Task14 = () => {
  const [optimistic, setOptimistic] = useState("");
  const [opacity, setOpacity] = useState(true);

  let handleSuccess = () => {
    setOptimistic("Success");
    setOpacity(false);
    let Success = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Success"), 2000);
    });

    Success.then((res) => {
      setOptimistic("Success");
      setOpacity(true);
    }).catch((err) => console.log(err));
  };

  let handleFail = () => {
    setOptimistic("Success");
    setOpacity(false);
    let Success = new Promise((resolve, reject) => {
      setTimeout(() => reject("Success"), 2000);
    });

    Success.then((res) => {}).catch((err) => {
      setOptimistic("Failed");
      setOpacity(true);
    });
  };

  return (
    <>
      <h4 className="mt-10 text-center m-auto">Optimistic UI Updates</h4>
      <div className=" w-80 h-40 m-auto border-2 flex flex-col items-center mt-5">
        <h6
          className={`w-40 h-16 text-center pt-5 m-5 border-2 ${
            opacity ? "opacity-100" : "opacity-60"
          }`}
        >
          {optimistic}
        </h6>
        <div className="flex justify-center gap-5">
          <button
            className="bg-green-300 p-1 rounded-md"
            onClick={handleSuccess}
            disabled={!opacity}
          >
            Optimistic Success
          </button>
          <button
            className="bg-red-300 p-1 rounded-md"
            onClick={handleFail}
            disabled={!opacity}
          >
            Optimistic Fail
          </button>
        </div>
      </div>
    </>
  );
};

export default Task14;
