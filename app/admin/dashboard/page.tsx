'use client'
import Link from "next/link"

export default function AdminDashboard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-lg p-10 space-y-8">
        <h1 className="text-3xl font-bold text-[#133162] text-center">
          Admin Dashboard
        </h1>

        <div className="flex flex-col gap-6">
          <Link href="/admin/dashboard/facebook-reels">
            <button className="btn-primary w-full">
              📽️ Manage Facebook Reels
            </button>
          </Link>

          <Link href="/admin/dashboard/facts">
            <button className="btn-primary w-full">
              📘 Manage Facts
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
