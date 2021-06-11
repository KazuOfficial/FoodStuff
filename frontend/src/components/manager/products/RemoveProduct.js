import React, { Component } from "react";
import PropTypes, { element } from "prop-types";
import { connect } from "react-redux";
import { deleteProduct } from "../../../actions/product";

class RemoveProduct extends Component {
  state = {
    productName: "",
  };

  static propTypes = {
    deleteProduct: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { productName } = this.state;
    if (productName != "") {
      this.props.deleteProduct(productName, this.props.auth.access_Token);
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { productName } = this.state;
    const { productList } = this.props.product;
    //productList &&
    //this.setState({ productName: "xd" }); //(productList[0].productName);
    return (
      <form onSubmit={this.onSubmit} className="mt-5">
        <h5>Remove a product</h5>
        <div className="form-group">
          <select
            className="form-control"
            name="productName"
            value={productName}
            onChange={this.onChange}
          >
            <option hidden>--- choose a product ---</option>
            {productList &&
              productList.map(function (element, index) {
                return <option key={index}>{element.productName}</option>;
              })}
          </select>
        </div>
        <button type="submit" className="btn btn-danger mt-2">
          Remove
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.product,
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteProduct })(RemoveProduct);
