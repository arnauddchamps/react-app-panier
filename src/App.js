import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Article from './Components/Article';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Article name="Zizou" price="4353453" imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Zinedine_Zidane_by_Tasnim_03.jpg/280px-Zinedine_Zidane_by_Tasnim_03.jpg"/>
      </div>
    );
  }
}

export default App;
