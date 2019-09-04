import React, { Component, Suspense } from 'react'
import { hot } from 'react-hot-loader'

const Warning = React.lazy(() => import('./Warning'))

class App extends Component {
  state = {
    count: 0,
  }

  increment = () => {
    this.setState(state => ({ count: state.count + 1 }))
  }

  decrement = () => {
    this.setState(state => ({ count: state.count - 1 }))
  }

  render() {
    // throw new Error('Boom!')

    const { count } = this.state

    return (
      <div>
        <h1>Hello World!</h1>

        <h3 className={count > 10 ? 'warning' : null}>Count: {count}</h3>

        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>

        {count > 10 ? (
          <Suspense fallback={null}>
            <Warning />
          </Suspense>
        ) : null}
      </div>
    )
  }
}

// const hotFunction = hot(module)
// export default hotFunction(App);

export default hot(module)(App)
