import React from "react";

const DisplayProductData = (props) => (
  <div className='App'>
    <p>Display Product Data Here</p>
    <ul>
      {props.products.map((product, index) => (
        <li key={index}>
          {product.fields.Brand} - {product.fields.Name} -{" "}
          {product.id}
        </li>
      ))}
    </ul>
  </div>
);

export default DisplayProductData;
