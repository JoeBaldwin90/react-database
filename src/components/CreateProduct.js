import React, { Component, Fragment } from "react";

export default class CreateProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInputs: {},
      loading: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  createProduct = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer keymPR3okrntrIHuh");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "brw=brwK5GFDj0ZFwA1Is");

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
            "Unit cost": parseInt(this.state.userInputs['unit-cost']),
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

  handleSubmit(event) {  // Refactor this too!!!
    const inputs = document.querySelectorAll("#create-product-form input");
    let formState = {};
    for (let i = 0; i < inputs.length; i++) {
      formState[inputs[i].id] = inputs[i].value;
    }
    this.setState({
      userInputs: formState,
    });
    this.createProduct();
    event.preventDefault();
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit} id='create-product-form'>
          <label>
            Name:
            <input type='text' id='name' />
          </label>
          <label>
            Images:
            <input type='text' id='images' />
          </label>
          <label>
            Description:
            <input type='text' id='description' />
          </label>
          <label>
            Link:
            <input type='text' id='link' />
          </label>
          <label>
            Brand:
            <input type='text' id='brand' />
          </label>
          <label>
            Unit Cost:
            <input type='number' id='unit-cost' />
          </label>
          <label>
            Minutes:
            <input type='number' id='minutes' />
          </label>
          <label>
            Texts:
            <input type='number' id='texts' />
          </label>
          <label>
            Data:
            <input type='number' id='data' />
          </label>
          <label>
            Contract:
            <input type='number' id='contract' />
          </label>
          <button type='submit'>Submit</button>/>
        </form>
      </Fragment>
    );
  }
}

// document.querySelectorAll('#create-product-form input')
// var myObj = {}
// for (let i=0; i<inputs.length; i++) { myObj[inputs[i].id] = inputs[i].value }
