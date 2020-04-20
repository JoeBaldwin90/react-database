import React, { Component } from "react";
import "../css/App.scss";
import DeleteProduct from "./DeleteProduct";
import CreateProduct from "./CreateProduct";
import EditProduct from "./EditProduct";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      records: [],
    };
  }

  loadProductData = () => {
    this.setState({
      loading: !this.state.loading,
    });
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer keymPR3okrntrIHuh");
    myHeaders.append("Cookie", "brw=brwK5GFDj0ZFwA1Is");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://api.airtable.com/v0/appRASDQStKAnh6oO/Products",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.setState({
          loading: !this.state.loading,
          records: [...this.state.records, ...result.records],
        });
      })
      .catch((error) => console.log("error", error));
  };

  componentDidMount() {
    this.loadProductData();
  }

  render() {
    return (
      <div className='App'>
        <h1>Hello World</h1>
        <DeleteProduct></DeleteProduct>
        <CreateProduct></CreateProduct>
        <EditProduct products={this.state.records}></EditProduct>
      </div>
    );
  }
}
