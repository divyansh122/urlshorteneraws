// src/components/Footer.jsx
import React from "react";

const Footer = () => (
  <footer className="bg-gray-200 text-center text-gray-700 py-4 mt-8">
    <p>© {new Date().getFullYear()} URL Shortener. All rights reserved.</p>
  </footer>
);

export default Footer;
