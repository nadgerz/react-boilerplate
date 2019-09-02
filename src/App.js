import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h2>Count: ${this.state.count}</h2>
        <button
          onClick={() => this.setState(state => ({ count: state.count }))}
        >
          Click Me!
        </button>
      </div>
    );
  }
}

export default App;
