import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import DeleteProduct from "./DeleteProduct";
import CreateProduct from "./CreateProduct";
import EditProduct from "./EditProduct";
import DisplayProductData from "./DisplayProductData";
import ProductView from "./ProductView";

class Main extends Component {
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
      <main className='main'>
        <Switch>
          <Route
            exact
            path='/'
            render={() => <DisplayProductData products={this.state.records} />}
          />
          <Route
            exact
            path='/create-product'
            render={() => <CreateProduct />}
          />
          <Route
            exact
            path='/edit-product'
            render={() => <EditProduct products={this.state.records} />}
          />
          <Route
            exact
            path='/delete-product'
            render={() => <DeleteProduct />}
          />
          <Route
            path='/product/:id'
            render={(props) => (
              <ProductView {...props} product={this.state.records.find(product => product.id === props.match.params.id)} />
            )}
          />
          <Route
            path='/*'
            render={() => <DisplayProductData products={this.state.records} />}
          />
        </Switch>
      </main>
    );
  }
}

export default withRouter(Main);
