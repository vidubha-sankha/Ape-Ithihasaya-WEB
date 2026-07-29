const fs = require('fs');
let cat = JSON.parse(fs.readFileSync('data/history-categories.json', 'utf8'));
const newKingdom = {
  id: 'upatissa-kingdom',
  order: 6,
  slug: 'upatissa',
  name: {
    en: 'Upatissa Nuwara Kingdom',
    si: 'උපතිස්ස නුවර රාජධානිය'
  },
  type: 'kingdom',
  evidenceLevel: 'chronicle'
};
cat.splice(5, 0, newKingdom);
for (let i = 6; i < cat.length; i++) {
  cat[i].order = i + 1;
}
fs.writeFileSync('data/history-categories.json', JSON.stringify(cat, null, 2));

let ts = fs.readFileSync('data/history-timeline.ts', 'utf8');
const newTsKingdom = `  {
    id: "upatissa-kingdom",
    order: 6,
    type: "kingdom",
    iconName: "building",
    name: {
      si: "උපතිස්ස නුවර රාජධානිය",
      en: "Upatissa Nuwara Kingdom",
    },
    period: {
      si: "විජයගෙන් පසු හා අනුරාධපුරයට පෙර",
      en: "Between Vijaya and Anuradhapura",
    },
    description: {
      si: "උපතිස්ස කුමරු විසින් පිහිටුවන ලදැයි සැලකෙන අතර, පණ්ඩුකාභය විසින් අනුරාධපුරය අගනුවර කරගන්නා තෙක් පාලන මධ්‍යස්ථානය විය.",
      en: "Considered to be established by Prince Upatissa, it served as the political centre until Pandukabhaya made Anuradhapura the capital.",
    },
    evidenceType: "chronicle",
    href: "/kingdoms/upatissa",
    highlights: [
      {
        si: "උපතිස්ස කුමරු",
        en: "Prince Upatissa",
      },
      {
        si: "මුල් කෘෂිකාර්මික ජනාවාස",
        en: "Early agricultural settlements",
      },
    ],
  },`;
  
// Find the index to insert
let insertIdx = ts.indexOf('id: "anuradhapura-kingdom",');
let insertPos = ts.lastIndexOf('  {', insertIdx);
ts = ts.slice(0, insertPos) + newTsKingdom + '\n' + ts.slice(insertPos);

// Now update all 'order: X,' where X >= 6
// We have to be careful not to match the one we just inserted which is already 6.
// Actually, it's easier to just match the rest of the file after the inserted part.
let parts = ts.split(newTsKingdom);
let secondPart = parts[1];
for (let i = 19; i >= 6; i--) {
  let regex = new RegExp('order: ' + i + ',', 'g');
  secondPart = secondPart.replace(regex, 'order: ' + (i + 1) + ',');
}
ts = parts[0] + newTsKingdom + secondPart;

fs.writeFileSync('data/history-timeline.ts', ts);
console.log('done');
