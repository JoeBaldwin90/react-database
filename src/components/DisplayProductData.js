import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const DisplayProductData = (props) => (
  <Fragment>
    <h1>Product Data Here</h1>
    <ul>
      {props.products.map((product, index) => (
        <li key={index}>
          {product.fields.Brand} - {product.fields.Name} - {" "}
          <strong>
            <NavLink
              to={`/product/${product.id}`}
              activeClassName='selected'
              activeStyle={{
                color: "#4CAF50",
                borderBottom: "solid 2px #4CAF50",
                fontStyle: "italic",
              }}
            >
              View Product
            </NavLink>
          </strong>
        </li>
      ))}
    </ul>
  </Fragment>
);

export default DisplayProductData;
