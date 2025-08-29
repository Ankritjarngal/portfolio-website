import { useState } from "react";
import emailjs from "@emailjs/browser";

// Get credentials from environment variables
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Base styles for input and button to keep the code DRY (Don't Repeat Yourself)
const baseFormElementStyles = `
  w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-700 
  focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm 
  transition-all duration-200 ease-in-out
`;

export function Footer() {
  const [msg, setMsg] = useState("");
  const [buttonText, setButtonText] = useState("Send Suggestion");

  const handle = (e) => {
    e.preventDefault();
    if (!msg.trim()) return;

    setButtonText("Sending...");

    const templateParams = {
      message: msg,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setMsg("");
        setButtonText("Sent! Thank you ✨");
        setTimeout(() => setButtonText("Send Suggestion"), 3000);
      })
      .catch((error) => {
        console.error("FAILED to send email...", error);
        setButtonText("Failed to send");
        setTimeout(() => setButtonText("Send Suggestion"), 3000);
      });
  };

  return (
    <footer className="bg-[#0F141A] w-full py-12 px-4">
      <div className="max-w-lg mx-auto flex flex-col items-center text-center gap-y-6">
        
        {/* Section for header text */}
        <div className="flex flex-col gap-y-2">
          <h2 className="text-xl font-medium text-gray-300">
            Suggestions? Feedback?
          </h2>

        </div>

        {/* The suggestion form */}
        <form 
          onSubmit={handle} 
          className="w-full max-w-sm flex flex-col items-center gap-y-3"
        >
          <input
            className={`${baseFormElementStyles}`}
            type="text"
            placeholder="Your suggestion here..."
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <button
            type="submit"
            className={`${baseFormElementStyles} font-semibold text-gray-200 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed`}
            disabled={buttonText === "Sending..."}
          >
            {buttonText}
          </button>
        </form>

        {/* Final signature */}
        <div className="mt-6 text-center">
          <a 
            href="mailto:ankrit4fin@gmail.com" 
            className="text-gray-400 hover:text-white transition-colors"
          >
            ankrit4fin@gmail.com
          </a>
          <p className="text-gray-500 text-sm mt-2">
            Made by Ankrit 🐒
          </p>
        </div>
        
      </div>
    </footer>
  );
}