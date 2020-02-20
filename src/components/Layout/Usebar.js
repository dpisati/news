import React from "react";
import { connect } from "react-redux";

function searchChange(event) {
  return {
    type: "SEARCH_CHANGE",
    payload: event.target.value
  };
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
        onChange={event => dispatch(searchChange(event))}
      ></input>
      <button
        className="searchButton"
        // onClick={() => dispatch(searchChange())}
        onClick={() => console.log("Search for the keyword: ", searchField)}
      ></button>
    </div>
  </div>
);

export default connect(state => ({
  searchField: state.searchField
}))(Usebar);
