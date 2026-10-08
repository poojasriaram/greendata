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
    // Clean up stray comment or div before header
    content = content.replace(/(?:<!-- Top Utility Bar -->\s*)?<\/div>\s*(?=\s*<!-- ═+|<header)/g, '');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Cleaned up header in ${file}`);
  }
});
