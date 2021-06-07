import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ProductList extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
  };

  render() {
    const { productList } = this.props.product;
    return (
      <div className="table-responsive">
        <table className="table table-striped mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Cost</th>
              <th scope="col">Id</th>
            </tr>
          </thead>
          <tbody>
            {productList &&
              productList.map(function (element, count) {
                count++;
                return (
                  <tr key={count}>
                    <th scope="row">{count}</th>
                    <td>{element.productName}</td>
                    <td>{element.description}</td>
                    <td>£{element.retailPrice.toFixed(2)}</td>
                    <td>{element.id}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps)(ProductList);
