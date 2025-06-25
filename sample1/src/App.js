import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Input from "./pages/input";
import Input2 from "./pages/input2";
import Counter from "./pages/Counter";
import UserList from "./pages/UserList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/input">input</Link>
          <Link to="/input2">input2</Link>
          <Link to="/count">Count</Link>
          <Link to="/userList">Users</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/input" element={<Input />} />
          <Route path="/input2" element={<Input2 />} />
          <Route path="/count" element={<Counter />} />
          <Route path="/userList" element={<UserList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
