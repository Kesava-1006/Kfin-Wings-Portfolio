"use client";

import { useEffect, useState, useContext } from "react";
import ProfileContext from "../core/contexts/ProfileContext";

export default function PersonalHoldings() {

  const [sips, setSips] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const { storedDetails } = useContext(ProfileContext);

  useEffect(() => {

    // wait until investor data is available
    if (!storedDetails?.investor_id) return;

    fetch(
      `http://localhost:5000/api/investor/${storedDetails.investor_id}/holdings`
    )
      .then((res) => res.json())

      .then((data) => {
        console.log(data);

        // make sure data is array
        setSips(Array.isArray(data) ? data : []);
      })

      .catch((err) => console.log(err));

  }, [storedDetails]);

  // search filter
  const filteredSips = Array.isArray(sips)
    ? sips.filter((sip) =>

        sip.fund_name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||

        sip.fund_id
          .toString()
          .includes(searchTerm)
      )
    : [];

  return (

    <div className="flex flex-col h-full bg-white rounded-2xl shadow-sm p-6">

      {/* header */}
      <div className="flex justify-between items-center mb-6">

        <div>
          <h1 className="text-2xl font-bold">
            My Holdings
          </h1>

          <p className="text-gray-500 text-sm mt-1">
            Investor ID: {storedDetails?.investor_id}
          </p>
        </div>

        <input
          placeholder="Search fund"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-gray-100 px-4 py-2 rounded-lg text-sm outline-none"
        />

      </div>

      {/* table */}
      <div className="flex-1 overflow-auto">

        <table className="w-full text-sm border-separate border-spacing-y-2">

          <thead>
            <tr className="text-gray-400 text-left">

              <th className="px-4 py-2">
                Fund ID
              </th>

              <th className="px-4 py-2">
                Fund Name
              </th>

              <th className="px-4 py-2 text-right">
                Total Units
              </th>

              <th className="px-4 py-2 text-right">
                Current NAV
              </th>

              <th className="px-4 py-2 text-right">
                Current Value
              </th>

            </tr>
          </thead>

          <tbody>

            {filteredSips.length > 0 ? (

              filteredSips.map((sip) => (

                <tr
                  key={sip.fund_id}
                  className="bg-gray-50"
                >

                  <td className="px-4 py-3 rounded-l-xl">
                    {sip.fund_id}
                  </td>

                  <td className="px-4">
                    {sip.fund_name}
                  </td>

                  <td className="px-4 text-right">
                    {sip.total_units}
                  </td>

                  <td className="px-4 text-right">
                    ₹{sip.current_nav}
                  </td>

                  <td className="px-4 text-right font-semibold rounded-r-xl">
                    ₹{sip.current_value}
                  </td>

                </tr>
              ))

            ) : (

              <tr>
                <td
                  colSpan="5"
                  className="text-center py-10 text-gray-400"
                >
                  No holdings found
                </td>
              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}