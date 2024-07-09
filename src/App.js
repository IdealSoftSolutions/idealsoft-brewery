import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Menu from './components/Menu/menu';
import Home from './components/Home/home';
function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/menu' element={<Menu />} />
          <Route path='' element={<Home />} />
          <Route path='/home' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
