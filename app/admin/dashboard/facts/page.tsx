"use client"
import { useState } from "react"

export default function AnimeFactForm() {
  const [anime, setAnime] = useState("")
  const [title, setTitle] = useState("")
  const [preview, setPreview] = useState("")
  const [fullText, setFullText] = useState("")
  const [image, setImage] = useState("")
  const [success, setSuccess] = useState(false)
  const [jsonMode, setJsonMode] = useState(false)
  const [jsonInput, setJsonInput] = useState("")

  const handleFormSubmit = async () => {
    const res = await fetch("/api/admin/add-fact", {
      method: "POST",
      body: JSON.stringify({ anime, title, preview, fullText, image })
    })

    if (res.ok) {
      setSuccess(true)
      setAnime("")
      setTitle("")
      setPreview("")
      setFullText("")
      setImage("")
    }
  }

  const handleJsonSubmit = async () => {
    try {
      const fact = JSON.parse(jsonInput)
      const res = await fetch("/api/admin/add-fact", {
        method: "POST",
        body: JSON.stringify(fact)
      })
      if (res.ok) {
        setSuccess(true)
        setJsonInput("")
      }
    } catch (err) {
      alert("Invalid JSON")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-2xl bg-gray-50 border border-gray-200 rounded-xl shadow p-8 space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-[#133162]">Add New Anime Fact</h2>
          <button
            onClick={() => setJsonMode(!jsonMode)}
            className="text-sm text-[#f43d00] underline"
          >
            {jsonMode ? "Switch to Form" : "Switch to JSON Input"}
          </button>
        </div>

        {!jsonMode ? (
          <>
            <input
              placeholder="Anime"
              value={anime}
              onChange={(e) => setAnime(e.target.value)}
              className="block border border-gray-300 p-2 rounded w-full focus:ring-2 focus:ring-[#f43d00]"
            />
            <input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="block border border-gray-300 p-2 rounded w-full focus:ring-2 focus:ring-[#f43d00]"
            />
            <input
              placeholder="Preview"
              value={preview}
              onChange={(e) => setPreview(e.target.value)}
              className="block border border-gray-300 p-2 rounded w-full focus:ring-2 focus:ring-[#f43d00]"
            />
            <textarea
              placeholder="Full Text"
              value={fullText}
              onChange={(e) => setFullText(e.target.value)}
              rows={5}
              className="block border border-gray-300 p-2 rounded w-full focus:ring-2 focus:ring-[#f43d00]"
            />
            <input
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="block border border-gray-300 p-2 rounded w-full focus:ring-2 focus:ring-[#f43d00]"
            />
            <button onClick={handleFormSubmit} className="btn-primary w-full">Add Fact</button>
          </>
        ) : (
          <>
            <textarea
              placeholder="Paste valid JSON object here"
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              rows={10}
              className="block border border-gray-300 p-2 rounded w-full font-mono focus:ring-2 focus:ring-[#f43d00]"
            />
            <button onClick={handleJsonSubmit} className="btn-primary w-full">Add via JSON</button>
          </>
        )}

        {success && <p className="text-green-500 text-center">✅ Fact added successfully!</p>}
      </div>
    </div>
  )
}
