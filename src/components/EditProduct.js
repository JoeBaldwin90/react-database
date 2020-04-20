import React, { Component, Fragment } from "react";

export default class EditProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      editId: "",
      selectedProduct: {},
      userInputs: {},
    };

    this.updateUserInputForm = this.updateUserInputForm.bind(this);
    this.findRecord = this.findRecord.bind(this);
    this.updateSelectedProductId = this.updateSelectedProductId.bind(this);
    this.patchProductData = this.patchProductData.bind(this);
  }

  updateUserInputForm(e) {
    this.setState({
      userInputs: {
        ...this.state.userInputs,
        [e.target.name]: parseInt(e.target.value),
      },
    });
  }

  patchProductData(e) {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer keymPR3okrntrIHuh");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "brw=brwK5GFDj0ZFwA1Is");

    var raw = {
      records: [
        {
          id: this.state.editId,
          fields: this.state.userInputs,
        },
      ],
    };

    var requestOptions = {
      method: "PATCH",
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
  }

  updateSelectedProductId(e) {
    this.setState({ editId: e.target.value });
  }

  findRecord(e) {
    e.preventDefault();
    const selected = this.props.products.find(
      ({ id }) => id === this.state.editId
    );
    this.setState({ selectedProduct: selected.fields });
    console.log(selected.fields);
  }

  render() {
    const { selectedProduct } = this.state;
    return (
      <Fragment>
        <form onSubmit={this.findRecord} id='find-record'>
          <label>
            Find Record ID:
            <input
              type='text'
              id='record-id'
              onChange={this.updateSelectedProductId}
            />
          </label>
          <input type='submit' value='Submit' />
        </form>

        {selectedProduct["Name"] !== undefined && (
          <div>
            <p>
              Edit Record for {selectedProduct["Brand"]}{" "}
              {selectedProduct["Name"]}
            </p>
            <form onSubmit={this.patchProductData} id='edit-product-form'>
              <label>
                Unit Cost:
                <input
                  type='number'
                  name='Unit cost'
                  onChange={this.updateUserInputForm}
                />
              </label>
              <label>
                Minutes:
                <input
                  type='number'
                  name='Minutes'
                  onChange={this.updateUserInputForm}
                />
              </label>
              <label>
                Texts:
                <input
                  type='number'
                  name='Texts'
                  onChange={this.updateUserInputForm}
                />
              </label>
              <label>
                Data:
                <input
                  type='number'
                  name='Data (GB)'
                  onChange={this.updateUserInputForm}
                />
              </label>
              <label>
                Contract:
                <input
                  type='number'
                  name='Contract cost (24mo)'
                  onChange={this.updateUserInputForm}
                />
              </label>
              <button type='submit'>Submit</button>
            </form>
          </div>
        )}
      </Fragment>
    );
  }
}
