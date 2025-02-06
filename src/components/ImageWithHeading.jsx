import React from "react";

const ImageWithHeading = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 border-4 border-gray-400 rounded-lg max-w-full mx-auto mt-4">
      <h2 className="text-xl font-semibold mb-4">
        Serverless URL Shortener Architecture
      </h2>
      <img
        src="/arct2.png"
        alt="URL Shortener Architecture"
        className="w-full h-auto rounded-md max-h-screen object-cover"
      />
    </div>
  );
};

export default ImageWithHeading;
