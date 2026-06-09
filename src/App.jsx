import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './component/pages/Home';
import Products from './component/pages/Products';
import Cart from './component/pages/Cart';
import CustomBouquet from './component/pages/CustomBouquet';
import Layout from './component/Layout';


const App =()=>{

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout><Home/></Layout>} />
        <Route path='/products' element={<Layout><Products/></Layout>} />
        <Route path='/cart' element={<Layout><Cart/></Layout>} />
        <Route path='/custom-bouquet' element={<Layout><CustomBouquet/></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
