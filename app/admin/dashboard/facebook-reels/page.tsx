'use client'
import { useState } from "react"

export default function FacebookReelForm() {
  const [title, setTitle] = useState("")
  const [url, setUrl] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = async () => {
    const res = await fetch("/api/admin/add-facebook-reel", {
      method: "POST",
      body: JSON.stringify({ title, url }),
    })

    if (res.ok) {
      setSuccess(true)
      setTitle("")
      setUrl("")
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-50 border border-gray-200 rounded-xl shadow p-6 space-y-4">
        <h2 className="text-2xl font-bold text-[#133162] text-center">Add Facebook Reel</h2>

        <input
          placeholder="Reel Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#f43d00]"
        />

        <input
          placeholder="Reel URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#f43d00]"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-[#f43d00] hover:bg-[#d63401] text-white py-2 rounded font-semibold transition-colors"
        >
          Add Reel
        </button>

        {success && <p className="text-green-600 text-sm text-center">✅ Successfully added!</p>}
      </div>
    </div>
  )
}
