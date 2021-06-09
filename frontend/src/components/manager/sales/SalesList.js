import React, { Component } from "react";
import { saleReport } from "../../../actions/sales";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class SalesList extends Component {
  static propTypes = {
    sales: PropTypes.object.isRequired,
    saleReport: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.saleReport();
  }

  render() {
    const { saleList } = this.props.sales;
    return (
      <div className="table-responsive">
        <table className="table table-striped mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Email</th>
              <th scope="col">Date</th>
              <th scope="col">Cost</th>
            </tr>
          </thead>
          <tbody>
            {saleList &&
              saleList.map(function (element, count) {
                count++;
                return (
                  <tr key={count}>
                    <th scope="row">{count}</th>
                    <td>{element.productName}</td>
                    <td>{element.quantity}</td>
                    <td>{element.emailAddress}</td>
                    <td>{element.saleDate}</td>
                    <td>£{element.purchasePrice.toFixed(2)}</td>
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
  sales: state.sales,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saleReport }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SalesList);
