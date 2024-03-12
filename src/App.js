import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Networks from "./components/Networks/Networks";
import Footer from "./components/Footer";
import DocGuide from "./components/Guide/Guide";
import ErrorPage from "./components/Extras/ErrorPage";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomeWithLayout />} />
          <Route path="/networks" element={<NetworksWithLayout />} />
          <Route path="/about" element={<AboutWithLayout />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

function EmptyLayout() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Footer />
    </>
  );
}

function HomeWithLayout() {
  return (
    <>
      {/* <Navbar /> */}
      <Home />
      <Footer />
    </>
  );
}

function NetworksWithLayout() {
  return (
    <>
      {/* <Navbar /> */}
      <Networks />
      <Footer />
    </>
  );
}

function AboutWithLayout() {
  return (
    <>
      {/* <Navbar /> */}
      <About />
      <Footer />
    </>
  );
}

function DocGuideWithLayout() {
  return (
    <>
      {/* <Navbar /> */}
      <DocGuide />
      <Footer />
    </>
  );
}

export default App;
