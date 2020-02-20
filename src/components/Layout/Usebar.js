import React from "react";
import { connect } from "react-redux";

let searchInput = "oi eu";

function searchChange(search) {
  return {
    type: "SEARCH_CHANGE",
    payload: searchInput,
    log: search
  };
}

function onSearchChange(event) {
  const searchTerm = event.target.value;
  let searchInput = searchTerm;
  console.log(searchInput);
}

const Usebar = ({ searchField, dispatch }) => (
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
        id="inputSearchField"
        // onChange={event => console.log(event.target.value)}
        onChange={event => onSearchChange(event)}
      ></input>
      <button
        className="searchButton"
        // onClick={() => dispatch(searchChange())}
        onClick={() => console.log("test button", searchInput)}
      ></button>
      {console.log("console log search", searchField)}
    </div>
  </div>
);

export default connect(state => ({
  searchField: state.searchField
}))(Usebar);
