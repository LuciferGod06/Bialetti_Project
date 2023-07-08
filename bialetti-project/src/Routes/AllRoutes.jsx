import React from "react";
import { Route, Routes } from "react-router-dom";
import PaymentPage from "../Components/PaymentPages/PaymentPage";
import HomePage from "../Components/Homepage/HomePage";
import { Product } from "../Components/Product/Product";
import { ProductDetail } from "../Components/ProductDetail/ProductDetail";
import CartPage from "../Components/CartPage/CartPage";



const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/product' element={<Product />} />
            <Route path='/product/:id' element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="*" element={<HomePage />} />

        </Routes>
    );
};

export default AllRoutes;