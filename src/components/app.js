import React, { Component } from 'react';
import moment from "moment";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Cooper Tingey Portfolio</h1>
        <div>{moment().format('MMM Do YYY, h:mm:ss a')}</div>
      </div>
    );
  }
}
