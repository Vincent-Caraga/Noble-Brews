import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Product";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Header />
        <Product />
        <Footer />
      </div>
    </>
  );
};

export default App;
