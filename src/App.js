import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {

  const temp = useSelector(state => state.productReducer.productData)

  console.log(temp)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>


      {/* <Counter /> */}

      {/* {temp?.products?.map((item) => <h1>{item.title}</h1>)}

      <FetchData /> */}
    </>
  );
}

export default App;
