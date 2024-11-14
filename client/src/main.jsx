import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import App from './App.jsx';
import './index.css';
import ShopContextProvider from './context/ShopContext.jsx';


createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   <ShopContextProvider>
    <App />
   </ShopContextProvider>
   </BrowserRouter>
)
