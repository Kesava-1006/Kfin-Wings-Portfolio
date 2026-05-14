// "use client"
// import { useState } from "react"
// import {
//   LayoutDashboard,
//   UserPlus,
//   IndianRupee,
//   ListOrdered,
//   TrendingUp,
//   BarChart3,
//   Wallet,
//   User,
//   Info,
//   LogOut,
// } from "lucide-react"

// export default function Sidebar() {
//   const [activeMainItem, setActiveMainItem] = useState("Dashboard")
//   return (
//     <div className="w-[300px] bg-white h-full flex flex-col px-6 py-5 justify-start">
//       <div className="font-bold text-2xl mt-4">Kfin Wings</div>

//       <div className="flex flex-col">
//         <div className="text-gray-400 pt-[50px]">MAIN MENU</div>

//         <HeaderItem
//           icon={<LayoutDashboard size={20} />}
//           title="Dashboard"
//           activeItem={activeMainItem}
//           setActiveItem={(title) => {
//             setActiveMainItem(title)
//           }}
//         />

//         <HeaderItem
//           icon={<UserPlus size={20} />}
//           title="Create Investor"
//           activeItem={activeMainItem}
//           setActiveItem={(title) => {
//             setActiveMainItem(title)
//           }}
//         />

//         <HeaderItem
//           icon={<IndianRupee size={20} />}
//           title="Create SIP"
//           activeItem={activeMainItem}
//           setActiveItem={(title) => {
//             setActiveMainItem(title)
//           }}
//         />

//         <HeaderItem
//           icon={<ListOrdered size={20} />}
//           title="View Transactions"
//           activeItem={activeMainItem}
//           setActiveItem={(title) => {
//             setActiveMainItem(title)
//           }}
//         />
//       </div>

//       <div className="flex flex-col mt-10">
//         <HeaderItem
//           icon={<TrendingUp size={20} />}
//           title="Investments"
//           activeItem={activeMainItem}
//           setActiveItem={(title) => {
//             setActiveMainItem(title)
//           }}
//         />

//         <HeaderItem
//           icon={<BarChart3 size={20} />}
//           title="Nav"
//           activeItem={activeMainItem}
//           setActiveItem={(title) => {
//             setActiveMainItem(title)
//           }}
//         />

//         <HeaderItem
//           icon={<Wallet size={20} />}
//           title="Funds"
//           activeItem={activeMainItem}
//           setActiveItem={(title) => {
//             setActiveMainItem(title)
//           }}
//         />
//       </div>

//       <div className="flex flex-col mt-10">
//         <HeaderItem
//           icon={<User size={20} />}
//           title="Profile"
//           activeItem={activeMainItem}
//           setActiveItem={(title) => {
//             setActiveMainItem(title)
//           }}
//         />

//         <HeaderItem
//           icon={<Info size={20} />}
//           title="About"
//           activeItem={activeMainItem}
//           setActiveItem={(title) => {
//             setActiveMainItem(title)
//           }}
//         />

//         <HeaderItem
//           icon={<LogOut size={20} />}
//           title="Logout"
//           activeItem={activeMainItem}
//           setActiveItem={(title) => {
//             setActiveMainItem(title)
//           }}
//         />
//       </div>
//     </div>
//   )
// }

// function HeaderItem({ icon, title, activeItem, setActiveItem }) {
//   return (
//     <div
//       className={`flex flex-row space-x-3 my-2
//       ${
//         activeItem == title
//           ? "font-bold text-black text-lg"
//           : "font-medium text-gray-400"
//       }`}
//       onClick={() => {
//         setActiveItem(title)
//       }}
//     >
//       <div>{icon}</div>
//       <div>{title}</div>
//     </div>
//   )
// }


"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  LayoutDashboard,
  UserPlus,
  IndianRupee,
  ListOrdered,
  TrendingUp,
  BarChart3,
  Wallet,
  User,
  Info,
  LogOut,
} from "lucide-react"

export default function Sidebar() {
  const [activeMainItem, setActiveMainItem] = useState("Dashboard")
  const router = useRouter()

  const handleNavigation = (title) => {
    setActiveMainItem(title)

    if (title === "View Transactions") {
      router.push("/transactions")
    }

    if (title === "Dashboard") {
      router.push("/personalDashboard")
    }

    if (title === "Create Investor") {
      router.push("/create-investor")
    }

    if (title === "Create SIP") {
      router.push("/create-sip")
    }

    if (title === "Complete Dashboard") {
      router.push("/dashboard")
    }
  }

  return (
    <div className="w-[300px] bg-white h-full flex flex-col px-6 py-5 justify-start">
      <div className="font-bold text-2xl mt-4">Kfin Wings</div>

      <div className="flex flex-col">
        <div className="text-gray-400 pt-[50px]">MAIN MENU</div>

        <HeaderItem
          icon={<LayoutDashboard size={20} />}
          title="Dashboard"
          activeItem={activeMainItem}
          setActiveItem={handleNavigation}
        />

        <HeaderItem
          icon={<UserPlus size={20} />}
          title="Create Investor"
          activeItem={activeMainItem}
          setActiveItem={handleNavigation}
        />

        <HeaderItem
          icon={<IndianRupee size={20} />}
          title="Create SIP"
          activeItem={activeMainItem}
          setActiveItem={handleNavigation}
        />

        <HeaderItem
          icon={<ListOrdered size={20} />}
          title="View Transactions"
          activeItem={activeMainItem}
          setActiveItem={handleNavigation}
        />

        <HeaderItem
          icon={<ListOrdered size={20} />}
          title="Complete Dashboard"
          activeItem={activeMainItem}
          setActiveItem={handleNavigation}
        />
      </div>
    </div>
  )
}

function HeaderItem({ icon, title, activeItem, setActiveItem }) {
  return (
    <div
      className={`flex flex-row space-x-3 my-2 cursor-pointer
      ${
        activeItem == title
          ? "font-bold text-black text-lg"
          : "font-medium text-gray-400"
      }`}
      onClick={() => {
        setActiveItem(title)
      }}
    >
      <div>{icon}</div>
      <div>{title}</div>
    </div>
  )
}