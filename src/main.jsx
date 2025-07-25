import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/Styles/index.css'
import App from './App.jsx'
import LoginForm from './pages/LoginForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginForm />
  </StrictMode>,
)
