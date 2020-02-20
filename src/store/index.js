import { createStore } from "redux";

const initialState = {
  searchField: "",
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
  console.log(action);
  return state;
}

const store = createStore(reducer);

export default store;
