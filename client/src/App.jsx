
import { Route, Routes } from 'react-router-dom';
import AuthLayout from './components/auth/AuthLayout'
import AuthLogin from './pages/auth/Login';
import AuthRegister from './pages/auth/Register';
import AdminLayout from './components/admin-view/AdminLayout'
import AdminDashboard from './pages/admin-view/Dashboard';
import AdminProducts from './pages/admin-view/Products';
import AdminOrders from './pages/admin-view/Orders';
import AdminFeatures from './pages/admin-view/Features';
import ShoppingLayout from './components/shopping-view/ShoppingLayout';
import ShoppingHome from './pages/shopping-view/Home';
import ShoppingListing from './pages/shopping-view/Listing';
import ShoppingCheckout from './pages/shopping-view/Checkout';
import ShoppingAccount from './pages/shopping-view/Account';


import NotFound from './pages/not-found/NotFound';


function App() {
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
     <Routes>
      {/* parent layout */}
      <Route path="/auth" element={<AuthLayout />}>
      {/* children layout - auth route */}
      <Route path="login" element={<AuthLogin />} />
      <Route path="register" element={<AuthRegister />} />
      </Route>
      {/* admin - view */}
      <Route path='/admin' element={<AdminLayout />}>
      <Route path="dashboard" element={<AdminDashboard />} />
      <Route path="features" element={<AdminFeatures />} />
      <Route path="order" element={<AdminOrders />} />
      <Route path="products" element={<AdminProducts />} />
      </Route>
      {/* shopping - view */}
      <Route path='/shop' element={<ShoppingLayout />} >
      <Route path='home'  element={<ShoppingHome />}/>
      <Route path='account'  element={<ShoppingAccount />}/>
      <Route path='checkout'  element={<ShoppingCheckout />}/>
      <Route path='listing'  element={<ShoppingListing />}/>
      </Route>
      {/* not found */}
      <Route path="*" element={<NotFound />} />    
     </Routes>
    </div>
  )
}

export default App
