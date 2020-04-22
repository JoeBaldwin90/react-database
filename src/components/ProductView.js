import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const ProductView = ({ product }) => (
  <Fragment>
    <h1>Product View</h1>
    <p>
      <strong>{product.fields["Brand"]}</strong> {product.fields["Name"]}
    </p>
    <p>Cost: £{product.fields["Unit cost"]}</p>
    <NavLink
      to="/"
      activeClassName='selected'
    >
      Back
    </NavLink>
  </Fragment>
);

export default ProductView;
