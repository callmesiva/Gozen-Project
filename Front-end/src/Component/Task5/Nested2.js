import React from "react";
import Nested3 from "./Nested3";
import visibility from "./Hoc";

const Nested2 = () => {
  return <Nested3 />;
};

const N2WithHoc = visibility(Nested2);

export default N2WithHoc;
