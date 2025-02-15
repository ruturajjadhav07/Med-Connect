import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./Components/Search";
import Navbar from "./Components/Navbar";
import SignIn from "./Components/Form/SignIn";
import SignUp from "./Components/Form/SignUp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/search" element={<Search />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
