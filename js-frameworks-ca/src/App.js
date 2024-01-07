import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";
import "./index.css";

function App() {
  const [cartItemCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout cartItemCount={cartItemCount}>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <ContactPage />
            </Layout>
          }
        />
        <Route
          path="/products/:productId"
          element={
            <Layout>
              <ProductPage />
            </Layout>
          }
        />
        <Route
          path="/checkout"
          element={
            <Layout>
              <CheckoutPage />
            </Layout>
          }
        />
        <Route
          path="/checkout/success"
          element={
            <Layout>
              <CheckoutSuccessPage />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
