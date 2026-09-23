import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
import Menu from './components/Menu/menu';
import { Link } from 'react-router-dom';

function About() {
  return <main className="editorial-page"><p className="eyebrow">OUR STORY</p><h1>Good company.<br /><em>Made to be shared.</em></h1><p className="editorial-lede">OKTOBER brings together a love of craft, good food and the kind of evenings that turn into stories.</p><div className="story-panel"><div><p className="eyebrow">THE IDEA</p><h2>A local place to<br />make yourself at home.</h2></div><p>From the first pour to the last plate, we believe the best moments are shared. Come by with friends, settle in, and find your new favourite.</p></div></main>;
}

function Visit() {
  return <main className="editorial-page visit-page"><p className="eyebrow">COME ON IN</p><h1>Your table<br /><em>is waiting.</em></h1><p className="editorial-lede">Meet us in Hyderabad for a relaxed evening, something good to eat and a fresh pour.</p><div className="visit-card"><span className="visit-icon" aria-hidden="true">↗</span><div><p className="eyebrow">FIND US</p><h2>Jubilee Hills Road No. 10</h2><p>Hyderabad, India</p></div></div><Link className="button button-dark" to="/menu">Explore the menu <span aria-hidden="true">↗</span></Link></main>;
}

function App() {
  return <BrowserRouter><div className="site-shell"><Header /><Routes><Route path="/" element={<Home />} /><Route path="/home" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/menu" element={<Menu />} /><Route path="/visit" element={<Visit />} /><Route path="*" element={<Home />} /></Routes><Footer /></div></BrowserRouter>;
}

export default App;
