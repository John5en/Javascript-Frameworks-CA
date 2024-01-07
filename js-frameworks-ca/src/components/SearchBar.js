import React, { useState } from "react";
import {
  Form,
  FormControl,
  Button,
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function SearchBar({ products }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    if (newSearchTerm === "") {
      setSearchResults([]);
    } else {
      const filteredResults = products.filter((product) =>
        product.title.toLowerCase().includes(newSearchTerm.toLowerCase())
      );

      setSearchResults(filteredResults);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container className="mb-3">
      <Form inline onSubmit={handleSearchSubmit}>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={searchTerm}
          onChange={handleSearch}
        />
      </Form>

      <Row className="mt-3">
        {searchResults.length === 0 && searchTerm !== "" && (
          <Col>
            <p>No results found</p>
          </Col>
        )}

        {searchResults.map((result) => (
          <Col key={result.id} md={4} className="mb-4">
            <Card style={{ width: "15rem", margin: "10px" }}>
              <Card.Img
                variant="top"
                src={result.imageUrl}
                alt={result.title}
                style={{ height: "10rem", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{result.title}</Card.Title>

                <Card.Text>Rating: {result.rating}</Card.Text>
                <Link to={`/products/${result.id}`}>
                  <Button variant="primary">View Product</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SearchBar;
