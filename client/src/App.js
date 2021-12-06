import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddProduct from './screens/AddProduct.jsx';
import ShowProducts from './screens/ShowProducts.jsx';
import EditProduct from './screens/EditProduct.jsx';
import ProductDetail from './screens/ProductDetail.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact={true} path='/addProduct' element={<AddProduct />} />
        <Route exact={true} path='/products' element={<ShowProducts />} />
        <Route exact={true} path='/product/edit/:id' element={<EditProduct />} />
        <Route exact={true} path='/product/:id' element={<ProductDetail />} />
      </Routes>
    </Router>

  );
}

export default App;
