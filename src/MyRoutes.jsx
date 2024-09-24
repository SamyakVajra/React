import React from "react";
import Home from "./pages/Home";
import Second from "./Second";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Login from "./pages/login";
import Register from "./pages/Register";
import Products from "./pages/Products";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/sss/:username" element={<Second />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
