import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { WalletProvider } from './WalletContext.jsx'
import { FreemiumProvider } from './FreemiumContext.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <WalletProvider>
        <FreemiumProvider>
          <App />
        </FreemiumProvider>
      </WalletProvider>
    </HashRouter>
  </React.StrictMode>,
)
