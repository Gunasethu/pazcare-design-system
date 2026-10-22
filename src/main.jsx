import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../design-system/tokens.css'
import './index.css'
import App from '../products/_skill-test/App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
