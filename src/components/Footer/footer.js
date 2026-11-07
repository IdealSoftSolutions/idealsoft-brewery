import { Link } from 'react-router-dom';
import './Footer.css';

const menuLinks = ['Kitchen', 'On tap', 'Drinks', 'Dessert'];

export default function Footer() {
  return <footer className="site-footer">
    <div className="footer-top">
      <div className="footer-brand">
        <Link to="/" className="brand"><img className="footer-logo" src="/brand/wordmark-cream.png" alt="OKTOBER — The Brewery" width="1686" height="830" loading="lazy" /></Link>
        <p>Good times, poured fresh.</p>
      </div>
      <nav aria-label="Footer menu"><h2>Menu</h2>{menuLinks.map((category) => <Link key={category} to="/menu" state={{ category }}>{category}</Link>)}</nav>
      <nav aria-label="Footer navigation"><h2>Explore</h2><Link to="/">Home</Link><Link to="/about">Our story</Link><Link to="/visit">Visit</Link></nav>
      <div><h2>Find us</h2><p>Jubilee Hills Road No. 10<br />Hyderabad, India</p><Link className="btn btn-gold btn-small" to="/visit">Plan your visit</Link></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} OKTOBER Brewery</span><span>Please enjoy responsibly. Alcohol served only to guests of legal drinking age.</span></div>
  </footer>;
}
