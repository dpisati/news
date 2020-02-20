import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middleware = applyMiddleware(thunk, logger);

const initialState = {
  searchField: "Initial Search String",
  url:
    "http://newsapi.org/v2/top-headlines?country=nz&apiKey=fe8a84b676c84ea387ddba2872f9c0d6",
  news: [
    {
      title: "Esse eh um test",
      description:
        "Esse eh apenas um artigo em teste para ver se o redux funciona"
    },
    {
      title: "Esse eh um test 2",
      description:
        "Esse eh apenas um artigo em teste para ver se o redux funciona 2"
    },
    {
      title: "Esse eh um test 3",
      description:
        "Esse eh apenas um artigo em teste para ver se o redux funciona 3"
    }
  ]
};

function reducer(state = initialState, action) {
  applyMiddleware(logger);
  switch (action.type) {
    case "SEARCH_ACTIVE":
      return {
        ...state,
        searchField: "NEW SEARCH"
      };

    case "SEARCH_CHANGE":
      return {
        ...state,
        searchField: action.payload,
        url:
          "http://newsapi.org/v2/top-headlines?q=" +
          action.payload +
          "&apiKey=fe8a84b676c84ea387ddba2872f9c0d6"
      };

    default:
      return state;
  }
}

const store = createStore(reducer, middleware);

export default store;
