export async function GET() {
  try {
    const res = await fetch("https://favqs.com/api/qotd", {
      headers: {
        Authorization: `Token token=${process.env.NEXT_PUBLIC_FAVQS_API_KEY}`,
      },
    });
    const data = await res.json();
    return new Response(
      JSON.stringify({
        text: data.quote.body,
        author: data.quote.author,
      })
    );
  } catch {
    return new Response(
      JSON.stringify({
        text: "Stay focused and keep going.",
        author: "Listo",
      })
    );
  }
}
