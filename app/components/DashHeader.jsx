"use client";

import { useState, useContext } from "react";
import ProfileContext from "../core/contexts/ProfileContext";

export default function DashHeader() {

  const [active, setActive] = useState("full");

  const { storedDetails } = useContext(ProfileContext);

  // full name
  const fullName =
    storedDetails?.first_name || "User";

  // first letter
  const firstLetter =
    fullName.charAt(0).toUpperCase();

  return (

    <div className="flex items-center justify-between px-8 py-4 border-b">

      <div className="text-xl font-semibold">
        Analytics
      </div>

      <div className="relative flex bg-gray-100 rounded-lg p-1 w-[260px]">

        <div
          className={`absolute top-1 h-[calc(100%-8px)] w-1/2 bg-white rounded-md shadow transition-all duration-300
          ${active === "full" ? "left-1" : "left-1/2"}`}
        ></div>

        <div
          onClick={() => setActive("full")}
          className="w-1/2 text-center text-sm font-medium z-10 cursor-pointer"
        >
          Full Statistics
        </div>

        <div
          onClick={() => setActive("summary")}
          className="w-1/2 text-center text-sm font-medium z-10 cursor-pointer"
        >
          Results Summary
        </div>

      </div>

      <div className="flex items-center space-x-3">

        <div className="text-sm">
          {fullName}
        </div>

        <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
          {firstLetter}
        </div>

      </div>

    </div>
  );
}