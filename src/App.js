import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Menu from './components/Menu/menu';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Menu />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
