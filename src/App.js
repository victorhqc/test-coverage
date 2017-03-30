import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';

const someHelper = testData => testData;

class App extends Component {
  constructor(props) {
    super(props);

    this.doClick = this.doClick.bind(this);
  }

  doClick() {
    const {
      onClick,
      test,
    } = this.props;

    onClick(test);
  }

  render() {
    const {
      test,
    } = this.props;

    return (
      <div className="App" onClick={this.doClick}>
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
  onClick: () => {},
};

App.propTypes = {
  test: PropTypes.string,
  onClick: PropTypes.func,
};

export default App;
