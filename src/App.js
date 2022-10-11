import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Home from './components/Home';
import ProductDetails from './components/product/ProductDetails';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container container-fluid">
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search/:keyword' element={<Home />} />

            <Route path='/product/:id' element={<ProductDetails />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
