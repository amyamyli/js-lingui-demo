import React, { Component } from 'react';
import { Trans, DateFormat } from "@lingui/react";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const curDate = new Date()
    return (
      <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">
              <Trans>Welcome to React</Trans>
            </h1>
          </header>
          <p className="App-intro">
            <h3>JsLingui</h3>
            <a href="https://github.com/lingui/js-lingui"><Trans>Github</Trans></a>
            <a href="https://lingui.github.io/js-lingui/tutorials/react.html"><Trans>Docs</Trans></a>
          </p>
          <p className="App-intro">
            <Trans>Today is <DateFormat value={curDate} />.</Trans>
          </p>
      </div>
    );
  }
}

export default App;
