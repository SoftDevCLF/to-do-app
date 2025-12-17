"use client";
import { useEffect, useState } from "react";

async function fetchFavQsQuote() {
  try {
    const res = await fetch("/api/favqs");
    const data = await res.json();
    return { text: data.text, author: data.author };
  } catch (error) {
    console.error("Error fetching FavQs quote:", error);
    return { text: "Stay focused and keep going.", author: "Listo" };
  }
}
export default function RandomQuote() {
  const [quote, setQuote] = useState({ text: "", author: "" });

  useEffect(() => {
    fetchFavQsQuote().then(setQuote);
  }, []);

  const handleNewQuote = () => {
    fetchFavQsQuote().then(setQuote);
  };

  return (
    <div className="mx-22 mt-4 mb-6 p-4 bg-[#011D33]/70 rounded-lg text-[#F1FAF5]">
      <p className="italic">&ldquo;{quote.text}&rdquo;</p>
      <p className="text-right mt-2 font-semibold">— {quote.author}</p>
      <button
        onClick={handleNewQuote}
        className="mt-2 px-4 py-2 bg-purple-800 rounded-lg hover:bg-purple-900 transition"
      >
        New Quote
      </button>
    </div>
  );
}
