import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = (props) => {
  const { p } = props;
  return (
    <Card>
      <Link to={`/product/${p.slug}`}>
        <img src={p.image} className="card-img-top" alt={p.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${p.slug}`}>
          <Card.Title>{p.name}</Card.Title>
        </Link>
        <Rating rating={p.rating} numReviews={p.numReviews} />
        <Card.Text>${p.price}</Card.Text>
        <Button>Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
