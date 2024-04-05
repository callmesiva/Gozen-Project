import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const tasks = Array.from({ length: 15 }, (_, index) => `Task${index + 1}`);

  return (
    <div className=" w-auto sm:w-1/2 lg:w-1/3 p-3 m-auto mt-5">
      <h2 className="text-center">Welcome Home</h2>
      <div className="flex flex-wrap gap-5 border-2 p-5 m-5 justify-center">
        {tasks.map((task, i) => (
          <Link
            to={`/task${i + 1}`}
            key={i}
            className="w-20 rounded-md h-7 text-center bg-blue-500"
          >
            {task}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
