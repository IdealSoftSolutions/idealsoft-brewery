import { Link } from 'react-router-dom';
import hero from '../Assets/food/beers.jpg';
import plate from '../Assets/smokedBBQ.jpg';

export default function Home() {
  return <main>
    <section className="hero"><img className="hero-image" src={hero} alt="A selection of drinks ready to share" /><div className="hero-shade" /><div className="hero-content"><p className="eyebrow eyebrow-light">A BREWERY & GATHERING PLACE · HYDERABAD</p><h1>Good times<br />are <em>on tap.</em></h1><p className="hero-copy">Come for the craft. Stay for the company.</p><Link className="button button-light" to="/menu">Explore our menu <span aria-hidden="true">↗</span></Link></div><div className="hero-caption"><span>01 / 03</span><span>CRAFT · FOOD · GOOD COMPANY</span></div></section>
    <section className="intro section-wrap"><div><p className="eyebrow">WELCOME TO OKTOBER</p><h2>A little more<br /><em>than a night out.</em></h2></div><div className="intro-copy"><p>Fresh pours, generous plates and space to slow down. Make us part of your next catch-up, celebration or just-because evening.</p><Link className="text-link" to="/about">Get to know us <span aria-hidden="true">↗</span></Link></div></section>
    <section className="feature"><div className="feature-image-wrap"><img src={plate} alt="A dish from the kitchen" loading="lazy" /></div><div className="feature-copy"><p className="eyebrow eyebrow-light">MADE FOR THE TABLE</p><h2>One more round.<br /><em>One more bite.</em></h2><p>Gather around a table of favourites, find a drink that suits your mood, and let the evening take its time.</p><Link className="button button-outline" to="/menu">Take a look at the menu <span aria-hidden="true">↗</span></Link></div></section>
    <section className="visit-strip"><p className="eyebrow">YOUR NEXT GOOD EVENING</p><h2>We saved you<br /><em>a seat.</em></h2><Link className="button button-dark" to="/visit">Plan your visit <span aria-hidden="true">↗</span></Link></section>
  </main>;
}
