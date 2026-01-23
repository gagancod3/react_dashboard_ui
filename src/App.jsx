// import { useState } from 'react'
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Search from "./pages/Search.jsx";
import Home from "./pages/Home.jsx";
import Analytics from "./pages/Analytics.jsx";
import Layout from "./components/Layout.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
      <Layout />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Home />} />
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="search" element={<Search />} />
            <Route path="analytics" element={<Analytics />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
