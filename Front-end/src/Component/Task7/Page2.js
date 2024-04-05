import React, { useEffect } from "react";

const Page2 = () => {
  useEffect(() => {
    localStorage.removeItem("log");
  }, []);
  return <h4 className="mt-10 text-center m-auto">welcome to About</h4>;
};

export default Page2;
