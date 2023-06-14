import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="w-full pt-2">
      <h1 className="text-xl text-black font-semibold mb-5">
        Generate Flashcard
      </h1>
      <div className="flex items-center space-x-10 mb-3">
        <button className="text-sm font-semibold text-red-600">
          {/* Navlink component to sets selected route */}
          <NavLink
            to={"/"}
            style={({ isActive }) => ({
              borderBottom: isActive ? "4px solid red" : undefined,
              paddingBottom: "12px",
              borderRadius: "3px",
            })}
          >
            Create New
          </NavLink>
        </button>
        <button className="text-sm font-semibold text-red-600">
          {/* Navlink component to sets selected route */}
          <NavLink
            to={"/myflashcard"}
            style={({ isActive }) => ({
              borderBottom: isActive ? "4px solid red" : undefined,
              paddingBottom: "12px",
              borderRadius: "3px",
            })}
          >
            My Flashcard
          </NavLink>
        </button>
      </div>
      <hr className="border bg-slate-300 border-slate-300 mb-8" />
    </div>
  );
};

export default HomePage;
