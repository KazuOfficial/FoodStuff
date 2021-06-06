import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Card extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
  };

  render() {
    const { productList } = this.props.product;
    return (
      <div>
        {productList &&
          productList.map(function (element) {
            return (
              <div className="card mt-4">
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
                      <button className="card-subtitle btn btn-dark float-end">
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

export default connect(mapStateToProps)(Card);
