// src/components/ShortenUrlForm.jsx
import React, { useState } from "react";
import axios from "axios";

const ShortenUrlForm = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://ntnafxca83.execute-api.ap-south-1.amazonaws.com/dev/generate",
        { url: longUrl }
      );
      setShortUrl(response.data.shortUrl);
    } catch (error) {
      console.error("Error creating short URL:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-5 shadow-lg rounded bg-white">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="url"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          placeholder="Enter long URL"
          className="w-full p-2 border rounded focus:outline-none"
          required
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white font-semibold rounded"
        >
          Shorten URL
        </button>
      </form>
      {shortUrl && (
        <div className="mt-4 p-2 bg-gray-100 rounded">
          Shortened URL:{" "}
          <a href={shortUrl} className="text-blue-600">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default ShortenUrlForm;
