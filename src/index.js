import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'

// import '@babel/polyfill'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import App from './App'

import './styles.css'

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('app'),
)
