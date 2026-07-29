const fs = require('fs');

let ts = fs.readFileSync('data/history-timeline.ts', 'utf8');

// Parse historyTimeline using regex to find objects
const startTag = 'export const historyTimeline: TimelineItem[] = [';
const startIdx = ts.indexOf(startTag);
const endIdx = ts.indexOf('];', startIdx);

const beforeStr = ts.slice(0, startIdx + startTag.length);
const arrayStr = ts.slice(startIdx + startTag.length, endIdx);
const afterStr = ts.slice(endIdx);

// Array of objects
let objects = [];
let currentObj = '';
let bracketCount = 0;
let inString = false;

for (let i = 0; i < arrayStr.length; i++) {
  const char = arrayStr[i];
  if (char === '"') inString = !inString;
  if (!inString && char === '{') bracketCount++;
  if (!inString && char === '}') bracketCount--;
  
  if (bracketCount > 0 || char === '}') {
    currentObj += char;
  }
  
  if (bracketCount === 0 && currentObj.trim().length > 0 && char === '}') {
    objects.push(currentObj);
    currentObj = '';
  }
}

// Map them
let timelineItems = objects.map(o => o.trim());

// Insert Upatissa
const tsUpatissa = `{
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
  }`;

let newItems = [];
for (let item of timelineItems) {
  if (item.includes('id: "jaffna-kingdom"')) continue;
  if (item.includes('id: "raigama-kingdom"')) continue;
  
  newItems.push(item);
  if (item.includes('id: "tambapanni-kingdom"')) {
    newItems.push(tsUpatissa);
  }
}

// Reorder
let orderNum = 1;
newItems = newItems.map(item => {
  return item.replace(/order:\s*\d+,/, `order: ${orderNum++},`);
});

// Reconstruct
const finalStr = beforeStr + '\n  ' + newItems.join(',\n  ') + '\n' + afterStr;
fs.writeFileSync('data/history-timeline.ts', finalStr);
console.log('Fixed TS file properly!');
