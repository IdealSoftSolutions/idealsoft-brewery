import { useMemo, useState } from 'react';
import { sections, totalItems } from '../../data/selectors';
import BeerGlass, { beerColour } from './BeerGlass';
import MenuItemModal, { formatPrice } from './MenuItemModal';

function Price({ item, onView }) {
  const { prices } = item;
  if (prices.length > 2) {
    return <>
      <p className="menu-list-price"><span className="menu-list-label">Starts at</span>{formatPrice(Math.min(...prices.map((p) => p.price)))}</p>
      <button type="button" className="menu-list-view" onClick={onView}>View<span className="visually-hidden"> {item.name} serving sizes</span></button>
    </>;
  }
  return <p className="menu-list-price">{prices.map((p) => <span className="menu-list-serving" key={p.label}>{p.label && <span className="menu-list-label">{p.label}</span>}{formatPrice(p.price)}</span>)}</p>;
}

export default function Menu({ activeCategory, searchValue }) {
  const [selected, setSelected] = useState(null);

  const visibleSections = useMemo(() => {
    const query = searchValue.trim().toLowerCase();
    return sections
      .filter((section) => activeCategory === 'All' || section.category === activeCategory)
      .map((section) => ({
        ...section,
        items: query ? section.items.filter((item) => [section.title, section.category, item.name, item.style, item.description, item.taste].join(' ').toLowerCase().includes(query)) : section.items,
      }))
      .filter((section) => section.items.length > 0);
  }, [activeCategory, searchValue]);

  return <main>
    <section className="page-hero"><p className="eyebrow eyebrow-light">The menu · {totalItems} items</p><h1>Good things<br /><span>to gather around.</span></h1><p>From the kitchen, the bar and the tap. Find a new favourite and make it a reason to stay.</p></section>
    <div className="menu-page">
    <p className="menu-note">Prices in ₹. Items and availability may change.</p>
    {visibleSections.map((section) => <section className="menu-list" key={section.id} aria-labelledby={`${section.id}-title`}>
      <p className="eyebrow">{section.category.toUpperCase()}</p>
      <h2 id={`${section.id}-title`}>{section.title}</h2>
      <ul>
        {section.items.map((item) => <li className={`menu-list-item${item.image || item.style ? ' has-photo' : ''}`} key={item.name}>
          {(item.image || item.style) && <button type="button" className={item.image ? 'menu-list-photo' : 'menu-list-photo is-beer'} style={item.image ? undefined : { '--beer': beerColour(item.style) }} onClick={() => setSelected(item)}>
            {item.image ? <img src={item.image} alt="" loading="lazy" decoding="async" width="350" height="437" /> : <BeerGlass style={item.style} />}
            <span className="visually-hidden">View {item.name}</span>
          </button>}
          <div className="menu-list-info">
            <h3>{item.name}{item.style && <span className="menu-list-style">{item.style}</span>}</h3>
            {item.description && <p className="menu-list-description">{item.description}</p>}
            {item.abv && <dl className="menu-list-specs"><div><dt>ABV</dt><dd>{item.abv}%</dd></div><div><dt>IBU</dt><dd>{item.ibu}</dd></div><div><dt>Taste</dt><dd>{item.taste}</dd></div></dl>}
          </div>
          <div className="menu-list-action"><Price item={item} onView={() => setSelected(item)} /></div>
        </li>)}
      </ul>
    </section>)}
    {visibleSections.length === 0 && <p className="menu-empty" role="status">No menu items match “{searchValue}”. Try another search.</p>}
    </div>
    <MenuItemModal item={selected} onClose={() => setSelected(null)} />
  </main>;
}
