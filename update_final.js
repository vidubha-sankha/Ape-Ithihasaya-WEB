const fs = require('fs');

// 1. history-categories.json
let cat = JSON.parse(fs.readFileSync('data/history-categories.json', 'utf8'));
const newCat = {
  id: "upatissa-kingdom",
  order: 6,
  slug: "upatissa",
  name: {
    en: "Upatissa Nuwara Kingdom",
    si: "උපතිස්ස නුවර රාජධානිය"
  },
  type: "kingdom",
  evidenceLevel: "chronicle"
};
const tambaIdx = cat.findIndex(c => c.id === 'tambapanni-kingdom');
cat.splice(tambaIdx + 1, 0, newCat);
cat = cat.filter(c => c.id !== 'jaffna-kingdom' && c.id !== 'raigama-kingdom');
cat.forEach((c, i) => { c.order = i + 1; });
fs.writeFileSync('data/history-categories.json', JSON.stringify(cat, null, 2));

// 2. history-timeline.ts
let ts = fs.readFileSync('data/history-timeline.ts', 'utf8');

// Insert upatissa
const tsUpatissa = `  {
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
  },
`;

const tsInsertIdx = ts.indexOf('  {\n    id: "anuradhapura-kingdom",');
ts = ts.slice(0, tsInsertIdx) + tsUpatissa + ts.slice(tsInsertIdx);

function removeTsBlock(str, id) {
  const start = str.indexOf(`  {\n    id: "${id}",`);
  if (start !== -1) {
    const end = str.indexOf('  },', start) + 4;
    return str.slice(0, start) + str.slice(end);
  }
  return str;
}
ts = removeTsBlock(ts, 'jaffna-kingdom');
ts = removeTsBlock(ts, 'raigama-kingdom');

const historyArrayStart = ts.indexOf('export const historyTimeline: TimelineItem[] = [');
let beforeTimeline = ts.slice(0, historyArrayStart);
let timelineStr = ts.slice(historyArrayStart);

let orderCounter = 1;
timelineStr = timelineStr.replace(/order: \d+,/g, () => {
  return `order: ${orderCounter++},`;
});

ts = beforeTimeline + timelineStr;

fs.writeFileSync('data/history-timeline.ts', ts);

console.log('done updating JSON and TS to 11 kingdoms');
