import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // ✅ import BrowserRouter
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter> {/* ✅ Wrap App in BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>
)
