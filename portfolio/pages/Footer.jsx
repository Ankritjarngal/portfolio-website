import { useState } from "react";

const BIN_ID = import.meta.env.VITE_BIN_ID;

export function Footer() {
  const [msg, setMsg] = useState("");

  const handle = (msg) => {
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("X-Master-Key", `$2a$10$W2OGFetenZrmWMylbn7jEu8U4HNgt/slfhl7QgPCjPBHh9J7Zv4Wu`);

const raw = JSON.stringify({
  "suggestion": msg
});

const requestOptions = {
  method: "PUT",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, requestOptions)
  .then((response) => response.text())
  .then((result) => {console.log(result)
  setMsg("");

}

)
  .catch((error) => console.error(error));
  };

  return (
    <div className="bg-[#0F141A] flex items-center justify-center w-full flex-col p-2">
      <div className="text-gray-400 text-xl py-2">ankrit4c@gmail.com</div>
      <p className="text-gray-300 py-1">Suggestions? Feedback?</p>
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
          onClick={() => handle(msg)}
        >
          Send
        </button>
      </div>
      <p className="text-gray-300 py-1">Made by Ankrit 🐒</p>
    </div>
  );
}
