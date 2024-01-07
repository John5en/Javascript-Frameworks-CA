import React from "react";
import { useCart } from "../components/CartContext";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function CheckoutPage() {
  const { state: cartState } = useCart();

  return (
    <div>
      <h1 className="h1Text">Checkout Page</h1>
      <div className="card-container d-flex justify-content-center flex-wrap">
        {cartState.cartItems.map((item) => (
          <Card key={item.id} style={{ width: "18rem" }} className="mb-3 mx-2">
            <Card.Img
              variant="top"
              src={item.imageUrl}
              style={{ height: "10rem", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>${item.discountedPrice}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      <h5 className="text-center" style={{ marginBottom: "50px" }}>
        Total: ${calculateTotal(cartState.cartItems)}
      </h5>
      <div className="text-center" style={{ marginBottom: "1000px" }}>
        <Link to="/checkout/success">
          <Button variant="primary">Checkout</Button>
        </Link>
      </div>
    </div>
  );
}

// function to calculate total price
function calculateTotal(cartItems) {
  const total = cartItems.reduce((acc, item) => acc + item.discountedPrice, 0);

  return total.toFixed(2);
}

export default CheckoutPage;
