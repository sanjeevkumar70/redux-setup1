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
import { ProtectedaRoute } from './components/ProtectedaRoute';
import { ApiCall } from './components/FetchApi/ApiCall';
import ApiCall2 from './components/FetchApi/ApiCall2';
import ApiCall3 from './components/FetchApi/ApiCall3';
import Cart from './components/Cart';

function App() {

  const temp = useSelector(state => state.productReducer.productData)
  const token = localStorage.getItem('token')

  console.log(temp)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/login' element={<Login />} /> */}
        {/* <Route path='/' element={<ApiCall3 />} /> */}
        <Route path='/cart' element={<Cart />} />

        <Route path='/about' element={
          <ProtectedaRoute>
            <About />
          </ProtectedaRoute>
        } />
      </Routes>


      {/* <Counter /> */}

      {/* {temp?.products?.map((item) => <h1>{item.title}</h1>)}

      <FetchData /> */}
    </>
  );
}

export default App;
