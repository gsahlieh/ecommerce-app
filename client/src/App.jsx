import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import ProductListPage from "./pages/ProductListPage";
import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";
import SuccessPage from "./pages/SuccessPage";

import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(state => state.user.currentUser);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/" element={<ProductListPage />} />
        <Route path="/products/:category" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/login" element={
          user ? <Navigate to='/' /> : 
          <LoginPage />} />
        <Route path="/register" element={
          user ? <Home /> : 
          <RegisterPage />
          } />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/success" element={<SuccessPage />} />


      </Routes>
    </div>
  );
}

export default App;
