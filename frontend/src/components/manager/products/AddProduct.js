import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addProduct } from "../../../actions/product";

class AddProduct extends Component {
  state = {
    name: "",
    description: "",
    price: "",
  };

  static propTypes = {
    addProduct: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { name, description, price } = this.state;
    this.props.addProduct(name, description, parseInt(price));
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, description, price } = this.state;
    return (
      <form onSubmit={this.onSubmit} className="mt-5">
        <h5>Add a product</h5>
        <div className="row">
          <div className="form-group col-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              onChange={this.onChange}
              value={name}
              name="name"
            ></input>
          </div>
          <div className="form-group col">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter description"
              onChange={this.onChange}
              value={description}
              name="description"
            ></input>
          </div>
          <div className="form-group col-1">
            <label>Price</label>
            <input
              type="number"
              className="form-control"
              placeholder="£"
              onChange={this.onChange}
              value={price}
              name="price"
            ></input>
          </div>
        </div>
        <button type="submit" className="btn btn-success mt-2">
          Add
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { addProduct })(AddProduct);
