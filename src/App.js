import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Login, Register, Product, About, LoginAdmin, AdminPage, AdminDetails, AddProduct, EditProduct } from "./pages/Z";
import CustomerOrder from "./pages/admin/CustomerOrder";
import Details from "./pages/user/Details";
import Carts from "./component/Carts";

function App() {
  const [nums1, setNums1] = useState([]);

  useEffect(() => {
    setNums1(JSON.parse(localStorage.getItem("Makanan")));
  }, [setNums1]);

  if (localStorage.getItem("Makanan") === null) {
    localStorage.setItem("Makanan", "[]");
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/admin" element={<LoginAdmin />}></Route>
        <Route path="/AdminPage" element={<AdminPage />}></Route>
        <Route path="/addProduct" element={<AddProduct />}></Route>
        <Route path="/CustomerOrder" element={<CustomerOrder />}></Route>
        <Route path="/EditProduct/:id" element={<EditProduct />}></Route>
        <Route path="/AdminDetails/:id" element={<AdminDetails />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/Product" element={<Product />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Carts" element={<Carts nums1={nums1} setNums1={setNums1} />}></Route>
        <Route path="/Details/:id" element={<Details nums1={nums1} setNums1={setNums1} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
