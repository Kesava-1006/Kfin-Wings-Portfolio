"use client";
import {useState, useContext} from 'react';
import InputField from '../../components/InputField';
import { useRouter } from 'next/navigation';
import ProfileContext from '../../core/contexts/ProfileContext';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { storeInvestorData } = useContext(ProfileContext);

  const handleLogin = async () => {

  fetch("http://localhost:5000/api/investor/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      phone: password,
    }),
  })
    .then((response) => response.json())

    .then((result) => {

      console.log(result);

      // store logged in user details
      storeInvestorData(result.user);

      // store token
      document.cookie = `token=${result.token}; path=/`;

      // navigate
      router.push("/personalDashboard");
    })

    .catch((error) => {
      console.error("Error during login:", error);
    });
};

  return (
   <div className="flex justify-center items-center min-h-screen bg-white p-10">

  <div className="bg-white border-2 border-black rounded-2xl p-8 w-full max-w-md">

    <h1 className="text-3xl font-bold mb-8 text-center text-black">
      Login
    </h1>

    <div className="flex flex-col gap-5">

      <InputField
        placeholder="Email"
        type="email"
        inputValue={(value) => setEmail(value)}
      />

      <InputField
        placeholder="Password"
        type="password"
        inputValue={(value) => setPassword(value)}
      />

    </div>

    <button
      onClick={handleLogin}
      className="bg-black text-white w-full py-3 rounded-xl mt-8 hover:bg-gray-800 transition-all duration-300"
    >
      Login
    </button>

  </div>

</div>
  )
}