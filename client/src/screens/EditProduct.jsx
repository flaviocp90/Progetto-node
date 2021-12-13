import axios from "axios";
import React, {useState, useEffect} from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function EditProduct() {

    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    useEffect(() => {
        
        const getDataById = async () => {
            const {data} = await axios.get(`/api/products/${id}`)
            console.log(data)
            setTitle(data.title)
            setPrice(data.price)
            setDescription(data.description)
        }
        getDataById();

    },[id])

    const navigate = useNavigate()


    const updateHandler = async (e) => {
      e.preventDefault()

      const data = {
        title: title,
        price: price,
        description: description,
        published: true
      }

      await axios.put(`/api/products/${id}`, data)
      navigate('/products')

    }
  
  return (
    <div>
      <Container className="mt-2 p-2">
        <h1>Edit product</h1>
        <hr />
        <Form onSubmit={updateHandler}>
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
            Update product
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default EditProduct;
