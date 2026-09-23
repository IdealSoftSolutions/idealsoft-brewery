import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="site-header"><Link to="/" className="brand" onClick={close} aria-label="OKTOBER Brewery home"><span className="brand-mark" aria-hidden="true">O</span><span className="brand-name">OKTOBER<span>BREWERY</span></span></Link><button className="menu-toggle" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button><nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation"><NavLink to="/" end onClick={close}>Home</NavLink><NavLink to="/about" onClick={close}>Our story</NavLink><NavLink to="/menu" onClick={close}>Menu</NavLink><NavLink to="/visit" onClick={close}>Visit</NavLink><Link className="nav-cta" to="/visit" onClick={close}>Find us <span aria-hidden="true">↗</span></Link></nav></header>;
}
