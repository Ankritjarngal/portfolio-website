import { useState } from "react";
import { KEY } from "../KEY";
import { BIN_ID } from "../KEY";

export function Footer() {
  const [msg, setMsg] = useState("");

  const handle = (msg) => {
    const binId = BIN_ID;
    const apiUrl = `https://api.jsonbin.io/v3/b/${binId}`;
    const newData = { suggestion: msg };

    fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': KEY,
      },
      body: JSON.stringify(newData),
    })
      .then(response => response.json())
      .then(data => console.log('Updated Bin Data:', data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="bg-[#0F141A] flex items-center justify-center w-full flex-col p-2">
 
        <div className="text-gray-400 text-xl py-2">
          ankrit4c@gmail.com
        </div>
 
       
      <p className="text-gray-300 py-1">Suggestions?Feedback?</p>
      <div className="flex items-center justify-center flex-col">
        <input
          id="input"
          className="mt-1 w-full p-1.5 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-300"
          type="text"
          placeholder="Your Suggestions Here"
          value={msg} 
          onChange={(e) => setMsg(e.target.value)} 
        />
        <button
          className="text-[#D1D5DB] mt-1 w-full p-1.5 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 shadow-sm transition-all duration-300"
          onClick={() => {
            handle(msg); 
            setMsg(""); 
          }}
        >
          Send
        </button>
      </div>
      <p className="text-gray-300 py-1">Made by Ankrit 🐒</p>
    </div>
  );
}
