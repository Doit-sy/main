import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Test from "./pages/Test";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
