import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import IncDec from './inc&dec.jsx'
import BgChange from './BgChange.jsx'
import PasswordGenerator from './PasswordGenerator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <BgChange/> */}
    
    
   
  </StrictMode>,
)
