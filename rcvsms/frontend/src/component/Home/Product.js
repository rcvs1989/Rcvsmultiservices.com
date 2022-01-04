import React from "react";
import "./Product.css";
//import { useSelector, useDispatch } from "react-redux";
//import { clearErrors, getProduct } from "../../actions/productAction";
//import Loader from "../layout/Loader/Loader";
//import ProductCard from "../Home/ProductCard";
//import Pagination from "react-js-pagination";
//import Slider from "@material-ui/core/Slider";
//import { useAlert } from "react-alert";
//import Typography from "@material-ui/core/Typography";
//import MetaData from "../layout/MetaData";
import { Link } from "react-router-dom";

import { Rating } from "@material-ui/lab";

const Product = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <Rating {...options} />{" "}
        <span className="productCardSpan">
          {" "}
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <span>{`₹${product.price}`}</span>
    </Link>
  );
};

export default Product;
  
  