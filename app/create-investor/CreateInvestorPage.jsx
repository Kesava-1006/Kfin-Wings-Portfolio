"use client";

import { useState } from "react";

export default function CreateInvestorPage() {

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [pan, setPan] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [occupation, setOccupation] = useState("");

  const handleCreateInvestor = async () => {

    const payload = {
      first_name: firstName,
      middle_name: middleName,
      last_name: lastName,
      email: email,
      phone: phone,
      dob: dob,
      gender: gender,
      pan: pan,
      aadhaar: aadhaar,
      occupation: occupation,
      created_at: new Date(),
    };

    console.log(payload);

    fetch("http://localhost:5000/api/investor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())

      .then((data) => {
        console.log(data);

        alert("Investor Created Successfully");
      })

      .catch((err) => {
        console.log(err);

        alert("Error Creating Investor");
      });
  };

  return (

    <div className="flex justify-center items-center p-10">

      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-3xl">

        <h1 className="text-3xl font-bold mb-8">
          Create Investor
        </h1>

        <div className="grid grid-cols-2 gap-5">

          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border rounded-lg px-4 py-3 outline-none"
          />

          <input
            type="text"
            placeholder="Middle Name"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
            className="border rounded-lg px-4 py-3 outline-none"
          />

          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border rounded-lg px-4 py-3 outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-lg px-4 py-3 outline-none"
          />

          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border rounded-lg px-4 py-3 outline-none"
          />

          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="border rounded-lg px-4 py-3 outline-none"
          />

          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="border rounded-lg px-4 py-3 outline-none"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <input
            type="text"
            placeholder="PAN Number"
            value={pan}
            onChange={(e) => setPan(e.target.value)}
            className="border rounded-lg px-4 py-3 outline-none"
          />

          <input
            type="text"
            placeholder="Aadhaar Number"
            value={aadhaar}
            onChange={(e) => setAadhaar(e.target.value)}
            className="border rounded-lg px-4 py-3 outline-none"
          />

          <input
            type="text"
            placeholder="Occupation"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            className="border rounded-lg px-4 py-3 outline-none"
          />

        </div>

        <button
          onClick={handleCreateInvestor}
          className="bg-black text-white px-6 py-3 rounded-xl mt-8 hover:bg-gray-800"
        >
          Create Investor
        </button>

      </div>

    </div>
  );
}