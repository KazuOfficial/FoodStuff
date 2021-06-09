import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadProducts } from "../../actions/product";
import { addToCart, addSubtotal } from "../../actions/cart";
import { bindActionCreators } from "redux";

class Card extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired,
    addSubtotal: PropTypes.func.isRequired,
    loadProducts: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.loadProducts();
  }

  handleClick = (e) => {
    this.props.addToCart(e.target.value, e.target.name);
    this.props.addSubtotal(parseFloat(e.target.name));
  };

  render() {
    const { productList } = this.props.product;
    return (
      <div>
        {productList &&
          productList.map((element, index) => {
            return (
              <div key={index} className="card mt-4">
                <div className="card-body">
                  <h5 className="card-title">{element.productName}</h5>
                  <div className="row">
                    <span className="card-text">{element.description}</span>
                    <div className="col">
                      <h5 className="card-subtitle mt-1 text-muted">
                        £{element.retailPrice.toFixed(2)}
                      </h5>
                    </div>
                    <div className="col">
                      <button
                        className="card-subtitle btn btn-dark float-end"
                        onClick={this.handleClick}
                        value={element.productName}
                        name={element.retailPrice.toFixed(2)}
                      >
                        ADD
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.product,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadProducts, addToCart, addSubtotal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
