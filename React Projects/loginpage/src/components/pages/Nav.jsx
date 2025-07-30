import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="w-full h-20 p-4 bg-gray-800 text-white  flex justify-around items-center">
        <div className="bg-red-400 p-2 rounded-lg mr-40">Your Logo</div>
        <div className="w-200 flex justify-evenly text-lg font-semibold text-sky-400">
          <p>Home</p>
          <NavLink to={"/about"}>About</NavLink>
          <p>Contact Us</p>
        </div>
        <div className="flex justify-evenly w-40">
          <NavLink to={"/login"}>Login</NavLink>
          <NavLink to={"/signup"}>Sign Up</NavLink>
        </div>
      </nav>
    </>
  );
};

export default Nav;
