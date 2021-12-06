import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const navigate = useNavigate(); 

  const addProductHandler = async (e) => {
    
    e.preventDefault()

    const data = {
      title: title,
      price: price,
      description: description,
      published: true
    }


    await axios.post("/api/products/addProduct", data)
    navigate('/products')

  }

  return (
    <>
      <Container className="mt-2 p-2">
        <h1>Add product</h1>
        <hr />
        <Form onSubmit={addProductHandler}>
          <Form.Group className="mb-5" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Price ($)</Form.Label>
            <Form.Control
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              type="number"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              as="textarea"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add product
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default AddProduct;
