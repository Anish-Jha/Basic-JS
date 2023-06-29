import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Products from "../Pages/Products";
import SingleProduct from "../Pages/SingleProduct"
import NotFound from "../Pages/NotFound";
import PrivateRoute from "./PrivateRoute";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute>
        <Home/>
      </PrivateRoute>} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<PrivateRoute><Products /></PrivateRoute>} />
      <Route path="/products/:product_id" element={<PrivateRoute><SingleProduct/></PrivateRoute>}/>
      <Route path="*" element={<NotFound />} />
      {/* /users/anything -- take me to this page */}
    </Routes>
  );
}

export default AllRoutes;
