import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Task12 = () => {
  let [islogin, setIslogin] = useState(false);

  let handleLogin = () => {
    if (islogin == true) {
      setIslogin(false);
      localStorage.removeItem("log");
    } else if (islogin == false) {
      setIslogin(true);
      localStorage.setItem("log", true);
    }
  };

  useEffect(() => {
    localStorage.removeItem("log");
  }, []);

  return (
    <>
      <h4 className="mt-10 text-center m-auto">Protected Routes</h4>

      <div className="w-80 h-14 m-auto mt-5 pt-3 flex border-2 rounded-lg justify-evenly">
        <Link to="profile">
          <button>Profile</button>
        </Link>
        <Link to="about">
          <button>About</button>
        </Link>
        <Link to="contact">
          <button>Contact</button>
        </Link>

        <Link>
          <button
            className={`w-16 rounded-md ${
              islogin ? "bg-red-300" : "bg-green-300"
            }`}
            onClick={handleLogin}
          >
            {islogin ? "logout" : "login"}
          </button>
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Task12;
