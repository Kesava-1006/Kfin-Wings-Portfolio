"use client";

import Cards from "../components/dashboard/Cards";
import Payments from "../components/dashboard/Payments";
import Transactions from "../components/dashboard/Transactions"; 

export default function Dashboard() {
  return (
    <div className="flex flex-col h-screen bg-gray-50 p-6 gap-6">
      
      <div className="flex-shrink-0">
        <Cards />
      </div>

      <div className="flex-shrink-0">
        <Payments />
      </div>

      <div className="flex-1 min-h-0">
        <Transactions />
      </div>

    </div>
  );
}