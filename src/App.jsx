import React, { Component } from 'react';
import OldLifeCycle from './components/OldLifeCycle';

export default class App extends Component {
  state = {
    n: 1
  }
  render() {
    return (
      <>
        <button onClick={() => {
          this.setState({
            n: this.state.n + 1
          })
        }}>n + 1</button>
        <OldLifeCycle n={this.state.n} />
      </>


    )
  }
}
