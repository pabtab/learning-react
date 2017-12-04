import React, { Component } from 'react';
import './App.css';
import { Header, Body } from "./Routing";

class App extends Component {
  render() {

    return (
    <div>
      <Header></Header>
      <Body></Body>
    </div>
    );
  }
}

export default App;
