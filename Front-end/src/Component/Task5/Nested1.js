import React from "react";
import visibility from "./Hoc";
import N2WithHoc from "./Nested2";

const Nested1 = () => {
  return <N2WithHoc />;
};

const N1WithHoc = visibility(Nested1);

export default N1WithHoc;
