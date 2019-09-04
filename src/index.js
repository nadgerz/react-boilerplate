import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'

// import '@babel/polyfill'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import App from './App'
import DefaultErrorBoundary from './DefaultErrorBoundary'

import './styles.css'

ReactDOM.render(
  <StrictMode>
    <DefaultErrorBoundary>
      <App />
    </DefaultErrorBoundary>
  </StrictMode>,
  document.getElementById('app'),
)
