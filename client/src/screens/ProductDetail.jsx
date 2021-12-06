import React, { useEffect, useState } from 'react';
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { axios } from "axios";
import { useParams } from 'react-router'


const ProductDetail = ({ product }) => {

    const { id } = useParams()

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
  
    
    useEffect(() => {

        const getSingleProductData = async () => {
            const { data } = await axios.get(`/api/products/allProducts${id}`);
            console.log(data);
            setTitle(data.title)
            setPrice(data.price)
            setDescription(data.description)

          };

          getSingleProductData();

          }, [])

    return (
        <div>
            <h1>Detail product</h1>
            <Card
        style={{ width: "18rem", margin: "5px" }}
        className="shadow-lg m-2 p-3 "
      >
        <Card.Body>
          <Card.Title>Title: {product.title}</Card.Title>
          <Card.Title>Price: $ {product.price}</Card.Title>
          <Card.Text>Description: {product.description}</Card.Text>
        </Card.Body>
        <Link to={`/product/edit/${product.id}`}>
          <Button>Edit</Button>
        </Link>
        <Link to={`/product/${product.id}`}>
          <Button>Delete</Button>
        </Link>
      </Card>

        </div>
    )
}

export default ProductDetail
