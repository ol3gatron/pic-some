import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { PicsomeContextProvider } from './PicsomeContext'

import { BrowserRouter as Router } from 'react-router-dom'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PicsomeContextProvider>
    <Router>
      <App />
    </Router>
  </PicsomeContextProvider>
)
