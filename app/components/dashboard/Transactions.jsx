"use client";

import { useEffect, useState } from "react";

export default function Transactions() {
  const [sips, setSips] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/sips/all")
      .then((res) => res.json())
      .then((data) => setSips(data))
      .catch((err) => console.log(err));
  }, []);

  const filteredSips = sips.filter((sip) =>
    sip.portfolio_name
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||

    sip.fund_name
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||

    sip.status
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||

    sip.sip_id
      .toString()
      .includes(searchTerm)
  );

  return (
    <div className="flex flex-col h-full bg-white rounded-2xl shadow-sm p-6">

      <div className="flex justify-between items-center mb-4">

        <h2 className="text-lg font-semibold">
          {/* SIP Registrations */}
        </h2>

        <input
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-gray-100 px-4 py-2 rounded-lg text-sm outline-none"
        />
      </div>

      <div className="flex-1 overflow-auto">

        <table className="w-full text-sm border-separate border-spacing-y-2">

          <thead>
            <tr className="text-gray-400 text-left">
              <th className="px-4 py-2">SIP ID</th>
              <th className="px-4 py-2">Portfolio</th>
              <th className="px-4 py-2">Fund</th>
              <th className="px-4 py-2 text-right">Amount</th>
              <th className="px-4 py-2 text-right">SIP Date</th>
              <th className="px-4 py-2 text-right">Start</th>
              <th className="px-4 py-2 text-right">End</th>
              <th className="px-4 py-2 text-right">Status</th>
            </tr>
          </thead>

          <tbody>

            {filteredSips.map((sip) => (
              <tr
                key={sip.sip_id}
                className="bg-gray-50 rounded-xl"
              >
                <td className="px-4 py-3">
                  {sip.sip_id}
                </td>

                <td className="px-4">
                  {sip.portfolio_name}
                </td>

                <td className="px-4">
                  {sip.fund_name}
                </td>

                <td className="px-4 text-right font-medium">
                  ₹{sip.sip_amount}
                </td>

                <td className="px-4 text-right">
                  {sip.sip_date}
                </td>

                <td className="px-4 text-right">
                  {new Date(sip.start_date).toLocaleDateString()}
                </td>

                <td className="px-4 text-right">
                  {new Date(sip.end_date).toLocaleDateString()}
                </td>

                <td className="px-4 text-right">
                  <span className="text-green-600">
                    {sip.status}
                  </span>
                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>
    </div>
  );
}