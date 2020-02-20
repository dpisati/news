import { createStore } from "redux";

function reducer() {
  return [
    {
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
    }
  ];
}

const store = createStore(reducer);

export default store;
