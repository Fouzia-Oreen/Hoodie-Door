import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './store/store.js'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RouterProvider store={store}>
      <App />
    </RouterProvider>
  </BrowserRouter>,
)
