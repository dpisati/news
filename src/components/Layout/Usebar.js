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
function searchMain(word) {
  return {
    type: "MAIN_ARTICLES",
    payload: word
  };
}

const Usebar = ({ searchField, dispatch }) => (
  <div className="useBar">
    <div className="left">
      <ul>
        <li className="national">
          <a
            onClick={() => {
              dispatch(
                searchMain(
                  "http://newsapi.org/v2/top-headlines?country=nz&apiKey=fe8a84b676c84ea387ddba2872f9c0d6"
                )
              );
              dispatch(search(searchField));
            }}
            href="#"
          >
            National
          </a>
        </li>
        <li className="corona">
          <a
            onClick={() => {
              dispatch(
                searchMain(
                  "http://newsapi.org/v2/everything?q=coronavirus&from=2020-01-24&sortBy=publishedAt&apiKey=fe8a84b676c84ea387ddba2872f9c0d6"
                )
              );
              dispatch(search(searchField));
            }}
            href="#"
          >
            Coronavirus
          </a>
        </li>
        <li className="sports">
          <a
            onClick={() => {
              dispatch(
                searchMain(
                  "http://newsapi.org/v2/everything?q=league&from=2020-01-24&sortBy=publishedAt&apiKey=fe8a84b676c84ea387ddba2872f9c0d6"
                )
              );
              dispatch(search(searchField));
            }}
            href="#"
          >
            Sports
          </a>
        </li>
        <li className="money">
          <a
            onClick={() => {
              dispatch(
                searchMain(
                  "http://newsapi.org/v2/everything?q=investment&from=2020-01-24&sortBy=publishedAt&apiKey=fe8a84b676c84ea387ddba2872f9c0d6"
                )
              );
              dispatch(search(searchField));
            }}
            href="#"
          >
            Money
          </a>
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
        value={searchField}
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
