import "../styles.css";
import React, { useState, useEffect } from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

function Product({ product }) {
  return (
    <Card style={{ width: "15rem", height: "100%" }} className="text-center">
      <Card.Img
        variant="top"
        src={product.imageUrl}
        alt={product.title}
        style={{ height: "10rem", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>

        <Card.Text>Rating: {product.rating}</Card.Text>
        <Link to={`/products/${product.id}`}>
          <Button variant="primary">View Product</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://api.noroff.dev/api/v1/online-shop"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="h1Text">General Goodies</h1>
      <SearchBar products={products} />

      <Container
        className="d-flex justify-content-center align-items-center min-vh-100"
        style={{ marginBottom: "50px" }}
      >
        <Row>
          {products.map((product) => (
            <Col key={product.id} className="mb-4 mx-auto text-center">
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
