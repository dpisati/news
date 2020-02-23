import React from "react";
import { connect } from "react-redux";
import { fecthData } from "../../store/index";

function searchChange(event) {
  return {
    type: "SEARCH_CHANGE",
    payload: event.target.value
  };
}
function search(searchField) {
  fecthData();
  return {
    type: "SEARCH",
    payload: searchField
  };
}

const Usebar = ({ searchField, dispatch }) => (
  <div className="useBar">
    <div className="left">
      <ul>
        <li className="national">
          <a href="#">National</a>
        </li>
        <li className="corona">
          <a href="#">Coronavirus</a>
        </li>
        <li className="sports">
          <a href="#">Sports</a>
        </li>
        <li className="money">
          <a href="#">Money</a>
        </li>
        <hr />
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
        onClick={() => dispatch(search(searchField))}
      ></button>
    </div>
  </div>
);

export default connect(state => ({
  searchField: state.searchField
}))(Usebar);
