import { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
import Menu from './components/Menu/menu';

function About() {
  return <main>
    <section className="page-hero"><p className="eyebrow eyebrow-light">Our story</p><h1>Good company.<br /><span>Made to be shared.</span></h1><p>OKTOBER brings together a love of craft, good food and the kind of evenings that turn into stories.</p></section>
    <div className="editorial-page"><div className="story-panel"><div><p className="eyebrow">The idea</p><h2>A local place to make yourself at home.</h2></div><p>From the first pour to the last plate, we believe the best moments are shared. Come by with friends, settle in, and find your new favourite.</p></div></div>
  </main>;
}

function Visit() {
  return <main>
    <section className="page-hero"><p className="eyebrow eyebrow-light">Come on in</p><h1>Your table<br /><span>is waiting.</span></h1><p>Meet us in Hyderabad for a relaxed evening, something good to eat and a fresh pour.</p></section>
    <div className="editorial-page"><div className="visit-card"><span className="visit-icon" aria-hidden="true">↗</span><div><p className="eyebrow">Find us</p><h2>Jubilee Hills Road No. 10</h2><p>Hyderabad, India</p></div></div><Link className="btn btn-red" to="/menu">Explore the menu <span aria-hidden="true">→</span></Link></div>
  </main>;
}

function AppContent() {
  const [menuCategory, setMenuCategory] = useState('All');
  const [menuSearch, setMenuSearch] = useState('');
  const location = useLocation();

  // Every navigation resets the menu; links can preselect a category via router state.
  useEffect(() => {
    setMenuCategory(location.state?.category || 'All');
    setMenuSearch('');
    window.scrollTo(0, 0);
  }, [location.key, location.state]);

  return <div className="site-shell"><Header menuCategory={menuCategory} menuSearch={menuSearch} onMenuCategoryChange={setMenuCategory} onMenuSearchChange={setMenuSearch} /><Routes><Route path="/" element={<Home />} /><Route path="/home" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/menu" element={<Menu activeCategory={menuCategory} searchValue={menuSearch} />} /><Route path="/visit" element={<Visit />} /><Route path="*" element={<Home />} /></Routes><Footer /></div>;
}

function App() {
  return <BrowserRouter><AppContent /></BrowserRouter>;
}

export default App;
