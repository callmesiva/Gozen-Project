import { useState } from "react";

const visibility = (Component, showHeader) => {
  return () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggle = () => setIsVisible((prevVisible) => !prevVisible);

    return (
      <>
        {showHeader && (
          <h4 className="mt-10 text-center m-auto">
            Component Composition (HOC)
          </h4>
        )}

        <div
          className={`m-auto my-5 size-60 ${
            showHeader ? "border-2 rounded-lg" : ""
          }`}
        >
          <button
            className="block mx-auto mt-5 w-32 h-10 bg-blue-500 rounded-md"
            onClick={toggle}
          >
            Click to end
          </button>
          {isVisible && <Component />}
        </div>
      </>
    );
  };
};

export default visibility;
