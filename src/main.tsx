import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import { ApiProvider } from './components/provider/ApiProvider.tsx'
import { PaintigsContextProvider } from './components/provider/paintingsContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApiProvider>
      <PaintigsContextProvider>
        <App />
      </PaintigsContextProvider>
    </ApiProvider>
  </StrictMode>,
)
