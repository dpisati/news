import React, { Component } from "react";

export class Usebar extends Component {
  render() {
    return (
      <div className="useBar">
        <h1>Search bar</h1>
        <div className="right">
          <input
            type="text"
            placeholder="Search..."
            className="searchInput"
          ></input>
          <button className="searchButton"></button>
        </div>
      </div>
    );
  }
}

export default Usebar;
