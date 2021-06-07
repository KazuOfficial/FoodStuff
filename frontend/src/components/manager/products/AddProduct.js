import React, { Component } from "react";

export default class AddProduct extends Component {
  render() {
    return (
      <form className="mt-5">
        <h5>Add a product</h5>
        <div className="row">
          <div class="form-group col-3">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter name"
            ></input>
          </div>
          <div class="form-group col">
            <label for="exampleInputPassword1">Description</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter description"
            ></input>
          </div>
          <div class="form-group col-1">
            <label for="exampleInputPassword1">Cost</label>
            <input type="number" class="form-control" placeholder="£"></input>
          </div>
        </div>
        <button type="submit" class="btn btn-success mt-2">
          Add
        </button>
      </form>
    );
  }
}
