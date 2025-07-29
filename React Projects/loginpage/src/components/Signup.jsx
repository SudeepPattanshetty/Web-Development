import React from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="bg-gray-800 text-white flex flex-col justify-center items-center p-10 box-inline shadow-lg shadow-gray-900 rounded-lg ">
        <form action="/">
          <div className="flex">
            <label htmlFor="name" className="text-xl text-sky-400 font-medium">
              Full Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-50 ml-10 outline outline-white focus:invalid:outline-red-600 p-1 rounded-lg text-md font-serif focus:outline focus:outline-sky-500"
              placeholder="User Name"
            />
          </div>
          <div className=" flex mt-8">
            <label htmlFor="email" className="text-xl text-sky-400 font-medium">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-50 ml-20 outline outline-white focus:invalid:outline-red-600 p-1 rounded-lg text-md font-serif focus:outline focus:outline-sky-500"
              placeholder="Email"
            />
          </div>
          <div className=" flex mt-8">
            <label
              htmlFor="password"
              className="text-xl text-sky-400 font-medium"
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-50 outline outline-white ml-10 focus:invalid:outline-red-600 p-1 rounded-lg text-md font-serif focus:outline focus:outline-sky-500"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="items-center mt-10 shadow-sky-700 shadow-lg ml-12 w-60 h-10 rounded-sm text-xl bg-sky-400 text-gray-900 font-serif hover:bg-sky-600"
          >
            Sign Up
          </button>
        </form>
        <p className="text-white text-md mt-2">
          Already have an account: <NavLink to={"/login"}>Login</NavLink>
        </p>
      </div>
    </>
  );
};

export default Signup;
