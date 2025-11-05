import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import { BrowserRouter , Routes,Route } from 'react-router-dom'
import '@mantine/core/styles.css'
import App from './App.tsx'
import Header from './Header.tsx'
import Tech from './Tech.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' index element={<App />} />
         <Route path='/header' index element={<Header />} />
          <Route path='/tech' index element={<Tech />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>,
)