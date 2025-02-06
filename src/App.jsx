// src/App.jsx
import React from "react";
import ShortenUrlForm from "./components/ShortenUrlForm";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import ImageWithHeading from "./components/ImageWithHeading";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center">
        <ShortenUrlForm />
      </div>
      <ImageWithHeading />
      <Footer />
    </div>
  );
}

export default App;
