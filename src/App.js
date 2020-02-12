import React from "react";
import "./App.css";
import Navbar from "./components/Layout/NavBar";
import Usebar from "./components/Layout/Usebar";
import News from "./components/News/News";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Usebar />
      <News />
      <Footer />
    </div>
  );
}

export default App;
