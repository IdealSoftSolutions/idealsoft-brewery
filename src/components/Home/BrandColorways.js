import { useEffect, useState } from 'react';
import './BrandColorways.css';

const colorways = [
  { label: 'Forest', className: 'colorway-forest', logo: '/logo-oktober-forest.svg' },
  { label: 'Wine', className: 'colorway-wine', logo: '/logo-oktober-wine.svg' },
  { label: 'Pine', className: 'colorway-pine', logo: '/logo-oktober-pine.svg' },
  { label: 'Copper', className: 'colorway-copper', logo: '/logo-oktober-copper.svg' },
  { label: 'Cream', className: 'colorway-cream', logo: '/logo-oktober-cream.svg' },
];

export default function BrandColorways() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches) return undefined;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % colorways.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, []);

  const colorway = colorways[active];
  return <section className={`brand-colorways ${colorway.className}`} aria-label="OKTOBER logo colorways">
    <div className="brand-colorways-inner">
      <p className="eyebrow">ONE NAME · MANY MOODS</p>
      <div className="brand-colorways-logo-slot">{colorways.map((item, index) => <img key={item.logo} className={index === active ? 'is-active' : ''} src={item.logo} alt={index === active ? 'OKTOBER — The Brewery' : ''} aria-hidden={index !== active} />)}</div>
      <span className="colorway-caption">{colorway.label} edition <span aria-hidden="true">·</span> {String(active + 1).padStart(2, '0')} / {String(colorways.length).padStart(2, '0')}</span>
    </div>
  </section>;
}
