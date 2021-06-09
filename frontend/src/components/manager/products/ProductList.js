import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadProducts } from "../../../actions/product";
import { bindActionCreators } from "redux";

class ProductList extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    loadProducts: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.loadProducts();
  }

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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadProducts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
