import express from 'express';
import compression from 'compression';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(compression());

// Serve static directory (dist if built, otherwise root)
const staticDir = process.env.NODE_ENV === 'production' 
  ? path.join(__dirname, 'dist') 
  : __dirname;

app.use(express.static(staticDir, {
  maxAge: '1d',
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache');
    }
  }
}));

// Fallback to index.html for SPA/deep links
app.get('*', (req, res) => {
  res.sendFile(path.join(staticDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`GreenNext Technologies Server running at http://localhost:${PORT}`);
});
