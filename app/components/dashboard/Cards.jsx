"use client";

import { useEffect, useState } from "react";

export default function Cards() {
  const [sips, setSips] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/sips/all")
      .then((res) => res.json())
      .then((data) => setSips(data))
      .catch((err) => console.log(err));
  }, []);

  const totalAmount = sips.reduce(
    (sum, sip) => sum + Number(sip.sip_amount || 0),
    0
  );

  const last7 = [...sips].slice(-7);

  const values = last7.length
    ? last7.map((sip) => Number(sip.sip_amount || 0))
    : [0];

  const max = Math.max(...values, 1);

  return (
    <div className="grid grid-cols-4 gap-5">

      <div className="bg-white rounded-2xl p-5 border border-dashed flex flex-col justify-between h-[170px]">
        <p className="text-sm text-gray-400">Total SIPs</p>
        <p className="text-2xl font-bold">{sips.length}</p>
      </div>

      <div className="bg-white rounded-2xl p-5 border border-dashed flex flex-col justify-between h-[170px]">
        <p className="text-sm text-gray-400">Total Investment</p>

        <svg className="w-full h-[60px]">
          <polyline
            fill="none"
            stroke="#14b8a6"
            strokeWidth="2"
            points={values
              .map(
                (v, i) =>
                  `${(i / (values.length - 1 || 1)) * 100},
                  ${60 - (v / max) * 60}`
              )
              .join(" ")}
          />
        </svg>

        <div>
          <p className="text-lg font-bold">₹{totalAmount}</p>
          <p className="text-xs text-red-400">-11% last week</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5 flex flex-col justify-between h-[170px]">
        <div className="flex justify-between">
          <p className="text-sm text-gray-400">Monthly SIP Trend</p>

          <span className="text-xs text-green-500 bg-green-100 px-2 py-1 rounded-full">
            +8%
          </span>
        </div>

        <div className="flex items-end gap-2 h-[70px]">
          {values.map((v, i) => (
            <div
              key={i}
              className="w-3 bg-orange-400 rounded"
              style={{ height: `${(v / max) * 100}%` }}
            />
          ))}
        </div>
      </div>

      <div className="rounded-2xl p-5 text-white bg-gradient-to-br from-teal-400 to-green-400 flex flex-col justify-between h-[170px]">
        <div>
          <p className="text-2xl font-bold">
            ₹{Math.floor(totalAmount / 12)}
          </p>

          <p className="text-xs opacity-80">
            Avg Monthly SIP
          </p>
        </div>

        <p className="text-sm">Choose Best Plan</p>

        <div className="flex justify-between items-center">
          <span className="text-xs">Details</span>

          <button className="bg-black px-3 py-1 text-xs rounded-full">
            Upgrade
          </button>
        </div>
      </div>

    </div>
  );
}