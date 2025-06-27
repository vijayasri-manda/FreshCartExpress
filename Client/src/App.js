import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Import Redirect
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/Login';
import Registration from './components/Registration';
import ProtectedRoute from './components/ProtectedRoute';
import Products from './components/products';
import Checkout from './components/Checkout';
import MyOrders from './components/MyOrders';
import History from './components/History';
import MyCart from './components/MyCart';
import Users from './admin_components/Users';
import Orders from './admin_components/Orders';
import AddCategory from './admin_components/AddCategory';
import AddProduct from './admin_components/AddProduct';
import AdminProducts from './admin_components/Products';
import AdminProductItem from './admin_components/ProductItem';
import UpdateProduct from './admin_components/Update';
import AdminProtectedRoute from './admin_components/AdminProtectedRoute';
import Dashboard from './admin_components/Dashoard';
import AdminNavbar from './admin_components/AdminNavbar';
import AdminLogin from './admin_components/AdminLogin';
import AdminSignup from './admin_components/AdminSignup';
import SellerLogin from './admin_components/SellerLogin';
import SellerDashboard from './admin_components/SellerDashboard';
import SellerRegister from './admin_components/SellerRegister';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          {/* User routes */}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Registration />} />
          <Route path="/" element={<Home/>} />
          <Route path='/shopping' element={<ProtectedRoute Component={Products}/>}/>
          <Route path='/order-details/:id' element={<ProtectedRoute Component={Checkout}/>}/>
          <Route path='/my-orders' element={<ProtectedRoute Component={MyOrders}/>}/>
          <Route path='/my-history' element={<ProtectedRoute Component={History}/>}/>
          <Route path='/my-cart' element={<ProtectedRoute Component={MyCart}/>}/>

          {/* Admin routes */}
          <Route path='/admin/login' element={<AdminLogin />} />
          <Route path='/admin/signup' element={<AdminSignup />} />
          <Route path='/admin/navbar' element={<AdminNavbar/>}/>
          <Route path='/admin/dashboard' element={<Dashboard/>}/>
          <Route path='/admin/users' element={<Users/>}/>
          <Route path='/admin/orders' element={<Orders/>}/>
          <Route path='/admin/add-category' element={<AddCategory/>}/>
          <Route path='/admin/all-products' element={<AdminProducts/>}/>
          <Route path='/admin/product/:id' element={<AdminProductItem/>}/>
          <Route path='/admin/add-product' element={<AddProduct/>}/>
          <Route path='/admin/product-update/:id' element={<UpdateProduct/>}/>

          {/* <Route path='/admin/users' element={<AdminProtectedRoute Component={Users}/>}/>
          <Route path='/admin/orders' element={<AdminProtectedRoute Component={Orders}/>}/>
          <Route path='/admin/add-category' element={<AdminProtectedRoute Component={AddCategory}/>}/>
          <Route path='/admin/all-products' element={<AdminProtectedRoute Component={AdminProducts}/>}/>
          <Route path='/admin/product/:id' element={<AdminProtectedRoute Component={AdminProductItem}/>}/>
          <Route path='/admin/add-product' element={<AdminProtectedRoute Component={AddProduct}/>}/>
          <Route path='/admin/product-update/:id' element={<AdminProtectedRoute Component={UpdateProduct}/>}/>
           */}
            <Route path='/seller/login' element={<SellerLogin />} />
          <Route path='/seller-dashboard' element={<SellerDashboard />} />
          <Route path='/seller-register' element={<SellerRegister />} />

          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to='/not-found' element={<NotFound />} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


