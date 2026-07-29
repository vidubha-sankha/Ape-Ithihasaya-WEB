const fs = require('fs');

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

const tsInsertIdx = ts.indexOf('id: "anuradhapura-kingdom"');
if (tsInsertIdx === -1) {
    console.error("Could not find anuradhapura-kingdom");
    process.exit(1);
}
const actualTsInsert = ts.lastIndexOf('  {', tsInsertIdx);
ts = ts.slice(0, actualTsInsert) + tsUpatissa + ts.slice(actualTsInsert);

// Remove Jaffna and Raigama
function removeTsBlock(str, id) {
  const start = str.indexOf(`id: "${id}"`);
  if (start !== -1) {
    const bracketStart = str.lastIndexOf('  {', start);
    const end = str.indexOf('  },', bracketStart) + 4;
    return str.slice(0, bracketStart) + str.slice(end);
  }
  return str;
}
ts = removeTsBlock(ts, 'jaffna-kingdom');
ts = removeTsBlock(ts, 'raigama-kingdom');

const historyArrayStart = ts.indexOf('export const historyTimeline: TimelineItem[] = [');
const historyArrayEnd = ts.indexOf('export const parallelHistoricalRegions');

let beforeTimeline = ts.slice(0, historyArrayStart);
let timelineStr = ts.slice(historyArrayStart, historyArrayEnd);
let afterTimeline = ts.slice(historyArrayEnd);

let orderCounter = 1;
timelineStr = timelineStr.replace(/order: \d+,/g, () => {
  return `order: ${orderCounter++},`;
});

ts = beforeTimeline + timelineStr + afterTimeline;

fs.writeFileSync('data/history-timeline.ts', ts);

console.log('done updating TS to 11 kingdoms safely');
