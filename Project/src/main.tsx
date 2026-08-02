import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Css and Js
// import './assets/css/app.css'
// import './assets/css/app-dark.css'
// import './assets/css/iconly.css'
import './assets/compiled/css/app.css'
import './assets/compiled/css/app-dark.css'
import './assets/compiled/css/iconly.css'


import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
