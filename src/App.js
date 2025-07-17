import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './pages/productList';
import ProductDetail from './pages/ProductDetail';
import Favourites from './pages/Favourites';
import Header from './components/header';
function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
