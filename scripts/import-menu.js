// Snapshot the live Digitory menu into src/data/menu.json. Run: npm run import-menu
const fs = require('fs');
const path = require('path');

const MENU_URL = 'https://rms-pos-median.digitory.com/api/v1/stores/848/menu?table_id=H1&service_type=table&digital_menu=1';
// Item photos live in the back-office "nudges" payload, keyed by menu item id.
const IMAGES_URL = 'https://rms-api.digitory.com/accounts/456/nudges';
const OUTPUT = path.join(__dirname, '..', 'src', 'data', 'menu.json');
const IMAGE_DIR = path.join(__dirname, '..', 'public', 'menu-photos');

const sections = [
  ['Kitchen', 'Bar Bites', 'cuisine'],
  ['Kitchen', 'Sharing Boards', 'cuisine'],
  ['Kitchen', 'Fresh Salads', 'cuisine'],
  ['Kitchen', 'Chaat Bazaar', 'cuisine'],
  ['Kitchen', 'European', 'category', 'Small Plates · European'],
  ['Kitchen', 'Asian', 'category', 'Small Plates · Asian'],
  ['Kitchen', 'Tandoor', 'category', 'Small Plates · Tandoor'],
  ['Kitchen', 'Regional Favourites', 'cuisine'],
  ['Kitchen', 'Steam Station', 'cuisine'],
  ['Kitchen', 'German Klassiker', 'cuisine'],
  ['Kitchen', 'Oven Baked', 'cuisine'],
  ['Kitchen', 'Pastas & Risottos', 'cuisine'],
  ['Kitchen', 'Large Bites', 'cuisine'],
  ['Kitchen', 'Staples', 'cuisine'],
  ['Dessert', 'Desserts', 'cuisine'],
  ['On tap', 'Craft Beer', 'cuisine'],
  ['Drinks', 'Signature Cocktails', 'category'],
  ['Drinks', 'Modern Classics', 'category'],
  ['Drinks', 'Shooters', 'cuisine'],
  ['Drinks', 'Scotch - Blended', 'category', 'Scotch · Blended'],
  ['Drinks', 'Scotch - Single Malt', 'category', 'Scotch · Single Malt'],
  ['Drinks', 'Spirits', 'leftover', 'Whiskey · American, Irish & Japanese'],
  ['Drinks', 'Vodka', 'category'],
  ['Drinks', 'Gin', 'category'],
  ['Drinks', 'Rum', 'category'],
  ['Drinks', 'Tequila', 'category'],
  ['Drinks', 'Cognac', 'category'],
  ['Drinks', 'Brandy', 'category'],
  ['Drinks', 'Liqueurs & Aperitifs', 'category'],
  ['Drinks', 'Wine - Red', 'category', 'Wine · Red'],
  ['Drinks', 'Wine - White', 'category', 'Wine · White'],
  ['Drinks', 'Wine', 'leftover', 'Wine · Rosé'],
  ['Drinks', 'Wine - Sparkling', 'category', 'Wine · Sparkling'],
  ['Drinks', 'Cocktails', 'leftover', 'Hot Drinks'],
  ['Drinks', 'Mocktails', 'cuisine'],
  ['Drinks', 'Soft Beverages', 'cuisine'],
];

const toNumber = (price) => Number(String(price).replace(/,/g, ''));
const tidyList = (text) => text.replace(/\s*,+\s*/g, ', ').replace(/\s+/g, ' ').trim();
const slug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function servingLabel(name, isWine) {
  if (isWine && name === '30ml') return '150 ml glass';
  if (name === 'Each' || name === 'Set') return '';
  return name.replace(/^(\d+)\s*ml/i, '$1 ml');
}

function toItem(raw, isWine) {
  const item = { name: raw.name.trim() };
  const description = (raw.description || '').trim();
  const beer = description.match(/^(.*?)\s*Style:\s*(.*?)\s*ABV \(%\):\s*([\d.]+)\s*I?BU:\s*(\S+)\s*Taste Profile:\s*(.*)$/s);
  const styleInName = item.name.match(/^(.*?)\s*\((.+)\)$/);

  if (isWine) item.name = item.name.replace(/\s*\(150 ml glass\)/i, '');
  else if (styleInName && raw.departmentId === 2584) {
    item.name = styleInName[1];
    item.style = styleInName[2];
  }

  if (beer) {
    Object.assign(item, { description: beer[1], style: beer[2], abv: beer[3], ibu: beer[4], taste: tidyList(beer[5]) });
  } else if (description) {
    item.description = tidyList(description);
  }

  item.prices = raw.prices.map((p) => ({ label: servingLabel(p.servingName, isWine), price: toNumber(p.price) }));
  return item;
}

async function getJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Request to ${url} failed: ${response.status}`);
  return response.json();
}

async function downloadImage(id, url) {
  const file = path.join(IMAGE_DIR, `${id}.jpg`);
  if (!fs.existsSync(file)) {
    const response = await fetch(url);
    if (!response.ok) {
      console.warn(`Skipping image for item ${id}: ${response.status}`);
      return undefined;
    }
    fs.writeFileSync(file, Buffer.from(await response.arrayBuffer()));
  }
  return `/menu-photos/${id}.jpg`;
}

async function main() {
  const [data, { _menu_images: imageUrls = {} }] = await Promise.all([getJson(MENU_URL), getJson(IMAGES_URL)]);
  fs.mkdirSync(IMAGE_DIR, { recursive: true });
  const images = new Map(await Promise.all(Object.entries(imageUrls).map(async ([id, url]) => [Number(id), await downloadImage(id, url)])));

  const items = new Map(Object.values(data.menu_items).map((item) => [item.id, item]));
  const groups = { cuisine: Object.values(data.cuisines), category: Object.values(data.categories) };
  const categorised = new Set(groups.category.flatMap((group) => group.menuItems));
  const find = (kind, name) => {
    const group = groups[kind].find((g) => g.name === name);
    if (!group) throw new Error(`Missing ${kind} "${name}" in Digitory menu`);
    return group.menuItems;
  };

  const output = sections.map(([category, source, kind, title]) => {
    const ids = kind === 'leftover' ? find('cuisine', source).filter((id) => !categorised.has(id)) : find(kind, source);
    const isWine = source.startsWith('Wine');
    const entries = ids
      .map((id) => items.get(id))
      .filter((raw) => raw && raw.prices.some((p) => toNumber(p.price) > 0))
      .sort((a, b) => a.ordinal - b.ordinal)
      .map((raw) => {
        const item = toItem(raw, isWine);
        if (images.get(raw.id)) item.image = images.get(raw.id);
        return item;
      });
    const name = title || source;
    return { id: slug(name), category, title: name, items: entries };
  }).filter((section) => section.items.length > 0);

  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, `${JSON.stringify(output, null, 2)}\n`);
  console.log(`Wrote ${output.reduce((sum, s) => sum + s.items.length, 0)} items in ${output.length} sections to ${OUTPUT}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
