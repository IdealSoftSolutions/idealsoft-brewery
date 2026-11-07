import BeerGlass, { beerColour } from './BeerGlass';
import { formatPrice, lowestPrice } from './MenuItemModal';

const priceText = (item) => (item.prices.length > 1 ? `From ${formatPrice(lowestPrice(item))}` : formatPrice(item.prices[0].price));

export function BeerCard({ item, onView }) {
  return <article className="beer-card" style={{ '--beer': beerColour(item.style) }}>
    <div className="beer-card-art"><BeerGlass style={item.style} /></div>
    <div className="beer-card-body">
      <p className="chip">{item.style}</p>
      <h3>{item.name}</h3>
      {item.abv && <p className="beer-card-specs"><span><b>{item.abv}%</b> ABV</span><span><b>{item.ibu}</b> IBU</span></p>}
      {item.taste && <p className="beer-card-taste">{item.taste}</p>}
      <div className="beer-card-footer">
        <span className="price">{priceText(item)}</span>
        <button type="button" className="btn btn-small btn-red" onClick={onView}>View<span className="visually-hidden"> {item.name}</span></button>
      </div>
    </div>
  </article>;
}

export function DishCard({ item, tag, onView }) {
  return <button type="button" className="dish-card" onClick={onView}>
    <span className="dish-card-photo"><img src={item.image} alt="" loading="lazy" decoding="async" width="350" height="437" /></span>
    <span className="dish-card-tag">{tag}</span>
    <span className="dish-card-name">{item.name}</span>
    <span className="price">{priceText(item)}</span>
  </button>;
}
