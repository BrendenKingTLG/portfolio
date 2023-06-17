import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Order from "./pages/Order";
import Gallery from "./pages/Gallery";
import Staff from "./pages/Staff";
import Log from "./pages/Log";
import CreateLog from "./pages/CreateLog";
import EditLog from "./pages/EditLog";
import "./App.css";
import GlobalNav from "./components/GlobalNav";
import Footer from "./components/Footer";
import products from "./data/products";

function App() {
  const [logData, setLogData] = useState([]);
  return (
    <>
      <BrowserRouter>
        <div
          id="main-container"
          className="container d-flex justify-center flex-column"
        >
          <GlobalNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/order" element={<Order products={products} />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/log" element={<Log setLogData={setLogData} />} />
            <Route
              path="/log/create"
              element={<CreateLog setLogData={setLogData} />}
            />
            <Route
              path="/log/edit"
              element={<EditLog setLogData={setLogData} />}
            />
          </Routes>
        </div>
        <div className="container">
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
