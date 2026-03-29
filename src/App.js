import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Signup/Register';
import { ProtectedaRoute } from './components/ProtectedRoute/ProtectedaRoute';
import { ApiCall } from './components/FetchApi/ApiCall';
import ApiCall2 from './components/FetchApi/ApiCall2';
import ApiCall3 from './components/FetchApi/ApiCall3';
import Cart from './pages/Cart/Cart';
import Payment from './pages/Payment/Payment';
import Product from './pages/Product';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import ProductList from './pages/ProductList/ProductList';
import Wishlist from './pages/Wishlist/Wishlist';
import ProductListcopy from './pages/ProductList/ProductListcopy';
import HomeProductDetails from './pages/HomeProductDetails/HomeProductDetails';


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/product' element={<Product />} />

        <Route path='/cart' element={
          <ProtectedaRoute>
            <Cart />
          </ProtectedaRoute>
        } />

        <Route path='/wishlist' element={
          <ProtectedaRoute>
            <Wishlist />
          </ProtectedaRoute>
        } />

        <Route path='/payment' element={
          <ProtectedaRoute>
            <Payment />
          </ProtectedaRoute>
        } />

        <Route path='/product/:slug' element={<ProductDetails />} />
        <Route path='/product/productlist' element={<ProductListcopy />} />
        <Route path='/item/:slug' element={<HomeProductDetails/>}/>
      </Routes>

    </>
  );
}

export default App;
