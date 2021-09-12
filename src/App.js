import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar.js";
import FetchData from "./components/FetchData";

class App extends Component {
  state = {
    visible: true,
  };

  render() {
    return (
      <div className="App">
        <div>
          <Navbar />
        </div>
        <FetchData />
      </div>
    );
  }
}

export default App;
