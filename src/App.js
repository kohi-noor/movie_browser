import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import SearchView from "./components/SearchView";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("You are searching for kohinoor?");

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route path = "/search" element={ <SearchView textKeyword= {searchText} resultKeyword = {searchResults} /> } />
      </Routes>
    </div>
  );
}

export default App;
