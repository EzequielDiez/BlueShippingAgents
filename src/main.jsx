import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './styles/globals.css'
import { BrowserRouter } from 'react-router-dom'
import './i18n' // Importar configuración de i18n

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/BlueShippingAgents/">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
