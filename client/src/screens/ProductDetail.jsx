import React, { useEffect, useState } from "react";
import { Card, Button, Container, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [productDescription, setProductDescription] = useState("");
  const [published, setPublished] = useState(true)
  const [productImage, setProductImage] = useState('')

  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState('')

  useEffect(() => {
    const getSingleProduct = async () => {
      const data = await axios.get(`/api/products/getProductReviews/${id}`);
      console.log(data);

      setTitle(data.data.title);
      setPrice(data.data.price);
      setProductDescription(data.data.description);
      setPublished(data.data.description)
      setReviews(data.data.review)
      setProductImage(data.data.image)

    };
    getSingleProduct();
  }, [id]);

  const navigate = useNavigate();

  const handleDelete = async (id) => {
    await axios.delete(`/api/products/${id}`);
    navigate("/products");
  };

  const addReviewHandle = async (e) => {

    e.preventDefault()


    let review = {
      product_id: id,
      rating: rating,
      description: description
    }

    await axios.post(`/api/products/addReview/${id}`, review)
    navigate("/products");

  };

  return (
    <div>
      <Container className="mt-10 p-4">
        <h1>Detail product</h1>
        <Card
          style={{ width: "18rem", margin: "5px" }}
          className="shadow-lg m-5 p-2 "
        >
          <Card.Img src={`http://localhost:3000/${productImage}`}/>
          <Card.Body>
            <Card.Title>Title: {title}</Card.Title>
            <Card.Title>Price: $ {price}</Card.Title>
            <Card.Text>Description: {productDescription}</Card.Text>
            <br />

            <h4>Reviews</h4>
            {reviews.length > 0 ? (
              reviews.map(review => {
                return(
                  <p key={review.id}>Rating: {review.rating}<br /> {review.description} </p>
                )
              })
            ) : ( <p>No reviews for this product</p> )}

            <Link to={`/product/edit/${id}`}>
              <Button style={{ margin: "5px" }}>Edit</Button>
            </Link>
            <Button className="btn-danger" onClick={() => handleDelete(id)}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      </Container>

      <Container>
        <h2>Add Review</h2>
        <hr />

        <Form onSubmit={addReviewHandle}>
          <Form.Group className="mb-3" controlId="Rating">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              value={rating}
              onChange={(e) => setRating(e.target.value)}
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
            Add Review
          </Button>
        </Form>

      </Container>
    </div>
  );
};

export default ProductDetail;
