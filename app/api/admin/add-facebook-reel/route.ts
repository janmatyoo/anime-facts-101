import { NextResponse } from "next/server"
import { writeFile, readFile } from "fs/promises"
import path from "path"

const filePath = path.resolve("public/facebook-reels.json")

export async function POST(req: Request) {
  const { title, url } = await req.json()
  const raw = await readFile(filePath, "utf-8")
  const data = JSON.parse(raw)

  data.unshift({ title, url })

  await writeFile(filePath, JSON.stringify(data, null, 2))
  return NextResponse.json({ success: true })
}
