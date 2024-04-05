import React from "react";
import visibility from "./Hoc";
import N1WithHoc from "./Nested1";

const Task5 = () => {
  return <N1WithHoc />;
};

const T5WithHoc = visibility(Task5, true);

export default T5WithHoc;
