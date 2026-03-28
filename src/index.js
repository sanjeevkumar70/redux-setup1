import "swiper/css";
import './index.css';
import App from './App';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

