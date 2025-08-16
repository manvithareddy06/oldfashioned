// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./assets/pages/navbar";
import Home from "./assets/pages/home";
import Services from "./assets/pages/services";
import Contact from "./assets/pages/contact";
import BookingForm from "./assets/pages/BookingForm";
import AboutUs from "./assets/pages/aboutus";  // <-- import AboutUs

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Services />
                  <Contact />
                </>
              }
            />
            <Route path="/about" element={<AboutUs />} />       {/* Add About Us page */}
            <Route path="/booking" element={<BookingForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
