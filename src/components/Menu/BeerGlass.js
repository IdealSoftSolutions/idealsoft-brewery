// Beers have no photos in Digitory, so each one gets a pint glass tinted to its style.
const beerColours = {
  hefeweizen: '#e9a227',
  'butter beer': '#b8661c',
  'hazy ipa': '#f0a830',
  'helles lager': '#f5c542',
  'pineapple cider': '#e3c443',
  'oktoberfest lager': '#b5481e',
  'belgian wit': '#f1cf72',
};

export const beerColour = (style = '') => beerColours[style.toLowerCase()] || '#d98e2b';

export default function BeerGlass({ style, className = '' }) {
  const colour = beerColour(style);
  const id = `glass-${(style || 'beer').toLowerCase().replace(/[^a-z]+/g, '-')}`;
  return <svg className={`beer-glass ${className}`} viewBox="0 0 120 200" aria-hidden="true" focusable="false">
    <defs><clipPath id={id}><path d="M16 14h88l-10 176H26z" /></clipPath></defs>
    <g clipPath={`url(#${id})`}>
      <rect x="0" y="0" width="120" height="200" fill="rgba(255,255,255,.35)" />
      <rect x="0" y="44" width="120" height="160" fill={colour} />
      <circle className="beer-bubble" cx="44" cy="170" r="2.4" fill="rgba(255,255,255,.7)" />
      <circle className="beer-bubble beer-bubble-2" cx="70" cy="180" r="1.8" fill="rgba(255,255,255,.7)" />
      <circle className="beer-bubble beer-bubble-3" cx="58" cy="160" r="2" fill="rgba(255,255,255,.7)" />
      <path d="M8 30q10-14 22-6 8-12 22-4 10-10 22-2 12-10 24 0 10-4 14 8v22H8z" fill="#fff6e4" />
      <rect x="26" y="20" width="9" height="168" rx="4.5" fill="rgba(255,255,255,.28)" />
    </g>
    <path d="M16 14h88l-10 176H26z" fill="none" stroke="rgba(43,26,20,.35)" strokeWidth="3" strokeLinejoin="round" />
  </svg>;
}
