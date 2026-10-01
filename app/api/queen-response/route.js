function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request) {
  try {
    const body = await request.json();
    const answer = body?.answer === "YES" ? "YES" : "NO";
    const promises = Array.isArray(body?.promises)
      ? body.promises.filter((item) => typeof item === "string").slice(0, 30)
      : [];

    if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
      return Response.json({ error: "Email service is not configured yet." }, { status: 503 });
    }

    const to = process.env.QUEEN_RESPONSE_EMAIL || "nezaneza201@gmail.com";
    const promiseHtml = promises.length
      ? promises.map((item) => `<li>${escapeHtml(item)}</li>`).join("")
      : "<li>No written promises.</li>";

    const resend = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL,
        to: [to],
        subject: "❤️ Queen answered your proposal",
        html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;color:#24131b"><h1>She said YES ❤️</h1><p>Queen sealed her answer on your proposal site.</p><p><strong>Answer:</strong> ${answer}</p><h2>Your promises</h2><ul>${promiseHtml}</ul><p style="color:#777">Sent from your Queen proposal website.</p></div>`
      })
    });

    const result = await resend.json();
    if (!resend.ok) return Response.json({ error: result?.message || "Resend rejected the email." }, { status: 502 });
    return Response.json({ ok: true, id: result?.id || null });
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }
}
