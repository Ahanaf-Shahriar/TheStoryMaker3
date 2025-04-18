import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import ReactPixel from "react-facebook-pixel";
import "./index.css";
import HomePage from "./components/HomePage.jsx";

const pixelId = "449640924362419"; 

// Initialize Pixel globally
ReactPixel.init(pixelId);
ReactPixel.pageView(); // Track initial page load

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HomePage />
  </StrictMode>
);
