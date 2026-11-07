import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiBeerStein, GiCookingPot, GiMartini, GiWheat } from 'react-icons/gi';
import { beers, countIn, section, totalItems } from '../../data/selectors';
import MenuItemModal from '../Menu/MenuItemModal';
import { BeerCard, DishCard } from '../Menu/cards';
import story from '../Assets/smokedBBQ.jpg';

const kitchenTabs = ['bar-bites', 'german-klassiker', 'oven-baked', 'small-plates-tandoor', 'desserts'].map(section).filter((s) => s.items.some((item) => item.image));

const categories = [
  { name: 'Kitchen', label: 'From the kitchen', image: '/gallery/food.jpg' },
  { name: 'On tap', label: 'Craft beer on tap', image: '/gallery/beer.jpg' },
  { name: 'Drinks', label: 'Cocktails & bar', image: '/gallery/bar.jpg' },
  { name: 'Dessert', label: 'Something sweet', image: section('desserts').items.find((item) => item.image)?.image },
];

const values = [
  { Icon: GiBeerStein, title: 'Fresh on tap', copy: 'Small-batch craft beer, from crisp lagers to hazy IPAs, poured fresh.' },
  { Icon: GiWheat, title: 'German at heart', copy: 'Wheat beers, an Oktoberfest lager and a menu of German Klassiker.' },
  { Icon: GiCookingPot, title: 'A full kitchen', copy: 'Bar bites and chaat to pizzas, pastas, tandoor and sharing boards.' },
  { Icon: GiMartini, title: 'A proper bar', copy: 'Signature cocktails, single malts, wine and zero-proof mocktails.' },
];

const tickerWords = ['Fresh pours', 'Bar bites', 'German Klassiker', 'Sharing boards', 'Signature cocktails', 'Oven baked', 'Good company'];

const faqs = [
  { q: 'Where is OKTOBER?', a: 'Jubilee Hills Road No. 10, Hyderabad. Drop in any time we are open.' },
  { q: 'What beers are on tap?', a: `${beers.map((b) => `${b.name} (${b.style})`).join(', ')}. Ask for a sampler if you cannot decide.` },
  { q: 'Do you have non-alcoholic drinks?', a: 'Yes. Mocktails, coolers and soft beverages are all on the drinks menu.' },
  { q: 'Is there something for vegetarians?', a: 'Plenty, from Paneer Tikka Pizza to Avocado Papadi Chaat and Steamed Edamame.' },
  { q: 'Who can be served alcohol?', a: 'Alcohol is served only to guests of legal drinking age. Please drink responsibly.' },
];

export default function Home() {
  const [selected, setSelected] = useState(null);
  const [tab, setTab] = useState(kitchenTabs[0]?.id);
  const activeTab = kitchenTabs.find((s) => s.id === tab) || kitchenTabs[0];

  return <main>
    <section className="hero">
      <div className="hero-text">
        <p className="pill pill-light">Hyderabad · Craft beer · Kitchen · Bar</p>
        <h1>Good times<br />are <span>on tap.</span></h1>
        <p className="hero-lede">House craft beer, a kitchen that loves a crowd and a bar stocked for every mood. Pull up a chair.</p>
        <div className="hero-actions">
          <Link className="btn btn-gold" to="/menu">Explore the menu <span aria-hidden="true">→</span></Link>
          <Link className="btn btn-outline-light" to="/menu" state={{ category: 'On tap' }}>See what's pouring</Link>
        </div>
        <dl className="hero-stats">
          <div><dt>Craft beers</dt><dd>{beers.length}</dd></div>
          <div><dt>On the menu</dt><dd>{totalItems}+</dd></div>
          <div><dt>Kitchen dishes</dt><dd>{countIn('Kitchen')}</dd></div>
        </dl>
      </div>
      <div className="hero-mosaic" aria-hidden="true">
        <img src="/gallery/beer.jpg" alt="" />
        <img src="/gallery/food.jpg" alt="" />
        <img src="/gallery/nab.jpg" alt="" />
        <img src="/gallery/bar.jpg" alt="" />
      </div>
    </section>

    <section className="values section-wrap" aria-label="Why OKTOBER">
      {values.map(({ Icon, title, copy }) => <div className="value" key={title}><span className="value-icon"><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{copy}</p></div>)}
    </section>

    <section className="section-wrap home-section" aria-labelledby="on-tap-title">
      <div className="section-head">
        <div><p className="eyebrow">Brewed for this taproom</p><h2 id="on-tap-title">On tap now</h2></div>
        <Link className="text-link" to="/menu" state={{ category: 'On tap' }}>Full beer list <span aria-hidden="true">→</span></Link>
      </div>
      <div className="beer-rail">{beers.map((item) => <BeerCard key={item.name} item={item} onView={() => setSelected(item)} />)}</div>
    </section>

    <div className="ticker" aria-hidden="true"><div className="ticker-track">{[0, 1].map((copy) => <span key={copy}>{tickerWords.map((word) => <span key={word}>{word}<i>✺</i></span>)}</span>)}</div></div>

    {activeTab && <section className="section-wrap home-section" aria-labelledby="kitchen-title">
      <div className="section-head">
        <div><p className="eyebrow">Made for the table</p><h2 id="kitchen-title">From the kitchen</h2></div>
        <Link className="text-link" to="/menu" state={{ category: 'Kitchen' }}>Full kitchen menu <span aria-hidden="true">→</span></Link>
      </div>
      <div className="tabs" role="group" aria-label="Kitchen sections">{kitchenTabs.map((s) => <button key={s.id} type="button" className={s.id === activeTab.id ? 'tab is-active' : 'tab'} aria-pressed={s.id === activeTab.id} onClick={() => setTab(s.id)}>{s.title.replace('Small Plates · ', '')}</button>)}</div>
      <div className="dish-grid">{activeTab.items.filter((item) => item.image).slice(0, 8).map((item) => <DishCard key={item.name} item={item} tag={activeTab.title.replace('Small Plates · ', '')} onView={() => setSelected(item)} />)}</div>
    </section>}

    <section className="section-wrap home-section" aria-labelledby="explore-title">
      <div className="section-head"><div><p className="eyebrow">Something for every mood</p><h2 id="explore-title">Explore the menu</h2></div></div>
      <div className="category-grid">{categories.map((c) => <Link key={c.name} className="category-tile" to="/menu" state={{ category: c.name }}>
        {c.image && <img src={c.image} alt="" loading="lazy" />}
        <span className="category-tile-text"><span className="category-tile-count">{countIn(c.name)} items</span><span className="category-tile-name">{c.label}</span></span>
        <span className="category-tile-arrow" aria-hidden="true">→</span>
      </Link>)}</div>
    </section>

    <section className="story section-wrap">
      <img src={story} alt="A smoked barbecue platter from the OKTOBER kitchen" loading="lazy" />
      <div>
        <p className="eyebrow">Welcome to OKTOBER</p>
        <h2>A little more than a night out.</h2>
        <p>Fresh pours, generous plates and space to slow down. Make us part of your next catch-up, celebration or just-because evening.</p>
        <Link className="btn btn-red" to="/about">Our story <span aria-hidden="true">→</span></Link>
      </div>
    </section>

    <section className="faq section-wrap" aria-labelledby="faq-title">
      <div><p className="eyebrow">Good to know</p><h2 id="faq-title">Any last questions?</h2></div>
      <div className="faq-list">{faqs.map((f) => <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div>
    </section>

    <section className="cta-banner">
      <img className="cta-banner-mark" src="/brand/wordmark-cream.png" alt="" aria-hidden="true" loading="lazy" />
      <p className="eyebrow eyebrow-light">Your next good evening</p>
      <h2>We saved you a seat.</h2>
      <p>Jubilee Hills Road No. 10, Hyderabad</p>
      <Link className="btn btn-gold" to="/visit">Plan your visit <span aria-hidden="true">→</span></Link>
    </section>

    <MenuItemModal item={selected} onClose={() => setSelected(null)} />
  </main>;
}
