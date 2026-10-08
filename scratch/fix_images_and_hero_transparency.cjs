const fs = require('fs');
const path = require('path');

// 1. Fix CSS in src/styles/sections.css for right-side transparency
let sectionsCss = fs.readFileSync('src/styles/sections.css', 'utf8');

const oldHeroSlideBeforeRegex = /\.hero-slide::before\s*\{[\s\S]*?z-index:\s*1;\s*\}/;
const newHeroSlideBeforeCss = `.hero-slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
  transform: scale(1.02);
  pointer-events: none;
  display: flex;
  align-items: center;
  padding: clamp(5rem, 8vw, 7.5rem) 0 clamp(4.5rem, 7vw, 6.5rem);
  background-size: cover;
  background-position: right center;
  background-repeat: no-repeat;
}

.hero-slide::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(7, 29, 26, 0.96) 0%, rgba(7, 29, 26, 0.88) 38%, rgba(7, 29, 26, 0.35) 65%, rgba(7, 29, 26, 0.05) 85%, transparent 100%),
              linear-gradient(180deg, rgba(7, 29, 26, 0.45) 0%, transparent 40%, rgba(7, 29, 26, 0.6) 100%);
  z-index: 1;
}`;

if (oldHeroSlideBeforeRegex.test(sectionsCss)) {
  sectionsCss = sectionsCss.replace(oldHeroSlideBeforeRegex, newHeroSlideBeforeCss);
  fs.writeFileSync('src/styles/sections.css', sectionsCss, 'utf8');
  console.log('Updated hero slide transparency CSS in sections.css');
}

// 2. Replace mismatched image paths across all HTML and EJS files
const imageReplacements = [
  {
    from: /hyperscale_data_center_1791444139983\.jpg/g,
    to: 'hyperscale_datacenter_campus_1791444095302.jpg'
  },
  {
    from: /convention_center_1791444158406\.jpg/g,
    to: 'convention_exhibition_center_1791444156680.jpg'
  },
  {
    from: /business_hotel_hospitality_1791444176465\.jpg/g,
    to: 'luxury_business_hotel_1791444276549.jpg'
  },
  {
    from: /precision_engineering_park_1791444195155\.jpg/g,
    to: 'precision_engineering_hub_1791444395950.jpg'
  }
];

const targetFiles = [
  'index.html',
  'about.html',
  'infrastructure.html',
  'locations.html',
  'solutions.html',
  'partnership.html',
  'contact.html',
  'views/index.ejs',
  'views/infrastructure.ejs',
  'views/locations.ejs',
  'views/solutions.ejs',
  'views/partnership.ejs',
  'views/contact.ejs'
];

targetFiles.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    imageReplacements.forEach(({ from, to }) => {
      content = content.replace(from, to);
    });
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated images in ${file}`);
  }
});
