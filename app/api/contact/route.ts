export async function POST(req: Request) {
  const data = await req.json().catch(() => ({}))
  console.log("[v0] Contact submission received:", data)
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "content-type": "application/json" },
  })
}
