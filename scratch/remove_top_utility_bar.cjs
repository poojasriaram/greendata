const fs = require('fs');
const path = require('path');

const files = [
  'index.html',
  'about.html',
  'infrastructure.html',
  'locations.html',
  'solutions.html',
  'partnership.html',
  'contact.html'
];

files.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Remove the entire top-utility-bar block
    const regex = /<!--\s*═+\s*TOP ENTERPRISE UTILITY BAR[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/i;
    if (regex.test(content)) {
      content = content.replace(regex, '');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Removed top-utility-bar from ${file}`);
    } else {
      // Fallback regex if comment format is slightly different
      const fallbackRegex = /<div class="top-utility-bar"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/i;
      if (fallbackRegex.test(content)) {
        content = content.replace(fallbackRegex, '');
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Removed top-utility-bar (fallback) from ${file}`);
      } else {
        console.log(`Pattern not matched in ${file}`);
      }
    }
  }
});
