import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class RemoveProduct extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
  };

  render() {
    const { productList } = this.props.product;
    return (
      <form className="mt-5">
        <h5>Remove a product</h5>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Choose a product</label>
          <select class="form-control" id="exampleFormControlSelect1">
            {productList &&
              productList.map(function (element) {
                return <option>{element.productName}</option>;
              })}
          </select>
        </div>
        <button type="submit" class="btn btn-danger mt-2">
          Remove
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps)(RemoveProduct);
