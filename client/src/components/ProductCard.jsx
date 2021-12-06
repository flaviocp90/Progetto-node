import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div>
      <Card
        style={{ width: "18rem", margin: "5px" }}
        className="shadow-lg m-2 p-3 "
      >
        <Card.Body>
          <Card.Title>Title: {product.title}</Card.Title>
          <Card.Title>Price: $ {product.price}</Card.Title>
          <Card.Text>Description: {product.description}</Card.Text>
        </Card.Body>
        <Link to={`/product/${product.id}`}>
          <Button>Detail</Button>
        </Link>
      </Card>
    </div>
  );
};

export default ProductCard;
