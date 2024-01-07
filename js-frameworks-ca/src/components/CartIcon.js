import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import "../styles.css";

function CartIcon() {
  const { state: cartState } = useCart();

  return (
    <Link to="/checkout" className="cart-icon">
      <FaShoppingCart />
      {cartState.cartItems.length > 0 && (
        <span className="cart-count">{cartState.cartItems.length}</span>
      )}
    </Link>
  );
}

export default CartIcon;
