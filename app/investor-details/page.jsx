"use client"
import { useContext } from "react"
import ProfileContext from "../core/contexts/ProfileContext"

export default function InvestorDetailsPage() {
  const { storedDetails } = useContext(ProfileContext)

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-6 text-purple-600">
        Investor Details
      </h1>

      {storedDetails ? (
        <div className="border-2 border-gray-300 p-6 rounded-md w-[500px]">
          <p>
            <strong>Investor ID:</strong> {storedDetails.user.investor_id}
          </p>
          <p>
            <strong>First Name:</strong> {storedDetails.user.first_name}
          </p>
          <p>
            <strong>Last Name:</strong> {storedDetails.user.last_name}
          </p>
          <p>
            <strong>Email:</strong> {storedDetails.user.email}
          </p>
          <p>
            <strong>Phone Number:</strong> {storedDetails.user.phone}
          </p>
          <p>
            <strong>PAN Number:</strong> {storedDetails.user.pan}
          </p>
          <p>
            <strong>Token:</strong> {storedDetails.token}
          </p>
        </div>
      ) : (
        <p className="text-red-600">No investor data found</p>
      )}
    </div>
  )
}
