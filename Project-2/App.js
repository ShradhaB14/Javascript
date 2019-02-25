import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route path="/Home.js" component={Home} />
          <Route path="/About.js" component={About} />
          <Route path="/Contact.js" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
