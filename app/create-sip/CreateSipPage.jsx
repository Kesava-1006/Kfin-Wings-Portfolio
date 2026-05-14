"use client";

import { useState } from "react";

export default function CreateSipPage() {

  const [portfolioId, setPortfolioId] = useState("");
  const [fundId, setFundId] = useState("");
  const [sipAmount, setSipAmount] = useState("");
  const [sipDate, setSipDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("");

  const handleCreateSip = async () => {

    const payload = {
      portfolio_id: portfolioId,
      fund_id: fundId,
      sip_amount: sipAmount,
      sip_date: sipDate,
      start_date: startDate,
      end_date: endDate,
      status: status,
    };

    console.log(payload);

    fetch("http://localhost:5000/api/sips", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(payload),
    })

      .then((res) => res.json())

      .then((data) => {

        console.log(data);

        alert("SIP Created Successfully");
      })

      .catch((err) => {

        console.log(err);

        alert("Error Creating SIP");
      });
  };

  return (

    <div className="flex justify-center items-center p-10">

      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-3xl">

        <h1 className="text-3xl font-bold mb-8">
          Create SIP
        </h1>

        <div className="grid grid-cols-2 gap-5">

          <input
            type="number"
            placeholder="Portfolio ID"
            value={portfolioId}
            onChange={(e) => setPortfolioId(e.target.value)}
            className="border rounded-lg px-4 py-3 outline-none"
          />

          <input
            type="number"
            placeholder="Fund ID"
            value={fundId}
            onChange={(e) => setFundId(e.target.value)}
            className="border rounded-lg px-4 py-3 outline-none"
          />

          <input
            type="number"
            placeholder="SIP Amount"
            value={sipAmount}
            onChange={(e) => setSipAmount(e.target.value)}
            className="border rounded-lg px-4 py-3 outline-none"
          />

          <input
            type="number"
            placeholder="SIP Date"
            value={sipDate}
            onChange={(e) => setSipDate(e.target.value)}
            className="border rounded-lg px-4 py-3 outline-none"
          />

          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border rounded-lg px-4 py-3 outline-none"
          />

          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border rounded-lg px-4 py-3 outline-none"
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border rounded-lg px-4 py-3 outline-none"
          >
            <option value="">
              Select Status
            </option>

            <option value="ACTIVE">
              ACTIVE
            </option>

            <option value="INACTIVE">
              INACTIVE
            </option>

            <option value="PAUSED">
              PAUSED
            </option>
          </select>

        </div>

        <button
          onClick={handleCreateSip}
          className="bg-black text-white px-6 py-3 rounded-xl mt-8 hover:bg-gray-800"
        >
          Create SIP
        </button>

      </div>

    </div>
  );
}