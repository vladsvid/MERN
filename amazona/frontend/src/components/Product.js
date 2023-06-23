import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import { Store } from "./../Store";
import axios from "axios";

const Product = (props) => {
  const { p } = props;
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems }
  } = state;
  const addToCartHandler = async (item) => {
    const { data } = await axios.get(`/api/products/${item._id}`);
    const existItem = cartItems.find((x) => x._id === item._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    if (data.countInStock < quantity) {
      window.alert("Sorry, product is out of stock");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity }
    });
  };
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
        {p.countInStock === 0 ? (
          <Button variant="light" disabled>
            Out of Stock
          </Button>
        ) : (
          <Button onClick={() => addToCartHandler(p)}>Add to cart</Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default Product;
