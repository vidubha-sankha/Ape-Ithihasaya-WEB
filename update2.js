const fs = require('fs');

// 1. Update history-categories.json
let cat = JSON.parse(fs.readFileSync('data/history-categories.json', 'utf8'));
// Filter out jaffna and raigama
cat = cat.filter(c => c.id !== 'jaffna-kingdom' && c.id !== 'raigama-kingdom');
// Recompute orders sequentially to be safe
cat.forEach((c, i) => {
  c.order = i + 1;
});
fs.writeFileSync('data/history-categories.json', JSON.stringify(cat, null, 2));

// 2. Update history-timeline.ts (using regex to remove objects)
let ts = fs.readFileSync('data/history-timeline.ts', 'utf8');

// We can extract all TimelineItems from historyTimeline array and rewrite it,
// but since it's a TS file with types, it's safer to just do string replacements.
// Let's remove jaffna-kingdom block:
const jaffnaStart = ts.indexOf('  {\n    id: "jaffna-kingdom",');
if (jaffnaStart !== -1) {
  const jaffnaEnd = ts.indexOf('  },', jaffnaStart) + 4;
  ts = ts.slice(0, jaffnaStart) + ts.slice(jaffnaEnd);
}

// Remove raigama-kingdom block:
const raigamaStart = ts.indexOf('  {\n    id: "raigama-kingdom",');
if (raigamaStart !== -1) {
  const raigamaEnd = ts.indexOf('  },', raigamaStart) + 4;
  ts = ts.slice(0, raigamaStart) + ts.slice(raigamaEnd);
}

// Now we need to fix the order properties in history-timeline.ts
// We'll parse the file by splitting at '  {\n    id: "'
// and rewrite the 'order: X,' line.
let lines = ts.split('\n');
let orderCount = 1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('    order: ')) {
    lines[i] = '    order: ' + orderCount + ',';
    orderCount++;
  }
}
ts = lines.join('\n');

fs.writeFileSync('data/history-timeline.ts', ts);

// 3. Update Navbar.tsx
let nav = fs.readFileSync('components/Navbar.tsx', 'utf8');
const jaffnaNavStart = nav.indexOf('  {\n    id: "jaffna",');
if (jaffnaNavStart !== -1) {
  const jaffnaNavEnd = nav.indexOf('  },', jaffnaNavStart) + 4;
  nav = nav.slice(0, jaffnaNavStart) + nav.slice(jaffnaNavEnd);
}

const raigamaNavStart = nav.indexOf('  {\n    id: "raigama",');
if (raigamaNavStart !== -1) {
  const raigamaNavEnd = nav.indexOf('  },', raigamaNavStart) + 4;
  nav = nav.slice(0, raigamaNavStart) + nav.slice(raigamaNavEnd);
}
fs.writeFileSync('components/Navbar.tsx', nav);

console.log('done updating to 11 kingdoms');
