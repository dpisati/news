import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";

const middleware = applyMiddleware(thunk, logger);

const initialState = {
  fetching: false,
  fetched: false,
  error: null,
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
    case "SEARCH_ACTIVE": {
      return { ...state, searchField: "NEW SEARCH" };
      break;
    }
    case "SEARCH_CHANGE": {
      return {
        ...state,
        searchField: action.payload,
        url:
          "http://newsapi.org/v2/top-headlines?q=" +
          action.payload +
          "&apiKey=fe8a84b676c84ea387ddba2872f9c0d6"
      };
      break;
    }
    case "SEARCH": {
      return {
        ...state
      };
      break;
    }
    case "FETCH_API_START": {
      return { ...state, fetching: true };
      break;
    }
    case "FECH_DATA_ERROR": {
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
      break;
    }
    case "RECEIVE_NEWS": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        news: action.payload
      };
      break;
    }
    default:
      return state;
  }
}

const store = createStore(reducer, middleware);

export function fecthData() {
  return store.dispatch(dispatch => {
    dispatch({ type: "FETCH_API_START" });
    axios
      .get(store.getState().url)
      .then(res => {
        dispatch({ type: "RECEIVE_NEWS", payload: res.data.articles });
      })
      .catch(err => {
        dispatch({ type: "FECH_DATA_ERROR", payload: err });
      });
  });
}

store.dispatch(dispatch => {
  dispatch({ type: "FETCH_API_START" });
  axios
    .get(store.getState().url)
    .then(res => {
      dispatch({ type: "RECEIVE_NEWS", payload: res.data.articles });
    })
    .catch(err => {
      dispatch({ type: "FECH_DATA_ERROR", payload: err });
    });
});

export default store;
