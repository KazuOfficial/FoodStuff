import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div class="card mt-4">
        <div class="card-body">
          <h5 class="card-title">Margherita</h5>
          <div className="row">
            <span class="card-text">
              Mozzarella fior di latte, san marzano d.o.p. tomatoes, basil
            </span>
            <div className="col">
              <h5 class="card-subtitle mt-1 text-muted">£8.00</h5>
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
  }
}
