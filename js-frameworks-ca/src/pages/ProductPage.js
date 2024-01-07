import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useCart } from "../components/CartContext";

function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { state: cartState, dispatch: cartDispatch } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://api.noroff.dev/api/v1/online-shop/${productId}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  const addToCart = () => {
    const isProductInCart = cartState.cartItems.some(
      (cartItem) => cartItem.id === product.id
    );

    if (!isProductInCart) {
      cartDispatch({ type: "ADD_TO_CART", payload: product });
      console.log(`Product added to cart: ${product.title}`);
    } else {
      console.log(`Product is already in the cart: ${product.title}`);
    }
  };
  //calculation discount in percentage
  const calculateDiscount = () => {
    const discountPercentage =
      ((product.price - product.discountedPrice) / product.price) * 100;
    return Math.round(discountPercentage);
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{ marginBottom: "60px" }}
    >
      <Row>
        <Col>
          {product ? (
            <div>
              <h2>{product.title}</h2>
              <Card style={{ width: "100%", marginBottom: "50px" }}>
                <Card.Img
                  style={{ height: "40rem", objectFit: "cover" }}
                  variant="top"
                  src={product.imageUrl}
                  alt={product.title}
                />
                <Card.Body>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>Price: ${product.discountedPrice}</Card.Text>
                  {product.discountedPrice < product.price && (
                    <Card.Text>Discount: {calculateDiscount()}%</Card.Text>
                  )}
                  <Button variant="primary" onClick={addToCart}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>

              {product.reviews && product.reviews.length > 0 && (
                <div>
                  <h3>Reviews</h3>
                  <Container>
                    <Row>
                      {product.reviews.map((review) => (
                        <Col key={review.id}>
                          <Card>
                            <Card.Body>
                              <Card.Title>{review.username}</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">
                                Rated: {review.rating} stars
                              </Card.Subtitle>
                              <Card.Text>{review.description}</Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Container>
                </div>
              )}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default ProductPage;
