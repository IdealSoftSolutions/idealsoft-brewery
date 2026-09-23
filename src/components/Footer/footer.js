import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return <footer className="site-footer"><div className="footer-top"><Link to="/" className="brand brand-footer"><img className="brand-logo" src="/logo-oktober-cream.svg" alt="OKTOBER — The Brewery" /></Link><p>Good times, poured fresh.<br />Jubilee Hills Road No. 10<br />Hyderabad, India</p><nav aria-label="Footer navigation"><Link to="/about">Our story</Link><Link to="/menu">Menu</Link><Link to="/visit">Visit</Link></nav></div><div className="footer-bottom"><span>© {new Date().getFullYear()} OKTOBER Brewery</span><span>Please enjoy responsibly. Alcohol served only to guests of legal drinking age.</span></div></footer>;
}
