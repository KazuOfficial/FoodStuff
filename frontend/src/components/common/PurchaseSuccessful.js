import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/Header";

export default class PurchaseSuccessful extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container text-center">
          <h1 className="mt-5">THANK YOU</h1>
          <h3>for your order</h3>
          <Link className="mt-5 btn btn-lg btn-primary" to="/">
            Go back
          </Link>
          {/* <h3 className="mt-5">You bought:</h3>
          <table className="table mt-5">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table> */}
        </div>
      </>
    );
  }
}
