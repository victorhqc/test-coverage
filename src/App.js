import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';

const someHelper = testData => testData;

class App extends Component {
  render() {
    const {
      test,
    } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro test-prop">
          {someHelper(test)}
        </p>
      </div>
    );
  }
}

App.defaultProps = {
  test: 'foo bar',
};

App.propTypes = {
  test: PropTypes.string,
};

export default App;
