import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../components/CartContext";
import "../styles.css";

function CheckoutSuccessPage() {
  const { dispatch } = useCart();

  useEffect(() => {
    // Clear cart upon successful checkout
    dispatch({ type: "CLEAR_CART" });
  }, [dispatch]);

  return (
    <div className="success-container">
      <h1 className="h1Text">Success</h1>
      <h2>Your order was successful!</h2>
      <Link to="/">
        {" "}
        <p>Go back to the store</p>
      </Link>
    </div>
  );
}

export default CheckoutSuccessPage;
