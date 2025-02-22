import { useState, useEffect } from "react";


const BIN_ID = import.meta.env.VITE_BIN_ID;
const MASTER_KEY = "$2a$10$W2OGFetenZrmWMylbn7jEu8U4HNgt/slfhl7QgPCjPBHh9J7Zv4Wu";
const BIN_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

export function Footer() {
  const [msg, setMsg] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch(BIN_URL, {
      method: "GET",
      headers: {
        "X-Master-Key": MASTER_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.record?.suggestions) {
          setSuggestions(data.record.suggestions);
        }
      })
      .catch((error) => console.error("Error fetching suggestions:", error));
  }, []);

  const handle = () => {
    if (!msg.trim()) return;

    const updatedSuggestions = [...suggestions, msg];

    fetch(BIN_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": MASTER_KEY,
      },
      body: JSON.stringify({ suggestions: updatedSuggestions }),
    })
      .then((response) => response.json())
      .then(() => {
        setSuggestions(updatedSuggestions);
        setMsg("");
      })
      .catch((error) => console.error("Error updating suggestions:", error));
  };

  return (
    <div className="bg-[#0F141A] flex items-center justify-center w-full flex-col p-2">
      <div className="text-gray-400 text-xl py-2">ankrit4c@gmail.com</div>
      <p className="text-gray-300 py-1">Suggestions? Feedback?</p>
      <div className="flex items-center justify-center flex-col">
        <input
          className="mt-1 w-full p-1.5 rounded-lg bg-gray-800 text-white border border-gray-700 
                     focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-300"
          type="text"
          placeholder="Your Suggestions Here"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button
          className="text-[#D1D5DB] mt-1 w-full p-1.5 rounded-lg bg-gray-800 border border-gray-700 
                     focus:border-blue-500 shadow-sm transition-all duration-300"
          onClick={handle}
        >
          Send
        </button>
      </div>

      

      <p className="text-gray-300 py-1">Made by Ankrit 🐒</p>
    </div>
  );
}
