import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {ProductProvider} from './components/ProductContext.jsx';


createRoot(document.getElementById('root')).render(
  <ProductProvider>
  <StrictMode>
    <App />
  </StrictMode>,
  </ProductProvider>
)
