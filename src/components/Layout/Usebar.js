import React, { Component } from "react";

export class Usebar extends Component {
  render() {
    return (
      <div className="useBar">
        <div className="left">
          <ul className="ulBar">
            <li>National</li>
            <li>World</li>
            <li>Weather</li>
          </ul>
        </div>
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
