import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from '../components/ProductCard'

export const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductsData = async () => {
      const { data } = await axios.get("/api/products/allProducts");
      console.log(data);
      setProducts(data);
    };
    getProductsData();
  }, []);

  return (
    <div>
      <Container className="justify-content-center p-2">
        <h1 className="text-center">Show all products</h1>
        <hr />

        <Row>
          {products.map((product) => {
            return (
            <Col md={6} lg={4} sm={12} key={product.id}>
                <ProductCard product={product} />
            </Col>)
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ShowProducts;
