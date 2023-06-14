import React from "react";
import data from "./../data";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div>
      {" "}
      <h1>Featured Products</h1>
      <div className="products">
        {data.products.map((p) => (
          <div className="product" key={p.slug}>
            <Link to={`/product/${p.slug}`}>
              <img src={p.image} alt={p.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${p.slug}`}>
                <p>{p.name}</p>
              </Link>
              <p>
                <strong>${p.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
