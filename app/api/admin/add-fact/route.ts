import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function POST(req: Request) {
  const body = await req.json()
  const filePath = path.resolve("public", "facts.json")

  const data = fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath, "utf-8"))
    : []

  const newFact = {
    id: Date.now().toString(),
    anime: body.anime,
    title: body.title,
    preview: body.preview,
    fullText: body.fullText,
    image: body.image,
  }

  // Append at the end instead of the beginning
  const updatedData = [...data, newFact]

  fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2))

  return NextResponse.json({ success: true })
}
