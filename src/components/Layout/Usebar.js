import React, { Component } from "react";

export class Usebar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchField: "" };
  }

  onSearchChange(event) {
    // const boundObject = this;
    const searchTerm = event.target.value;
    this.setState({ searchField: searchTerm });
    console.log(searchTerm);
    // boundObject.performSearch(searchTerm);
  }

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
            onChange={this.onSearchChange.bind(this)}
          ></input>
          <button className="searchButton"></button>
        </div>
      </div>
    );
  }
}

export default Usebar;
