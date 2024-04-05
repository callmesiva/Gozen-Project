import React, { useEffect } from "react";

const Page3 = () => {
  useEffect(() => {
    localStorage.removeItem("log");
  }, []);
  return <h4 className="mt-10 text-center m-auto">welcome to Contact</h4>;
};

export default Page3;
