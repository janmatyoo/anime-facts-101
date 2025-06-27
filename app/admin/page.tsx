'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminLogin() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleLogin = async () => {
    const res = await fetch("/api/admin/login", {
      method: "POST",
      body: JSON.stringify({ password }),
    })
    if (res.ok) router.push("/admin/dashboard")
    else setError("Invalid password")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="border border-gray-300 p-8 rounded-xl w-full max-w-sm">
        <h1 className="text-xl font-bold mb-4 text-center">Admin Login</h1>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded mb-4"
        />
        <button onClick={handleLogin} className="w-full bg-[#133162] text-white py-2 rounded">
          Login
        </button>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
    </div>
  )
}