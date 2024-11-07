import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import { store } from './redux/store.js';
import './index.css';
import router from './routers/Router.jsx';

createRoot(document.getElementById('root')).render(
   <Provider store={store}>
     <RouterProvider router={router} />
    </Provider>
)
