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
function searchMain(word, mainLink) {
  return {
    type: "MAIN_ARTICLES",
    payload: word,
    link: mainLink
  };
}

const Usebar = ({ searchField, mainLink, dispatch }) => (
  <div className="useBar">
    <div className="left">
      <ul>
        <li
          className={mainLink === "National" ? "national active" : "national"}
        >
          <a
            onClick={() => {
              dispatch(
                searchMain(
                  "http://newsapi.org/v2/top-headlines?country=nz&apiKey=fe8a84b676c84ea387ddba2872f9c0d6",
                  "National"
                )
              );
              dispatch(search(searchField));
            }}
            href="#"
          >
            National
          </a>
        </li>
        <li className={mainLink === "Corona" ? "corona active" : "corona"}>
          <a
            onClick={() => {
              dispatch(
                searchMain(
                  "http://newsapi.org/v2/everything?q=coronavirus&from=2020-01-24&sortBy=publishedAt&apiKey=fe8a84b676c84ea387ddba2872f9c0d6",
                  "Corona"
                )
              );
              dispatch(search(searchField));
            }}
            href="#"
          >
            Coronavirus
          </a>
        </li>
        <li className={mainLink === "Sports" ? "sports active" : "sports"}>
          <a
            onClick={() => {
              dispatch(
                searchMain(
                  "http://newsapi.org/v2/everything?q=league&from=2020-01-24&sortBy=publishedAt&apiKey=fe8a84b676c84ea387ddba2872f9c0d6",
                  "Sports"
                )
              );
              dispatch(search(searchField));
            }}
            href="#"
          >
            Sports
          </a>
        </li>
        <li className={mainLink === "Money" ? "money active" : "money"}>
          <a
            onClick={() => {
              dispatch(
                searchMain(
                  "http://newsapi.org/v2/everything?q=investment&from=2020-01-24&sortBy=publishedAt&apiKey=fe8a84b676c84ea387ddba2872f9c0d6",
                  "Money"
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
  searchField: state.searchField,
  mainLink: state.mainLink
}))(Usebar);
