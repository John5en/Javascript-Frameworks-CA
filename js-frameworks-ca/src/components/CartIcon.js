import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import customCartIcon from "../shopping cart icon.png";
import "../styles.css";

function CartIcon() {
  const { state: cartState } = useCart();

  return (
    <Link to="/checkout" className="cart-icon">
      <img
        src={customCartIcon}
        alt="Custom Cart Icon"
        style={{ width: "40px", height: "30px" }}
      />
      {cartState.cartItems.length > 0 && (
        <span className="cart-count">{cartState.cartItems.length}</span>
      )}
    </Link>
  );
}

export default CartIcon;
