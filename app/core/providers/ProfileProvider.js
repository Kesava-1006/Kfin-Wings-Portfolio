"use client";

import ProfileContext from "../contexts/ProfileContext";
import { useState, useEffect } from "react";

export default function ProfileProvider({ children }) {

  const [storedDetails, setStoredDetails] = useState(null);

  // load from localStorage on refresh
  useEffect(() => {
    const savedUser = localStorage.getItem("investor");

    if (savedUser) {
      setStoredDetails(JSON.parse(savedUser));
    }
  }, []);

  function storeInvestorData(data) {
    setStoredDetails(data);

    // save permanently
    localStorage.setItem(
      "investor",
      JSON.stringify(data)
    );
  }

  return (
    <ProfileContext.Provider
      value={{ storedDetails, storeInvestorData }}
    >
      {children}
    </ProfileContext.Provider>
  );
}