import React from "react";
import { Link, Outlet } from "react-router-dom";

const Task7 = () => {
  return (
    <>
      <h4 className="mt-10 text-center m-auto">React Router</h4>
      <div className="w-60 m-auto mt-5 flex border-2 rounded-lg justify-evenly">
        <Link to="profile">
          <button>Profile</button>
        </Link>
        <Link to="about">
          <button>About</button>
        </Link>
        <Link to="contact">
          <button>Contact</button>
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Task7;
