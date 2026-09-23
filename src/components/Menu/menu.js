import { useMemo } from 'react';
import chicken from '../Assets/chickentikka.jpg';
import bbq from '../Assets/smokedBBQ.jpg';
import tandoori from '../Assets/tandoorichicken.jpg';
import tiramisu from '../Assets/food/tiramisu.webp';
import cheesecake from '../Assets/food/cheesecake.webp';
import brownie from '../Assets/food/brownie.jpg';
import beer from '../Assets/food/beer.avif';
import wine from '../Assets/food/wine.webp';
import mojito from '../Assets/food/mojito.jpg';
import lemonade from '../Assets/food/lemonade.jpg';

const items = [
  { name: 'Chicken Tikka', category: 'Kitchen', image: chicken },
  { name: 'Smoked BBQ', category: 'Kitchen', image: bbq },
  { name: 'Tandoori Chicken', category: 'Kitchen', image: tandoori },
  { name: 'Beer on tap', category: 'On tap', image: beer },
  { name: 'Wine & spirits', category: 'Drinks', image: wine },
  { name: 'Mojito', category: 'Drinks', image: mojito },
  { name: 'Fresh lemonade', category: 'Drinks', image: lemonade },
  { name: 'Tiramisu', category: 'Dessert', image: tiramisu },
  { name: 'Berry cheesecake', category: 'Dessert', image: cheesecake },
  { name: 'Sizzling brownie', category: 'Dessert', image: brownie },
];

export default function Menu({ activeCategory, searchValue }) {
  const visibleItems = useMemo(() => {
    const query = searchValue.trim().toLowerCase();
    return items.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch = !query || `${item.name} ${item.category}`.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchValue]);

  return <main className="menu-page"><div className="menu-heading"><p className="eyebrow">SOMETHING FOR EVERY MOOD</p><h1>Good things<br /><em>to gather around.</em></h1><p>From the kitchen, the bar and the tap. Find a new favourite and make it a reason to stay.</p></div><p className="menu-note">A selection of menu favourites. Items and availability may change.</p>{visibleItems.length > 0 ? <div className="menu-grid">{visibleItems.map((item) => <article className="menu-card" key={item.name}><div className="menu-card-image"><img src={item.image} alt={item.name} loading="lazy" /></div><div className="menu-card-meta"><span>{item.category}</span><span aria-hidden="true">↗</span></div><h2>{item.name}</h2></article>)}</div> : <p className="menu-empty" role="status">No menu items match “{searchValue}”. Try another search.</p>}</main>;
}
