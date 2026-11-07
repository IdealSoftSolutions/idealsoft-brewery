import sections from './menu.json';

export { sections };
export const section = (id) => sections.find((s) => s.id === id) || { id, title: '', items: [] };
export const countIn = (category) => sections.filter((s) => s.category === category).reduce((sum, s) => sum + s.items.length, 0);
export const totalItems = sections.reduce((sum, s) => sum + s.items.length, 0);
// Samplers sit in the beer section too; only real beers carry a style.
export const beers = section('craft-beer').items.filter((item) => item.style);
