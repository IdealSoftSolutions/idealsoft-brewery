import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Menu from './components/Menu/menu';
import Home from './components/Home/home';
import React, { useState } from 'react';
function App() {
  const [searchvalue, setSearchValue] = useState('');
  const handleDataFromHeader = (data) => {
    setSearchValue(data)
  };
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header sendSearchValue={handleDataFromHeader} />
        <Routes>
          <Route path='/menu' element={<Menu searchValue={searchvalue} />} />
          <Route path='' element={<Home />} />
          <Route path='/home' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
