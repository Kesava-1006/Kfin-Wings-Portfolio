"use client";

import { useEffect, useState } from "react";

export default function Payments() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/sips/all")
      .then((res) => res.json())
      .then((data) => setPayments(data.slice(-2).reverse()))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">
        Recent SIPs
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {payments.map((sip) => (
          <div
            key={sip.sip_id}
            className="bg-white rounded-2xl px-5 py-4 flex items-center justify-between shadow-sm border"
          >
            <div className="flex items-center gap-3">

              <div className="w-9 h-9 bg-gray-200 rounded-full"></div>

              <div>
                <p className="text-sm font-semibold">
                  {sip.portfolio_name}
                </p>

                <p className="text-xs text-gray-400">
                  {new Date(sip.start_date).toDateString()}
                </p>
              </div>
            </div>

            <p className="text-sm font-semibold">
              ₹{sip.sip_amount}
            </p>

            <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
              {sip.status}
            </span>

            <span className="text-gray-300">•••</span>
          </div>
        ))}

      </div>
    </div>
  );
}