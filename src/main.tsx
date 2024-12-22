import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ComingSoonPage from './pages/ComingSoonPage'
import './index.css';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ComingSoonPage />
  </StrictMode>,
)
