import React, { useEffect, useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const getSingleProduct = async () => {
      const data = await axios.get(`/api/products/${id}`);
      console.log(data);

      setTitle(data.data.title);
      setPrice(data.data.price);
      setDescription(data.data.description);
    };
    getSingleProduct();
  }, [id]);

  return (
    <div>
      <Container className="mt-10 p-4">
      <h1>Detail product</h1>
      <Card
        style={{ width: "18rem", margin: "5px" }}
        className="shadow-lg m-5 p-2 "
      >
        <Card.Body>
          <Card.Title>Title: {title}</Card.Title>
          <Card.Title>Price: $ {price}</Card.Title>
          <Card.Text>Description: {description}</Card.Text>
        </Card.Body>
        <Link to={`/product/edit/${id}`}>
          <Button style={{ margin: "5px" }}>Edit</Button>
        </Link>
        <Link to={`/product/${id}`}>
          <Button>Delete</Button>
        </Link>
      </Card>
      </Container>
    </div>
  );
};

export default ProductDetail;
