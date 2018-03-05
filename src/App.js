import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React + Redux</h1>
        </header>
        <div className="App-intro">
          <h3>
            Create a 'checklist' app that allows the following operations:
          </h3>
          <ul>
            <li>Add and remove entries to the list</li>
            <li>Check and uncheck an entry</li>
            <li>Move items up and down in the list</li>
            <li>Check all items at once</li>
          </ul>
          <h3>Testing</h3>
          <p>
            Write some tests using the testing framework of your choice to test the logic of the app.
          </p>
          <p>Bonus: use Jest to test one of your react components</p>
          <br/><br/>
          <span>Don't worry about the style/design of the UI</span>

        </div>
      </div>
    );
  }
}

export default App;
