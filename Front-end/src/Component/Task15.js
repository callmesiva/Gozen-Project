import React, { useMemo } from "react";

const Task15 = () => {
  const array = useMemo(
    () => Array.from({ length: 10000000 }, (_, index) => index),
    []
  );

  return (
    <>
      <h4 className="mt-10 text-center m-auto">Lazy Loading</h4>
      <div className="mt-5 mx-auto w-96 border-2 rounded-lg p-4 text-center">
        <h3 className="text-lg font-semibold mb-2">
          Lazy Loading Confirmation
        </h3>
        <p className="text-sm mb-4">To confirm lazy loading</p>
        <div className="flex justify-center ">
          <ul className="list-disc text-left">
            <li>Inspect the network tab or sources tab.</li>
            <li>Ensure separate file of Task15 is created.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Task15;
