import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import { useSelector } from 'react-redux';

function App() {

  const temp = useSelector(state => state.productReducer.productData)

  console.log(temp)

  return (
    <>
      <Counter />

      {temp?.products?.map((item) => <h1>{item.title}</h1>)}

      <FetchData />
    </>
  );
}

export default App;
