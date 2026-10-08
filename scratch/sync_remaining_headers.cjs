const fs = require('fs');

const headerHtml = fs.readFileSync('views/partials/header.ejs', 'utf8').trim();

const otherPages = ['about.html', 'solutions.html', 'partnership.html', 'contact.html'];

otherPages.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    const headerStart = content.indexOf('<header class="header-wrapper"');
    const headerEnd = content.indexOf('</header>', headerStart) + 9;
    if (headerStart !== -1 && headerEnd !== -1) {
      content = content.substring(0, headerStart) + headerHtml + content.substring(headerEnd);
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated header in ${file}`);
    }
  }
});
