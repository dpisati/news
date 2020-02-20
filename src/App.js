import React from "react";
import "./App.css";
import Navbar from "./components/Layout/NavBar";
import Usebar from "./components/Layout/Usebar";
import News from "./components/News/News";
import Footer from "./components/Layout/Footer";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Usebar />
        <News />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
