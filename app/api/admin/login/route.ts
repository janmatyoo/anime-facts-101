import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { password } = await req.json()
  const correctPassword = process.env.ADMIN_PASSWORD

  if (password === correctPassword) {
    const res = NextResponse.json({ success: true })
    res.headers.set(
      "Set-Cookie",
      `admin-auth=${password}; Path=/; HttpOnly; SameSite=Lax`
    )
    return res
  }

  return NextResponse.json({ success: false }, { status: 401 })
}
