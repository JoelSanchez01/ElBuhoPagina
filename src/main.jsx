import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Start from "./pages/Start"
import Abogados from "./pages/Abogados"
import Tramites from "./pages/Tramites"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Tramites />
  </React.StrictMode>
)
