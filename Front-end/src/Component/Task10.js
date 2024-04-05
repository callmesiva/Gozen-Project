import React, { useState, useMemo } from "react";

const Task10 = () => {
  const [withMemo, setWithMemo] = useState(0);
  const [withOutMemo, setWithOutMemo] = useState(0);

  let withOutUseMemo = () => {
    const array = Array.from({ length: 10000000 }, (_, index) => index);
    setWithOutMemo(withOutMemo + 1);
  };

  const withUseMemo = useMemo(() => {
    return Array.from({ length: 10000000 }, (_, index) => index);
  }, []);

  return (
    <>
      <h4 className="mt-10 text-center m-auto">Performance Optimization</h4>

      <h4 className="mt-10 text-center m-auto">
        Creating Array Size Of 10Million On Every Render
      </h4>

      <div className="justify-center mt-5 gap-10 md:flex md:flex-row ">
        <div className="border-2 rounded-lg m-auto sm:m-0 mb-3 p-2 text-center w-60 h-40">
          <h2>Without UseMemo</h2>
          <p>Render count: {withOutMemo}</p>
          <button
            className="w-40 p-1 mt-2 rounded-md bg-blue-500"
            onClick={withOutUseMemo}
          >
            Spam Re-Render
          </button>
        </div>

        <div className="border-2 rounded-lg m-auto sm:m-0 mb-3 p-2 text-center w-60 h-40">
          <h2>With UseMemo</h2>
          <p>Render count: {withMemo}</p>
          <button
            className="w-40 p-1 mt-2 rounded-md bg-blue-500"
            onClick={() => setWithMemo(withMemo + 1)}
          >
            Spam Re-Render
          </button>
        </div>
      </div>
    </>
  );
};

export default Task10;
