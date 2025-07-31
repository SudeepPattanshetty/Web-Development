import React from "react";
import { NavLink } from "react-router-dom";
import ThemeBtn from "../ThemeBtn";

const Nav = () => {
  return (
    <>
      <nav className="w-full h-20 p-4 bg-white text-sky-400 font-semibold dark:bg-gray-700 dark:text-white flex justify-around items-center">
        <div className="bg-red-400 p-2 rounded-lg mr-40 dark:text-gray-800 text-gray-800">Your Logo</div>
        <div className="w-200 gap-20 flex text-lg font-semibold text-sky-400">
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <p>Contact Us</p>
        </div>
        <div>
          <ThemeBtn />
        </div>
        <div className="flex justify-evenly w-40">
          <NavLink to={"/login"}>Login</NavLink>
          <NavLink to={"/signup"}>Sign Up</NavLink>
        </div>
      </nav>
        <span className=" bg-gray-900 w-full h-0.5 dark:bg-gray-800"></span>
    </>
  );
};

export default Nav;
