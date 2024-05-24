import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router-dom";
import './App.scss'
import HomePage from './Pages/HomePage';
import AddProductPage from './Pages/AddProductPage';
import ProductDetailPage from './Pages/ProductDetailPage';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/add-product" element={<AddProductPage/>} />
          <Route path="/details" element={<ProductDetailPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      <Footer/>
    </>
  )
}

export default App
