import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.css';

const menuCategories = ['All', 'Kitchen', 'On tap', 'Drinks', 'Dessert'];

export default function Header({ menuCategory, menuSearch, onMenuCategoryChange, onMenuSearchChange, onOpenMenu }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const onMenuPage = location.pathname === '/menu';
  const close = () => setOpen(false);

  return <header className="site-header">
    <div className="header-main">
      <Link to="/" className="brand" onClick={close}><img className="brand-logo" src="/logo-oktober.svg" alt="OKTOBER — The Brewery" /></Link>
      <button className="menu-toggle" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
      <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
        <NavLink to="/" end onClick={close}>Home</NavLink>
        <NavLink to="/about" onClick={close}>Our story</NavLink>
        <NavLink to="/menu" onClick={() => { onOpenMenu(); close(); }}>Menu</NavLink>
        <NavLink to="/visit" onClick={close}>Visit</NavLink>
        <Link className="nav-cta" to="/visit" onClick={close}>Find us <span aria-hidden="true">↗</span></Link>
      </nav>
    </div>
    {onMenuPage && <div className="menu-toolbar"><nav className="menu-category-nav" aria-label="Menu categories">{menuCategories.map((category) => <button key={category} type="button" className={menuCategory === category ? 'menu-category-link is-active' : 'menu-category-link'} aria-pressed={menuCategory === category} onClick={() => onMenuCategoryChange(category)}>{category}</button>)}</nav><form className="menu-search" role="search" onSubmit={(event) => event.preventDefault()}><label className="visually-hidden" htmlFor="menu-search-input">Search menu</label><input id="menu-search-input" type="search" value={menuSearch} onChange={(event) => onMenuSearchChange(event.target.value)} placeholder="Search menu" /></form></div>}
  </header>;
}
