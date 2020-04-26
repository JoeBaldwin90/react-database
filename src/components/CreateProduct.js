import React, { Component, Fragment } from "react";

export default class CreateProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInputs: {},
      loading: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  createProduct = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", process.env.REACT_APP_AUTH_TOKEN);
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", process.env.REACT_APP_COOKIE);

    let raw = {
      records: [
        {
          fields: {
            Name: this.state.userInputs.name,
            Images: [
              {
                url: this.state.userInputs.images,
              },
            ],
            Description: this.state.userInputs.description,
            Link: this.state.userInputs.link,
            Brand: this.state.userInputs.brand,
            "Unit cost": parseInt(this.state.userInputs["unit-cost"]),
            "In stock": true,
            Minutes: parseInt(this.state.userInputs.minutes),
            Texts: parseInt(this.state.userInputs.texts),
            "Data (GB)": parseInt(this.state.userInputs.data),
            "Contract cost (24mo)": parseInt(this.state.userInputs.contract),
          },
        },
      ],
    };

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(raw),
      redirect: "follow",
    };

    fetch(
      "https://api.airtable.com/v0/appRASDQStKAnh6oO/Products",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  onInputChange(e) {
    this.setState({
      userInputs: {
        ...this.state.userInputs,
        [e.target.id]: e.target.value,
      },
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.createProduct();
  }

  render() {
    return (
      <Fragment>
        <h1>Create a product</h1>
        <form onSubmit={this.handleSubmit} id='create-product-form'>
          <label>
            Name:
            <input
              type='text'
              id='name'
              name='Name'
              onChange={this.onInputChange}
            />
          </label>
          <label>
            Images:
            <input
              type='text'
              id='images'
              name='Images'
              onChange={this.onInputChange}
            />
          </label>
          <label>
            Description:
            <input
              type='text'
              id='description'
              name='Description'
              onChange={this.onInputChange}
            />
          </label>
          <label>
            Link:
            <input
              type='text'
              id='link'
              name='Link'
              onChange={this.onInputChange}
            />
          </label>
          <label>
            Brand:
            <input
              type='text'
              id='brand'
              name='Brand'
              onChange={this.onInputChange}
            />
          </label>
          <label>
            Unit Cost:
            <input
              type='number'
              id='unit-cost'
              name='Unit cost'
              onChange={this.onInputChange}
            />
          </label>
          <label>
            Minutes:
            <input
              type='number'
              id='minutes'
              name='Minutes'
              onChange={this.onInputChange}
            />
          </label>
          <label>
            Texts:
            <input
              type='number'
              id='texts'
              name='Texts'
              onChange={this.onInputChange}
            />
          </label>
          <label>
            Data:
            <input
              type='number'
              id='data'
              name='Data (GB)'
              onChange={this.onInputChange}
            />
          </label>
          <label>
            Contract:
            <input
              type='number'
              id='contract'
              name='Contract cost (24mo)'
              onChange={this.onInputChange}
            />
          </label>
          <input type='submit' value='Submit' />
        </form>
      </Fragment>
    );
  }
}
