import React, { Fragment } from "react";

const DisplayProductData = (props) => (
  <Fragment>
    <h1>Product Data Here</h1>
    <ul>
      {props.products.map((product, index) => (
        <li key={index}>
          {product.fields.Brand} - {product.fields.Name} - {product.id}
        </li>
      ))}
    </ul>
  </Fragment>
);

export default DisplayProductData;
