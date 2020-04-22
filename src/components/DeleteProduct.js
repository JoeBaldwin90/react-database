import React, { Component, Fragment } from "react";

class DeleteProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: "",
      loading: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  deleteProduct = (id) => {
    this.setState({
      loading: !this.state.loading
    });

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer keymPR3okrntrIHuh");
    myHeaders.append("Cookie", "brw=brwK5GFDj0ZFwA1Is");

    let raw = "";

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `https://api.airtable.com/v0/appRASDQStKAnh6oO/Products?records[]%3D=${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.setState({
          loading: !this.state.loading
        });
      })
      .catch((error) => console.log("error", error));
  };

  handleChange(event) {
    this.setState({ productId: event.target.value });
  }

  handleSubmit(event) {
    console.log("Product Deleted: " + this.state.productId);
    this.deleteProduct(this.state.productId);
    event.preventDefault();
  }

  render() {
    return (
      <Fragment>
        <h1>Delete a product</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="delete">
            Delete:
            <input
              type='text'
              name="delete"
              value={this.state.productId}
              onChange={this.handleChange}
            />
          </label>
          <input type='submit' value='Submit' />
        </form>
      </Fragment>
    );
  }
}

export default DeleteProduct;