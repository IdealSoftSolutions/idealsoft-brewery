import { useEffect, useRef } from 'react';
import BeerGlass, { beerColour } from './BeerGlass';

export const formatPrice = (price) => `₹${price.toLocaleString('en-IN')}`;
export const lowestPrice = (item) => Math.min(...item.prices.map((p) => p.price));

export default function MenuItemModal({ item, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (item && !dialog.open) dialog.showModal();
    if (!item && dialog.open) dialog.close();
  }, [item]);

  return <dialog ref={dialogRef} className="menu-modal" aria-labelledby="menu-modal-title" onClose={onClose} onClick={(event) => { if (event.target === dialogRef.current) onClose(); }}>
    {item?.image && <img className="menu-modal-photo" src={item.image} alt={item.name} width="350" height="437" />}
    {item && !item.image && item.style && <div className="menu-modal-beer" style={{ '--beer': beerColour(item.style) }}><BeerGlass style={item.style} /></div>}
    {item && <div className="menu-modal-body">
      <div className="menu-modal-header">
        <h2 id="menu-modal-title">{item.name}{item.style && <span className="menu-list-style">{item.style}</span>}</h2>
        <button type="button" className="menu-modal-close" aria-label="Close" onClick={onClose}>×</button>
      </div>
      {item.description && <p className="menu-list-description">{item.description}</p>}
      {item.abv && <dl className="menu-list-specs"><div><dt>ABV</dt><dd>{item.abv}%</dd></div><div><dt>IBU</dt><dd>{item.ibu}</dd></div><div><dt>Taste</dt><dd>{item.taste}</dd></div></dl>}
      <p className="eyebrow menu-modal-eyebrow">{item.prices.length > 1 ? 'SERVING SIZE' : 'PRICE'}</p>
      <ul className="menu-modal-sizes">
        {item.prices.map((size) => <li key={size.label}><span>{size.label || 'Per serve'}</span><span>{formatPrice(size.price)}</span></li>)}
      </ul>
    </div>}
  </dialog>;
}
