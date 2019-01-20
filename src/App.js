// @flow
/* eslint-disable */
import React, {Component} from 'react';
import './App.css';
import {connect} from "react-redux";

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p> I Learnt Today {} </p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(App);
