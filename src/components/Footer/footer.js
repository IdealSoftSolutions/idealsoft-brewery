import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return <footer className="site-footer"><div className="footer-top"><Link to="/" className="brand brand-footer"><span className="brand-mark" aria-hidden="true">I</span><span className="brand-name">IDEALSOFT<span>BREWERY</span></span></Link><p>Good times, poured fresh.<br />Hyderabad, India</p><nav aria-label="Footer navigation"><Link to="/about">Our story</Link><Link to="/menu">Menu</Link><Link to="/visit">Visit</Link></nav></div><div className="footer-bottom"><span>© {new Date().getFullYear()} IdealSoft Brewery</span><span>Please enjoy responsibly. Alcohol served only to guests of legal drinking age.</span></div></footer>;
}
