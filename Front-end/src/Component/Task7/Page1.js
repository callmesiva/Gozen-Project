import React, { useEffect } from "react";

const Page1 = () => {
  useEffect(() => {
    localStorage.removeItem("log");
  }, []);
  return <h4 className="mt-10 text-center m-auto">welcome to Profile</h4>;
};

export default Page1;
