import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'

// import '@babel/polyfill'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import App from './App'
import DefaultErrorBoundary from './DefaultErrorBoundary'

import './styles.css'

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

ReactDOM.render(
  <StrictMode>
    <DefaultErrorBoundary>
      <App />
    </DefaultErrorBoundary>
  </StrictMode>,
  document.getElementById('app'),
)
