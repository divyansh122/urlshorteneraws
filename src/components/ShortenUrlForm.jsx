import React, { useState } from "react";
import axios from "axios";

const ShortenUrlForm = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the request starts
    try {
      const response = await axios.post(
        "https://ntnafxca83.execute-api.ap-south-1.amazonaws.com/dev/generate",
        { url: longUrl }
      );
      setShortUrl(response.data.shortUrl);
    } catch (error) {
      console.error("Error creating short URL:", error);
    } finally {
      setLoading(false); // Set loading to false when the request completes
    }
  };

  return (
    <div className="flex items-center justify-center mt-4 pb-4">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
          URL Shortener
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="url"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            placeholder="Enter long URL"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className={`w-full p-3 text-white font-semibold rounded transition duration-200 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
            disabled={loading} // Disable button while loading
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 100 8v4a8 8 0 01-8-8z"
                  ></path>
                </svg>
                Shortening...
              </span>
            ) : (
              "Shorten URL"
            )}
          </button>
        </form>
        {shortUrl && (
          <div className="mt-4 p-3 bg-gray-100 rounded">
            <span className="font-semibold">Shortened URL:</span>{" "}
            <a href={shortUrl} className="text-blue-600 underline">
              {shortUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShortenUrlForm;
