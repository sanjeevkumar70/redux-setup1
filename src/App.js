import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import { ProtectedaRoute } from './components/ProtectedaRoute';
import { ApiCall } from './components/FetchApi/ApiCall';
import ApiCall2 from './components/FetchApi/ApiCall2';
import ApiCall3 from './components/FetchApi/ApiCall3';
import Cart from './components/Cart';
import Wish from './components/Wish';
import Payment from './pages/Payment';
import Product from './pages/Product';
import ProductDetails from './pages/ProductDetails';
import { ProductCreate } from './pages/ProductCreate';
import ProductList from './pages/ProductList';


function App() {

  const temp = useSelector(state => state.productReducer.productData)
  const token = localStorage.getItem('token')

  // console.log(temp)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/product' element={<Product />} />

        {/* <Route path='/' element={<ApiCall3 />} /> */}
        <Route path='/cart' element={<Cart />} />
        <Route path='/wish' element={<Wish />} />
        <Route path='/about' element={
          <ProtectedaRoute>
            <About />
          </ProtectedaRoute>
        } />

        <Route path='/payment' element={
          <ProtectedaRoute>
            <Payment />
          </ProtectedaRoute>
        } />

        <Route path='/product/:slug' element={<ProductDetails/>} />
        <Route path='/product-create' element={<ProductCreate/>}/>
        <Route path='/productlist' element={<ProductList/>} />
      </Routes>


      {/* <Counter /> */}

      {/* {temp?.products?.map((item) => <h1>{item.title}</h1>)}

      <FetchData /> */}
    </>
  );
}

export default App;
