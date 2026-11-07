import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { beers } from '../../data/selectors';
import './Header.css';

const menuCategories = ['All', 'Kitchen', 'On tap', 'Drinks', 'Dessert'];

export default function Header({ menuCategory, menuSearch, onMenuCategoryChange, onMenuSearchChange }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const onMenuPage = location.pathname.replace(/\/+$/, '') === '/menu';
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <>
    <div className="announcement"><span>Brewed fresh in Hyderabad · {beers.length} craft beers on tap</span><Link to="/menu" state={{ category: 'On tap' }}>See what's pouring <span aria-hidden="true">→</span></Link></div>
    <header className={scrolled ? 'site-header is-scrolled' : 'site-header'}>
      <div className="header-main">
        <Link to="/" className="brand" onClick={close}><img className="brand-logo" src="/brand/wordmark-red.png" alt="OKTOBER — The Brewery" width="1686" height="830" /></Link>
        <button className="menu-toggle" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
        <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <NavLink to="/menu" onClick={close}>Menu</NavLink>
          <Link to="/menu" state={{ category: 'On tap' }} onClick={close}>On tap</Link>
          <NavLink to="/about" onClick={close}>Our story</NavLink>
          <NavLink to="/visit" onClick={close}>Visit</NavLink>
          <Link className="btn btn-red nav-cta" to="/visit" onClick={close}>Find us <span aria-hidden="true">→</span></Link>
        </nav>
      </div>
      {onMenuPage && <div className="menu-toolbar"><nav className="menu-category-nav" aria-label="Menu categories">{menuCategories.map((category) => <button key={category} type="button" className={menuCategory === category ? 'menu-category-link is-active' : 'menu-category-link'} aria-pressed={menuCategory === category} onClick={() => onMenuCategoryChange(category)}>{category}</button>)}</nav><form className="menu-search" role="search" onSubmit={(event) => event.preventDefault()}><label className="visually-hidden" htmlFor="menu-search-input">Search menu</label><input id="menu-search-input" type="search" value={menuSearch} onChange={(event) => onMenuSearchChange(event.target.value)} placeholder="Search dishes, beers, drinks…" /></form></div>}
    </header>
  </>;
}
